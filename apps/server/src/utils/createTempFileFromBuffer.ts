
export function createTempFileFromBuffer(buffer: Buffer): string {
  const tmpPath = require("os").tmpdir();
  const tmpFilePath = require("path").join(tmpPath, "tempfile");
  require("fs").writeFileSync(tmpFilePath, buffer);
  return tmpFilePath;
}
