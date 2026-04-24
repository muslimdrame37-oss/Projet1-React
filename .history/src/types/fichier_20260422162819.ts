export const menuLists:MenuLists[] = [
  { name: "Accueil", url: "/" },
  { name: "Boutique", url: "/shop" },
  { name: "À propos", url: "" },
  { name: "Blog", url: "/" },
  { name: "Contact", url: true },
];

interface MenuLists {
    name: string
    url: string
};