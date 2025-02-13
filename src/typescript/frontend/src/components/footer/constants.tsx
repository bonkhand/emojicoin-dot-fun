import Discord from "@icons/Discord";
import Twitter from "components/svg/icons/Twitter";
import { LINKS } from "lib/env";
import { ROUTES } from "router/routes";

export const SOCIAL_ICONS = [
  { icon: Discord, href: LINKS?.discord ?? ROUTES.notFound },
  { icon: Twitter, href: LINKS?.x ?? ROUTES.notFound },
];
