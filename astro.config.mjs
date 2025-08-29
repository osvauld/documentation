import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { ion } from "starlight-ion-theme";

import d2 from "astro-d2";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://osvauld.com/#organization",
  "url": "https://docs.osvauld.com",
  "name": "Osvauld",
  "legalName": "OSVAULD SECURITY SOLUTIONS PRIVATE LIMITED",
  "description": "Own Your Data, Leave No Footprint with Osvauld - a Rust framework for building peer-to-peer applications with privacy, security, and user control.",
  "slogan": "Own Your Data, Leave No Footprint",
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
    title: "Osvauld Documentation",
    favicon: '/favicon.ico',
    social: [
      { icon: 'telegram', label: 'Telegram', href: 'https://t.me/+tjZLZK8JV8g0NTVl'},
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
          { label: "Philosophy", link: "/introduction/philosophy" },
          { label: "What makes this possible", link: "/introduction/what-makes-this-possible" },
        ],
      },
      {
        label: "How it works",
        items: [
          { label: "Creating your identity", link: "/how-it-works/creating-your-identity" },
          { label: "Connecting with peers", link: "/how-it-works/connecting-to-peers" },
          { label: "Creating and sharing resources", link: "/how-it-works/creating-and-sharing" },
          { label: "User Synchronization", link: "/how-it-works/user-synchronization" },
          { label: "Resources Synchronization", link: "/how-it-works/resources-synchronization" },
          { label: "Live Edit", link: "/how-it-works/live-edit" }
        ],
      },

      {
        label: "Sovereign node",
        items: [
          { label: "Setting Up ", link: "/sovereign-node/setting-up" },
        ],
      },
    ],
    head: [
      {
        tag: 'meta',
        attrs: {
          property: 'og:image',
          content: '/osvauldthumb.png',
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
          content: '/osvauldthumb.png',
        },
      },
      {
        tag: 'script',
        attrs: { type: 'application/ld+json' },
        content: JSON.stringify(orgSchema),
      },
    ],
    plugins: [ion()],
  },),

  d2({
    layout: "elk"
  })],
});
