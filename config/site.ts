export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "meowrgh.pl",
  description: "hello.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Store",
      href: "/store",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Store",
      href: "/store",
    },
  ],
  links: {
    github: "https://github.com/femboyed",
    discord: "https://discord.gg/pinned",
    sponsor: "https://donate.stripe.com/dR6fZR4tG1Ew6Yw6or",
  },
};
