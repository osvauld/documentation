import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import d2 from "astro-d2";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: "Osvauld Technical Documentation",
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
          { label: "Data Flow", link: "/architecture/data-flow" },
        ],
      },
      {
        label: "Identity & Cryptography",
        items: [
          { label: "Triple-Key Architecture", link: "/identity/triple-key-system" },
          { label: "Key Generation", link: "/identity/key-generation" },
          { label: "Identity Verification", link: "/identity/verification" },
          { label: "Data Encryption Model", link: "/identity/encryption-model" },
        ],
      },
      {
        label: "Peer-to-Peer Networking",
        items: [
          { label: "Iroh Integration", link: "/networking/iroh-integration" },
          { label: "Handshake Protocol", link: "/networking/handshake-protocol" },
          { label: "Connection Types", link: "/networking/connection-types" },
          { label: "Node Discovery", link: "/networking/node-discovery" },
        ],
      },
      {
        label: "Permission System",
        items: [
          { label: "UCAN Architecture", link: "/permissions/ucan-architecture" },
          { label: "Permission Types", link: "/permissions/permission-types" },
          { label: "Delegation Chains", link: "/permissions/delegation-chains" },
          { label: "Permission Validation", link: "/permissions/validation" },
        ],
      },
      {
        label: "Data Synchronization",
        items: [
          { label: "CRDT Implementation", link: "/sync/crdt-implementation" },
          { label: "Synchronization Strategy", link: "/sync/sync-strategy" },
          { label: "Permission-Validated Operations", link: "/sync/permission-validation" },
          { label: "Conflict Resolution", link: "/sync/conflict-resolution" },
        ],
      },
      {
        label: "Sovereign Nodes",
        items: [
          { label: "Purpose & Architecture", link: "/sovereign-nodes/architecture" },
          { label: "Setup & Authorization", link: "/sovereign-nodes/setup" },
          { label: "Multi-User Support", link: "/sovereign-nodes/multi-user" },
          { label: "Operational Model", link: "/sovereign-nodes/operations" },
        ],
      },
      {
        label: "Applications",
        items: [
          { label: "Collaborative Editor", link: "/applications/collaborative-editor" },
          { label: "Document Lifecycle", link: "/applications/document-lifecycle" },
          { label: "Real-time Collaboration", link: "/applications/real-time-collab" },
          { label: "Future Applications", link: "/applications/future-apps" },
        ],
      },
      {
        label: "Security",
        items: [
          { label: "Threat Model", link: "/security/threat-model" },
          { label: "Attack Scenarios", link: "/security/attack-scenarios" },
          { label: "Security Best Practices", link: "/security/best-practices" },
          { label: "Known Limitations", link: "/security/limitations" },
        ],
      },
      {
        label: "Technical Reference",
        items: [
          { label: "Data Structures", link: "/reference/data-structures" },
          { label: "API Reference", link: "/reference/api" },
          { label: "Error Handling", link: "/reference/errors" },
          { label: "Configuration", link: "/reference/configuration" },
          { label: "Performance", link: "/reference/performance" },
        ],
      },
      {
        label: "Development",
        items: [
          { label: "Setting up Development", link: "/development/setup" },
          { label: "Building Applications", link: "/development/building-apps" },
          { label: "Testing", link: "/development/testing" },
          { label: "Contributing", link: "/development/contributing" },
        ],
      },
    ],
  }), d2({
    layout: "elk"
  })],
});
