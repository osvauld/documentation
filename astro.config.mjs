import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { ion } from "starlight-ion-theme";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://osvauld.com/#organization",
  url: "https://osvauld.com",
  name: "Osvauld",
  legalName: "OSVAULD SECURITY SOLUTIONS PRIVATE LIMITED",
  description:
    "Osvauld builds Xnet: private, sovereign shared software for people and their AI.",
  sameAs: [
    "https://github.com/osvauld",
    "https://in.linkedin.com/company/osvauld",
    "https://buymeacoffee.com/osvauld",
  ],
};

export default defineConfig({
  site: "https://docs.osvauld.com",
  // Pages are served without a trailing slash (wrangler.jsonc html_handling).
  trailingSlash: "never",
  integrations: [
    starlight({
      title: "Osvauld",
      description: "Documentation for Xnet and the current Osvauld runtime.",
      favicon: "/favicon.ico",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/osvauld/osvauld2",
        },
        {
          icon: "email",
          label: "Email",
          href: "mailto:abe@osvauld.com?subject=Hello%20Osvauld",
        },
      ],
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "Start here",
          items: [
            { label: "Xnet", link: "/xnet/introduction" },
            { label: "Current status", link: "/runtime/status" },
          ],
        },
        {
          label: "Current runtime",
          items: [
            { label: "Architecture", link: "/runtime/architecture" },
            { label: "Writing Lua apps", link: "/runtime/lua-apps" },
          ],
        },
        {
          label: "Foundations",
          collapsed: true,
          items: [
            { label: "Identity", link: "/runtime/identity" },
            { label: "Storage", link: "/runtime/storage" },
            { label: "Vault", link: "/runtime/vault" },
          ],
        },
      ],
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://osvauld.com/favicon-96x96.png",
          },
        },
        {
          tag: "meta",
          attrs: { name: "twitter:card", content: "summary" },
        },
        {
          tag: "script",
          attrs: { type: "application/ld+json" },
          content: JSON.stringify(organization),
        },
        {
          tag: "script",
          attrs: {
            "data-goatcounter": "https://osvauld.goatcounter.com/count",
            async: true,
            src: "https://gc.zgo.at/count.js",
          },
        },
      ],
      plugins: [ion()],
    }),
  ],
});
