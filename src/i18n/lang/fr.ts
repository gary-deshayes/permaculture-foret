import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Accueil",
    posts: "Articles",
    tags: "Tags",
    about: "À propos",
    archives: "Archives",
    search: "Recherche",
  },
  post: {
    publishedAt: "Publié le",
    updatedAt: "Mis à jour",
    sharePostIntro: "Partager cet article :",
    sharePostOn: "Partager sur {{platform}}",
    sharePostViaEmail: "Partager par email",
    tagLabel: "Tags",
    backToTop: "Retour en haut",
    goBack: "Retour",
    editPage: "Modifier la page",
    previousPost: "Article précédent",
    nextPost: "Article suivant",
  },
  pagination: {
    prev: "Précédent",
    next: "Suivant",
    page: "Page",
  },
  home: {
    socialLinks: "Réseaux sociaux",
    featured: "À la une",
    recentPosts: "Articles récents",
    allPosts: "Tous les articles",
  },
  footer: {
    copyright: "Droits d'auteur",
    allRightsReserved: "Tous droits réservés.",
  },
  pages: {
    tagTitle: "Tag",
    tagDesc: "Tous les articles avec le tag",

    tagsTitle: "Tags",
    tagsDesc: "Tous les tags utilisés dans les articles.",

    postsTitle: "Articles",
    postsDesc: "Tous les articles publiés.",

    archivesTitle: "Archives",
    archivesDesc: "Tous les articles archivés.",

    searchTitle: "Recherche",
    searchDesc: "Rechercher un article ...",
  },
  a11y: {
    skipToContent: "Aller au contenu",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    toggleTheme: "Changer de thème",
    searchPlaceholder: "Rechercher des articles...",
    noResults: "Aucun résultat trouvé",
    goToPreviousPage: "Aller à la page précédente",
    goToNextPage: "Aller à la page suivante",
  },
  notFound: {
    title: "404 Introuvable",
    message: "Page introuvable",
    goHome: "Retour à l'accueil",
  },
} satisfies UIStrings;
