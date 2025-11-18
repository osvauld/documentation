import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { ion } from "starlight-ion-theme";


const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://osvauld.com/#organization",
  "url": "https://docs.osvauld.com",
  "name": "Osvauld",
  "legalName": "OSVAULD SECURITY SOLUTIONS PRIVATE LIMITED",
  "description": "Osvauld brings peer-to-peer, end-to-end encrypted applications built for personal autonomy",
  "slogan": "Connect without compromise",
  "logo": "https://www.osvauld.com/assets/logo.png",
  "sameAs": [
    "https://github.com/osvauld",
    "https://www.osvauld.com",
    "https://in.linkedin.com/company/osvauld",
    "https://buymeacoffee.com/osvauld",
    "https://osvauld.com/#corporation"
  ]
}

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: "Documentation",
    favicon: '/favicon.ico',
    social: [
      { icon: 'telegram', label: 'Telegram', href: 'https://t.me/+tjZLZK8JV8g0NTVl' },
      {
        icon: 'github',
        label: 'GitHub',
        href: 'https://github.com/osvauld/osvauld',
      },
      {
        icon: 'email',
        label: 'Email',
        href: 'mailto:abe@osvauld.com?subject=Hello Osvauld',
      }
    ],
    customCss: ["./src/styles/custom.css"],
    sidebar: [
      {
        label: "Extended Web",
        items: [
          { label: "Manifesto", link: "/extended-web/introduction" },
          { label: "Paradigm", link: "/extended-web/paradigm" },
        ],
      },

      {
        label: "Protocol",
        items: [
          { label: "Identity, Discovery & Handshake", link: "/core/identity-and-connections" },
          { label: "Authorization & Synchronization", link: "/core/authorization-and-sync" },
        ],
      },
      {
        label: "Sthalam",
        items: [
          { label: "Introduction", link: "/sthalam/introduction" },
          { label: "Examples", link: "/sthalam/examples" },
          {
            label: "Personal Node",
            collapsed: true,
            items: [
              { label: "Setting Up", link: "/sovereign-node/setting-up" },
            ],
          },
          {
            label: "Future",
            collapsed: true,
            items: [
              { label: "Blockchain Integration", link: "/future/blockchain" },
              { label: "Planned Features", link: "/sthalam/future" },
            ],
          },
        ],
      },
    ],
    head: [
      {
        tag: 'meta',
        attrs: {
          property: 'og:image',
          content: '/osvauldthumb.webp',
        },
      },
      {
        tag: 'meta',
        attrs: {
          property: 'og:image:alt',
          content: 'Osvauld Documentation Preview',
        },
      },
      {
        tag: 'meta',
        attrs: {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      },
      {
        tag: 'meta',
        attrs: {
          name: 'twitter:image',
          content: '/osvauldthumb.webp',
        },
      },
      {
        tag: 'script',
        attrs: { type: 'application/ld+json' },
        content: JSON.stringify(orgSchema),
      },
      {
        tag: 'script',
        attrs: {
          'data-goatcounter': 'https://osvauld.goatcounter.com/count',
          async: true,
          src: 'https://gc.zgo.at/count.js',
        },
      },
    ],
    plugins: [ion()],
  },),

  ],
});
