import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "osvauld",
      customCss: ["./src/styles/custom.css"],
      social: {
        github: "https://github.com/osvauld",
        linkedin: "https://www.linkedin.com/company/osvauld",
        discord: "https://discord.com/invite/kV6gBeM6Fm",
        instagram: "https://www.instagram.com/osvauld/",
      },
      sidebar: [
        {
          label: "Introduction",
          items: [
            { label: "Overview", link: "/introduction/overview" },
            // { label: "Security", link: "/introduction/security/" },
            // { label: "Release notes", link: "/introduction/release-notes/" },
            // {
            //   label: "Incident reports",
            //   link: "/introduction/incident-reports/",
            // },
            // {
            //   label: "Talk to a human",
            //   link: "/introduction/talk-to-a-human/",
            // },
          ], 
        },

        {
          label: "Installation",
          items: [
            {label: "Setting up osvauld", link: "/installation/setting-up-osvauld/"},
            {label: "Setting up dev server", link: "/installation/setting-up-dev-server/"},
          ]
        },
        {
          label: "System Design",
          items: [
            {label: "ERD", link: "/system-design/erd/"},
            {label: "What is a folder?" , link: "/system-design/folder/"},
            {label: 'What is a Credential?', link: "/system-design/credential/"},
            {label: "Registration Flow", link: "/system-design/registration/"},
            {label: "Login Flow", link: "/system-design/login/"},
            {label: "Sharing Credentials with users", link: "/system-design/sharing-credential-users/"},
            {label: "Sharing Credentials with groups", link: "/system-design/sharing-credentials-groups/"},
            {label: "Sharing Folder with users", link: "/system-design/sharing-folder-with-users/"},
            {label: "Sharing Folder with groups", link: "/system-design/sharing-folder-with-groups/"},
            {label: "Adding Users to a Group", link: "/system-design/adding-user-to-group/"},
            {label: "Editing a Credential", link: "/system-design/editing-credential/"},
            {label: "Adding a Credential", link: "/system-design/adding-credential/"},
          ]
        },
        
        // {
        //   label: "Installation",
        //   items: [
        //     { label: "Debian 12", link: "/installation/debian-12/" },
        //     { label: "Docker", link: "/installation/docker/" },
        //     { label: "AWS AMI", link: "/installation/aws-ami/" },
        //   ],
        // },
        // {
        //   label: "Update",
        //   items: [
        //     { label: "Update your osvauld instance", link: "/update/" },
        //     { label: "Update for Ubuntu", link: "/update/ubuntu/" },
        //     { label: "Update for Docker", link: "/update/docker/" },
        //   ],
        // },
        // {
        //   label: "Upgrade",
        //   items: [
        //     {
        //       label: "Migrate to CentOS 7 package",
        //       link: "/upgrade/centos-7-package/",
        //     },
        //     {
        //       label: "Migrate to Debian package",
        //       link: "/upgrade/debian-package/",
        //     },
        //     {
        //       label: "Migrate to Ubuntu package",
        //       link: "/upgrade/ubuntu-package/",
        //     },
        //   ],
        // },
        // {
        //   label: "Backup",
        //   items: [
        //     { label: "Backup your osvauld instance", link: "/backup/" },
        //     { label: "From source", link: "/backup/from-source/" },
        //     { label: "DEB/RPM package", link: "/backup/deb-rpm-package/" },
        //     { label: "Docker", link: "/backup/docker/" },
        //   ],
        // },
        // {
        //   label: "Installation Issues",
        //   items: [
        //     {
        //       label: "Community forum",
        //       link: "/installation-issues/community-forum/",
        //     },
        //   ],
        // },
      ],
    }),
  ],
});
