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
        label: "Introduction",
        items: [
          { label: "The Extended Web", link: "/introduction/manifesto" },
          { label: "What Makes This Possible", link: "/introduction/what-makes-this-possible" },
        ],
      },
      {
        label: "Core Architecture",
        items: [
          { label: "Extended Web Paradigm", link: "/core/extended-web" },
          { label: "Identity & Key Systems", link: "/core/identity" },
          { label: "Peer Discovery", link: "/core/peer-discovery" },
          { label: "Handshake Mechanism", link: "/core/handshake" },
          { label: "Permits - Authorization", link: "/core/permits" },
          { label: "Synchronization Protocol", link: "/core/sync" },
        ],
      },
      {
        label: "Sthalam Application",
        items: [
          { label: "Introduction", link: "/sthalam/introduction" },
          { label: "Publishing Content", link: "/sthalam/publishing-content" },
          { label: "Viewer Connections", link: "/sthalam/viewer-connections" },
          { label: "Website Synchronization", link: "/sthalam/website-sync" },
          { label: "Forms & Submissions", link: "/sthalam/forms-and-submissions" },
          { label: "Comment Threads", link: "/sthalam/comment-threads" },
          { label: "Future Concepts", link: "/sthalam/future" },
        ],
      },
      {
        label: "Personal Node",
        items: [
          { label: "Setting Up", link: "/sovereign-node/setting-up" },
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
