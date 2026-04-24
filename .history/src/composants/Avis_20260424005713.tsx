import React from "react";

interface Props {
  icon: string;
  commentaire: string;
  image: string;
  name: string;
  profession?: string;
}

export default function Avis({icon, commentaire, image, name, profession}: Props) {
  return <div>Avis</div>;
}
