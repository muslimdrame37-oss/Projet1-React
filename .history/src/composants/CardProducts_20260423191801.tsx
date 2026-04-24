import React from "react";

interface Props {
  name: string;
  image: string
  title: string;
  price: number;
  categorie: string;
}

export default function CardProducts({name, title, price, categorie}: Props) {
  return (
    <div className={`flex items-center justify-between gap-4 w-1/4 h-110 bg-cover bg-center rounded-2xl`}
    style={{ backgroundImage: `url(${image}` }}
    >
    </div>;
  )
}
