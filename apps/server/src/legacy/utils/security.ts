// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { randomBytes } from "node:crypto";

export const ALLOWED_KEY_CHARACTERS_TEST: RegExp = /^[a-zA-Z0-9_-]+$/;

export function generateSecureKeyWithAccountId(accountId: string): string {
  return generateSecureKey() // no '-' in the beginning
    .concat(accountId);
}

export function generateSecureKey(): string {
  return randomBytes(21)
    .toString("base64")
    .replace(/\+/g, "_") // URL-friendly characters
    .replace(/\//g, "-")
    .replace(/^-/, "_"); // no '-' in the beginning
}
