import type { Metadata } from "next";
import { GuidePage } from "@/components/GuidePage";
import { getDoc } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return pageMetadata(getDoc("home"));
}

export default function HomePage() {
  return (
    <GuidePage
      doc={getDoc("home")}
      showGames
      gallery={[
        {
          src: "/images/rw-banner.webp",
          alt: "Raxi Win brand banner",
          variant: "wide",
        },
        {
          src: "/images/rw-lobby.webp",
          alt: "Raxi Win home lobby",
        },
        {
          src: "/images/rw-games.webp",
          alt: "Raxi Win games lobby",
        },
      ]}
    />
  );
}
