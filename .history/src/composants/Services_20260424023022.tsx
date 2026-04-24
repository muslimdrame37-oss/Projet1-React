import { Cuboid } from "lucide-react";
import React from "react";

interface Props {
  icon: string;
  titre: string;
  texte: string;
}

export default function Services({ icon, titre, texte }: Props) {
  return (
    <div>
      <Cuboid size={34} />
      <h2 className="text-2xl font-semibold">Livraison Gratuite</h2>
      <p className="text-sm">Livraison gratuite au dela de 100 000 CFA</p>
    </div>
  );
}
