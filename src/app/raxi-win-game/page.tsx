import type { Metadata } from "next";
import { GuidePage } from "@/components/GuidePage";
import { getDoc } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return pageMetadata(getDoc("game"));
}

export default function GamePage() {
  return (
    <GuidePage
      doc={getDoc("game")}
      showGames
      gallery={[
        {
          src: "/images/rw-games.webp",
          alt: "Raxi Win lottery and popular game tiles",
        },
        {
          src: "/images/rw-lobby.webp",
          alt: "Raxi Win home lobby categories",
        },
      ]}
    />
  );
}
