// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: "ibis slimes guide",
            social: [
                {
                    icon: "github",
                    label: "GitHub",
                    href: "https://github.com/withastro/starlight",
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
});
