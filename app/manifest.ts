import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "Rakheeb Shaikh — Trading Systems", short_name: "Rakheeb", description: "Algorithmic trader and full-stack quant developer.", start_url: "/", display: "standalone", background_color: "#0b0d0e", theme_color: "#0b0d0e", icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }] };
}
