import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // Default configuration is enough for this fully-static portfolio site.
  // (Incremental cache via R2 can be enabled here if dynamic routes are added later.)
});
