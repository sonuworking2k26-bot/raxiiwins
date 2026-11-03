export const site = {
  name: "Raxi Win",
  brand: "Raxi Win",
  host: "raxiiwins.com",
  url: "https://raxiiwins.com",
  locale: "en-IN",
  description:
    "Open Raxi Win on mobile, create your account, sign in safely, and learn WinGo, K3 and Aviator before you deposit.",
} as const;

/** Live app CTAs (header + hero buttons). */
export const externalLinks = {
  register: "https://www.raxi12.com/#/register?invitationCode=18913432260",
  login: "https://www.raxi12.com/#/login",
  telegramGiftCodes: "https://t.me/raxiwinofficialchanne",
} as const;

export const nav = [
  { href: "/", label: "Raxi Win" },
  { href: "/raxi-win-register", label: "Register" },
  { href: "/raxi-win-login", label: "Login" },
  { href: "/raxi-win-apk", label: "APK" },
  { href: "/raxi-win-game", label: "Game" },
  { href: "/guides/scam-checklist", label: "Scam checklist" },
] as const;

export type PageKey =
  | "home"
  | "register"
  | "login"
  | "apk"
  | "game"
  | "scam"
  | "responsible";

export const pages: Record<
  PageKey,
  {
    file: string;
    path: string;
    image?: string;
    imageAlt?: string;
  }
> = {
  home: {
    file: "home-raxi-win.md",
    path: "/",
    image: "/images/rw-lobby.webp",
    imageAlt: "Raxi Win lobby on mobile",
  },
  register: {
    file: "raxi-win-register.md",
    path: "/raxi-win-register",
    image: "/images/rw-register.webp",
    imageAlt: "Raxi Win register screen on mobile",
  },
  login: {
    file: "raxi-win-login.md",
    path: "/raxi-win-login",
    image: "/images/rw-login.webp",
    imageAlt: "Raxi Win login screen on mobile",
  },
  apk: {
    file: "raxi-win-apk.md",
    path: "/raxi-win-apk",
    image: "/images/rw-download.webp",
    imageAlt: "Raxi Win app download guide visual",
  },
  game: {
    file: "raxi-win-game.md",
    path: "/raxi-win-game",
    image: "/images/rw-games.webp",
    imageAlt: "Raxi Win games lobby with WinGo, K3 and more",
  },
  scam: {
    file: "scam-checklist.md",
    path: "/guides/scam-checklist",
    image: "/images/rw-banner.webp",
    imageAlt: "Raxi Win safety guide banner",
  },
  responsible: {
    file: "responsible-play.md",
    path: "/responsible-play",
  },
};
