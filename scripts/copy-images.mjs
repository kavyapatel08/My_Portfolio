import { copyFileSync, existsSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const sources = [
  join(root, "..", "assets"),
  join(root, "assets"),
];

const assetsDir = sources.find((dir) => existsSync(join(dir, "profile.png")));

if (!assetsDir) {
  console.warn("Image assets not found; using bundled imports only.");
  process.exit(0);
}

const copies = [
  ["profile.png", "public/images/profile.png"],
  ["bot-defender-thumb.png", "public/images/projects/bot-defender-thumb.png"],
  [
    "insurance-premium-thumb.png",
    "public/images/projects/insurance-premium-thumb.png",
  ],
];

for (const [src, dest] of copies) {
  const destPath = join(root, dest);
  mkdirSync(dirname(destPath), { recursive: true });
  copyFileSync(join(assetsDir, src), destPath);
  console.log("Copied", dest);
}
