import React from "react";

interface Props {
  compte: number;
  duree: string;
}

export default function CompteARebours({compte, duree}: Props) {
  return (
    <div className="flex flex-col shadow shadow-black/30 w-fit px-3 py-3 rounded-lg items-center justify-center">
      <p className="text-3xl font-extrabold">{compte}</p>
      <p>{duree}</p>
    </div>
  );
}
