import type { Metadata } from "next";
import { GuidePage } from "@/components/GuidePage";
import { getDoc } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return pageMetadata(getDoc("apk"));
}

export default function ApkPage() {
  return (
    <GuidePage
      doc={getDoc("apk")}
      gallery={[
        {
          src: "/images/rw-download.webp",
          alt: "Raxi Win download guide visual",
          variant: "wide",
        },
        {
          src: "/images/rw-lobby.webp",
          alt: "Raxi Win lobby after you open the app",
        },
      ]}
    />
  );
}
