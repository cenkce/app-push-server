import { CodePushError } from "../../types/error";

export enum ErrorCode {
  ConnectionFailed = 0,
  NotFound = 1,
  AlreadyExists = 2,
  TooLarge = 3,
  Expired = 4,
  Invalid = 5,
  Other = 99,
}

// Human-readable strings
export module ReleaseMethod {
  export const Upload = "Upload";
  export const Promote = "Promote";
  export const Rollback = "Rollback";
}

export module Permissions {
  export const Owner = "Owner";
  export const Collaborator = "Collaborator";
}

export interface StorageError extends CodePushError {
  code: ErrorCode;
}

/**
 * Specifies an account with the power to manage apps, deployments and packages
 */
export interface Account {
  azureAdId?: string;
  /*generated*/ createdTime: number;
  /*const*/ email: string;
  gitHubId?: string;
  /*generated*/ id?: string;
  microsoftId?: string;
  /*const*/ name: string;
}

export interface CollaboratorProperties {
  /*generated*/ accountId?: string;
  /*generated*/ isCurrentAccount?: boolean;
  permission: string;
}

export interface CollaboratorMap {
  [email: string]: CollaboratorProperties;
}

export interface App {
  /*generated*/ collaborators?: CollaboratorMap;
  /*generated*/ createdTime: number;
  /*generated*/ id?: string;
  name: string;
}

export interface Deployment {
  /*generated*/ createdTime: number;
  /*generated*/ id?: string;
  name: string;
  key: string;
  package?: Package;
}

export interface DeploymentInfo {
  appId: string;
  deploymentId: string;
}

export interface BlobInfo {
  size: number;
  url: string;
}

export interface PackageHashToBlobInfoMap {
  [packageHash: string]: BlobInfo;
}

export interface Package {
  appVersion: string;
  blobUrl: string;
  description: string;
  diffPackageMap?: PackageHashToBlobInfoMap;
  isDisabled: boolean;
  isMandatory: boolean;
  /*generated*/ label?: string;
  manifestBlobUrl: string;
  originalDeployment?: string; // Set on "Promote"
  originalLabel?: string; // Set on "Promote" and "Rollback"
  packageHash: string;
  releasedBy?: string;
  releaseMethod?: string; // "Upload", "Promote" or "Rollback". Unknown if unspecified
  rollout?: number;
  size: number;
  uploadTime: number;
}