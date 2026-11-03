import type { Metadata } from "next";
import { GuidePage } from "@/components/GuidePage";
import { getDoc } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return pageMetadata(getDoc("register"));
}

export default function RegisterPage() {
  return (
    <GuidePage
      doc={getDoc("register")}
      showGames
      gallery={[
        {
          src: "/images/rw-register.webp",
          alt: "Raxi Win register screen on mobile",
        },
        {
          src: "/images/rw-invite.webp",
          alt: "Raxi Win invite friends screen",
        },
        {
          src: "/images/rw-gift.webp",
          alt: "Raxi Win gift code screen",
        },
      ]}
    />
  );
}
