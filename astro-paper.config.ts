import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://gary-deshayes.github.io/permaculture-foret",
    title: "Permaculture Forêt",
    description: "Guides pratiques de permaculture, jardinage bio et agroforesterie. Conseils testés et comparatifs honnêtes.",
    author: "Gary Deshayes",
    profile: "https://github.com/gary-deshayes",
    ogImage: "default-og.jpg",
    lang: "fr",
    timezone: "Europe/Paris",
    dir: "ltr",
  },
  posts: {
    perPage: 6,
    perIndex: 6,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/gary-deshayes/permaculture-foret/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/gary-deshayes" },
    { name: "mail", url: "mailto:contact@permaculture-foret.fr" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
  ],
});
