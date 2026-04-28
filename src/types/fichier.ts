// import { ChevronDown, type LucideIcon } from "lucide-react";

export const menuLists:MenuLists[] = [
  { name: "Accueil", url: "/" },
  { name: "Boutique", url: "/shop" },
  { name: "À propos", url: "/about" },
  { name: "Blog", url: "/" },
  { name: "Contact", url: "/contact" },
];

interface MenuLists {
    name: string
    url: string
    
};