import React from "react";

interface Props {
  note: string;
  commentaire: string;
  image?: string;
  name?: string;
  profession?: string;
}

export default function Avis({note, commentaire, image, name, profession}: Props) {
  return <div>Avis</div>;
}
