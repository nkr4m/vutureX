export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "VutureX",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Register",
      href: "/auth/register",
    },
    {
      label: "Login",
      href: "/auth/login",
    },
    {
      label: "Create",
      href: "/workspace/create-container",
    },
    {
      label: "Work",
      href: "/workspace/working-container",
    },
	{
		label: "Dashboard",
		href: "/workspace/dashboard",
	  }
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Register",
      href: "/auth/register",
    },
    {
      label: "Login",
      href: "/auth/login",
    },
    {
      label: "Create",
      href: "/workspace/create-container",
    },
    {
      label: "Work",
      href: "/workspace/working-container",
    },
	{
		label: "Dashboard",
		href: "/workspace/dashboard",
	  }
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
