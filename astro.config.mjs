// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "static",

  integrations: [
      starlight({
          title: "ibis slimes guide",
          social: [
              {
                  icon: "github",
                  label: "GitHub",
                  href: "https://github.com/jacobtread/ibis-slimes-guide",
              },
          ],
          sidebar: [
              {
                  label: "Guides",
                  items: [
                      { label: "Overview", slug: "guides/overview" },
                      { label: "Parts", slug: "guides/parts" },
                      { label: "Assembly", slug: "guides/assembly" },
                  ],
              },
          ],
      }),
  ],

  adapter: cloudflare(),
});