import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { ion } from "starlight-ion-theme";

import d2 from "astro-d2";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: "Osvauld Documentation",
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
    plugins: [ion()],
  },),

  d2({
    layout: "elk"
  })],
});
