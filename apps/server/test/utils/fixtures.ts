import { env } from "cloudflare:test";
import type * as schema from "../../src/db/schema";
import type {
  AccessKey,
  Account,
  App,
  Collaborator,
  Deployment,
  Package,
} from "../../src/types/schemas";
import { generateDeploymentKey, generateKey, generateRandomKey } from "../../src/utils/security";
import { createId } from "@paralleldrive/cuid2";

export function createTestAccount() {
  return {
    id: generateRandomKey(),
    email: `test-${generateRandomKey().toLowerCase()}@example.com`,
    name: "Test User",
    linkedProviders: "keycloak",
    ssoId: generateRandomKey(),
    createdTime: Date.now(),
  };
}

export function createTestAccessKey(
  accountId: string = generateRandomKey(),
): Omit<AccessKey, "id"> {
  return {
    name: generateRandomKey(),
    friendlyName: `Test Key ${generateRandomKey()}`,
    createdBy: "Test",
    createdTime: Date.now(),
    description: "Test access key",
    expires: Date.now() + 3600000, // 1 hour
    isSession: false,
  };
}

export function createTestApp(overrides: Partial<App> = {}) {
  return {
    name: `test-app-${generateRandomKey()}`,
    collaborators: {},
    deployments: [],
    createdTime: Date.now(),
    ...overrides,
    id: overrides.id || createId(),
  };
}

export function createTestCollaborator(
  accountId: string,
  permission: "Owner" | "Collaborator" = "Collaborator",
): typeof schema.collaborator.$inferInsert {
  return {
    appId: generateRandomKey(),
    accountId,
    permission,
  };
}

export function createTestDeployment(
  appId: string,
) {
  return {
    id: generateRandomKey(),
    appId,
    name: `test-deployment-${generateRandomKey()}`,
    key: generateDeploymentKey(''),
    createdTime: Date.now(),
  };
}

export function createTestPackage(
  deploymentId: string,
  overrides: Partial<typeof schema.packages.$inferInsert> = {},
): typeof schema.packages.$inferInsert {
  return {
    id: generateRandomKey(),
    appVersion: "1.0.0",
    blobPath: `${generateRandomKey()}.zip`,
    description: "Test package",
    isDisabled: false,
    isMandatory: false,
    label: "v1",
    manifestBlobPath: `${generateRandomKey()}-manifest.json`,
    packageHash: generateRandomKey(),
    size: 1024,
    uploadTime: Date.now(),
    deploymentId,
    ...overrides,
  };
}

export async function createTestBlob(
  key: string,
  content: string | Uint8Array,
  options: R2PutOptions = {},
): Promise<{ key: string }> {
  await env.STORAGE_BUCKET.put(key, content, options);
  return { key };
}
