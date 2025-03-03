// import { AwsClient } from "aws4fetch";
import type { Context } from "hono";
import type { Env } from "../types/env";
import { ErrorCode, isStorageError } from "../types/error";
import { createStorageError } from "./storage";
import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export class BlobStorageProvider {
  private readonly storage: R2Bucket;
  private readonly aws: S3Client;
  private readonly accountId: string;
  private readonly bucketName: string;
  private R2_URL: string;

  constructor(private readonly ctx: Context<Env>) {
    this.storage = ctx.env.STORAGE_BUCKET;
    this.accountId = ctx.env.ACCOUNT_ID;
    this.bucketName = ctx.env.R2_BUCKET_NAME;
    this.R2_URL = `https://${this.accountId}.r2.cloudflarestorage.com`;
    this.aws = new S3Client({
      region: "auto",
      endpoint: this.R2_URL,
      logger: console,
      credentials: {
        accessKeyId: ctx.env.R2_ACCESS_KEY_ID,
        secretAccessKey: ctx.env.R2_SECRET_ACCESS_KEY,
      },
    });
  }

  async addBlob(
    blobId: string,
    data: ArrayBuffer,
    size: number
  ): Promise<string> {
    try {
      const signePutdUrl = await this.getBlobSignedUrl(blobId, "PUT");

      const resp = await fetch(signePutdUrl, {
        method: "PUT",
        body: data,
        headers: {
          "Content-Length": size.toString(),
        },
      });

      if (resp.status !== 200) {
        console.log("resp", resp.url);
        throw new Error(
          "Failed to upload blob" +
            resp.status.toString() +
            " " +
            resp.statusText
        );
      }

      // const resp = await this.storage.put(blobId, data, {
      //   customMetadata: {
      //     size: size.toString(),
      //   },
      // });

      return blobId;
    } catch (error) {
      console.error("Error uploading blob:", error);
      throw createStorageError(
        ErrorCode.ConnectionFailed,
        "Failed to upload blob to storage"
      );
    }
  }

  getBlobUrl(packageId: string): string {
    return `${packageId}`;
  }

  async getBlobSignedUrl(
    path: string,
    method: "PUT" | "GET" = "GET"
  ): Promise<string> {
    try {

      const key = path.split("/").at(-1);

      const signed = await getSignedUrl(
        this.aws,
        method === "GET"
          ? new GetObjectCommand({ Bucket: this.bucketName, Key: key })
          : new PutObjectCommand({ Bucket: this.bucketName, Key: key }),
        { expiresIn: 3600 }
      );

      return signed;
    } catch (error) {
      if (isStorageError(error) && error.code === ErrorCode.NotFound) {
        throw error;
      }
      console.error("Error getting blob URL:", error);
      throw createStorageError(
        ErrorCode.ConnectionFailed,
        "Failed to get blob URL"
      );
    }
  }

  async removeBlob(path: string): Promise<void> {
    try {
      await this.storage.delete(path);
    } catch (error) {
      console.error("Error removing blob:", error);
      throw createStorageError(
        ErrorCode.ConnectionFailed,
        "Failed to remove blob"
      );
    }
  }

  async moveBlob(sourcePath: string, destinationPath: string): Promise<string> {
    try {
      // Get source object
      const sourceObject = await this.storage.get(sourcePath);
      if (!sourceObject) {
        throw createStorageError(ErrorCode.NotFound, "Source blob not found");
      }

      // Copy to new location
      await this.storage.put(
        destinationPath,
        await sourceObject.arrayBuffer(),
        {
          customMetadata: sourceObject.customMetadata,
        }
      );

      // Delete original
      await this.storage.delete(sourcePath);

      // Return URL for new location
      return await this.getBlobUrl(destinationPath);
    } catch (error) {
      console.error("Error moving blob:", error);
      throw createStorageError(
        ErrorCode.ConnectionFailed,
        "Failed to move blob"
      );
    }
  }

  async deletePath(prefix: string): Promise<void> {
    try {
      const objects = await this.storage.list({
        prefix,
      });

      // Delete objects in batches of 1000 (R2 limit)
      const deletePromises: Promise<void>[] = [];
      const batch: string[] = [];

      for (const object of objects.objects) {
        batch.push(object.key);
        if (batch.length === 1000) {
          deletePromises.push(this.deleteObjects(batch));
          batch.length = 0;
        }
      }

      if (batch.length > 0) {
        deletePromises.push(this.deleteObjects(batch));
      }

      await Promise.all(deletePromises);
    } catch (error) {
      console.error("Error deleting path:", error);
      throw createStorageError(
        ErrorCode.ConnectionFailed,
        "Failed to delete path"
      );
    }
  }

  private async deleteObjects(keys: string[]): Promise<void> {
    try {
      await Promise.all(keys.map((key) => this.storage.delete(key)));
    } catch (error) {
      console.error("Error deleting objects:", error);
      throw createStorageError(
        ErrorCode.ConnectionFailed,
        "Failed to delete objects"
      );
    }
  }
}
