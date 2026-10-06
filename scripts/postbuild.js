import fs from "node:fs";
import path from "node:path";

const vercelStatic = path.resolve(".vercel/output/static");
const outputPublic = path.resolve(".output/public");
const dist = path.resolve("dist");

const source = fs.existsSync(vercelStatic)
  ? vercelStatic
  : fs.existsSync(outputPublic)
    ? outputPublic
    : null;

if (source) {
  if (!fs.existsSync(dist)) {
    fs.mkdirSync(dist, { recursive: true });
  }
  fs.cpSync(source, dist, { recursive: true });
  console.log(`[postbuild] Copied ${source} to ${dist}`);
}
