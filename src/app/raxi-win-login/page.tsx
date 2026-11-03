import type { Metadata } from "next";
import { GuidePage } from "@/components/GuidePage";
import { getDoc } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return pageMetadata(getDoc("login"));
}

export default function LoginPage() {
  return (
    <GuidePage
      doc={getDoc("login")}
      gallery={[
        {
          src: "/images/rw-login.webp",
          alt: "Raxi Win login — phone number and password",
        },
        {
          src: "/images/rw-account.webp",
          alt: "Raxi Win account screen after a successful login",
        },
      ]}
    />
  );
}
