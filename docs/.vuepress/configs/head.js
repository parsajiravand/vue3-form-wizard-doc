const ICON = "/logo.svg";
const FAVICON = "/favicon.ico";

export const head = [
  ["link", { rel: "icon", type: "image/svg+xml", href: ICON }],
  ["link", { rel: "alternate icon", href: FAVICON, sizes: "any" }],
  ["link", { rel: "apple-touch-icon", sizes: "180x180", href: ICON }],
  ["link", { rel: "mask-icon", href: ICON, color: "#e74c3c" }],
  ["meta", { name: "msapplication-TileColor", content: "#e74c3c" }],
  ["meta", { name: "theme-color", content: "#ffffff" }],
  [
    "meta",
    {
      name: "google-site-verification",
      content: "0y7LzJnAhOU_iqkHxRZDzwrZPFKDV5j6Uyf4VBUED6U",
    },
  ],
];
