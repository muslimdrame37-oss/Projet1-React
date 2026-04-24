import React from "react";

interface Props {
  note?: string;
  commentaire: string;
  image: string;
  nom: string;
  profession: string;
}

export default function Avis({
  note,
  commentaire,
  image,
  nom,
  profession,
}: Props) {
  return (
    <div>
      <p>
        {}
      </p>

      <div className="flex gap-4">
        <img
          src={image}"
          alt=""
          className="w-15 h-15 rounded-full"
        />
        <div className="">
          <div className="font-bold"> {nom} </div>
          <div className="text-sm"> {profession} </div>
        </div>
      </div>
    </div>
  );
}
