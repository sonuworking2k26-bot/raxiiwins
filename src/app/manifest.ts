import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "Raxi Win",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fff7f5",
    theme_color: "#9f1239",
    icons: [
      {
        src: "/images/rw-app-icon.webp",
        sizes: "192x192",
        type: "image/webp",
      },
      {
        src: "/images/rw-app-icon.webp",
        sizes: "512x512",
        type: "image/webp",
      },
    ],
  };
}
