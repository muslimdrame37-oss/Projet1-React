import { Cuboid } from "lucide-react";

interface Props {
  icon: string;
  titre: string;
  texte: string;
}

export default function Services({ icon, titre, texte }: Props) {
  return (
    <div>
      {icon}
      <h2 className="text-2xl font-semibold"> {titre} </h2>
      <p className="text-sm"> </p>
    </div>
  );
}
