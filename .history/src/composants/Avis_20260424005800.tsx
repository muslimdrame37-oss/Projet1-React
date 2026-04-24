import React from "react";

interface Props {
  note: string;
  commentaire: string;
  image?: string;
  nom?: string;
  profession?: string;
}

export default function Avis({note, commentaire, image, nom, profession}: Props) {
  return <div>Avis</div>;
}
