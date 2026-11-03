import type { Metadata } from "next";
import { GuidePage } from "@/components/GuidePage";
import { getDoc } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return pageMetadata(getDoc("scam"));
}

export default function ScamChecklistPage() {
  return (
    <GuidePage
      doc={getDoc("scam")}
      gallery={[
        {
          src: "/images/rw-download.webp",
          alt: "Only install from a host you trust",
          variant: "wide",
        },
        {
          src: "/images/rw-login.webp",
          alt: "Check the login hostname before typing your number",
        },
      ]}
    />
  );
}
