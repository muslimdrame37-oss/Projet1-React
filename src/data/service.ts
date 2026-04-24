export const serviceList: ServiceList[] = [
  {
    icon: "<Cuboid size={34} />",
    titre: "Livraison Gratuite",
    texte: "Livraison Gratuite au dela de 100 000 CFA",
  },
  {
    icon: "<CircleDollarSign />",
    titre: "Paiement Sécurisé",
    texte: "Paiement sécurisé avec les meilleures méthodes de paiement",
  },
  {
    icon: "<Cuboid size={34} />",
    titre: "Service Client 24/7",
    texte:
      "Service client disponible 24 heures sur 24 et 7 jours sur 7 pour répondre à toutes vos questions",
  },
  {
    icon: "<Cuboid size={34} />",
    titre: "Paiement Facile",
    texte: "Paiement facile avec les meilleures méthodes de paiement",
  },
];

interface ServiceList {
  icon: string;
  titre: string;
  texte: string;
}
