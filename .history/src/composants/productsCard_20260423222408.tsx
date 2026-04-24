// import React from "react";

interface Props {
  image: string;
  title: string;
  categorie: string;
  price: number;
}

export default function CardProducts({
  image,
  title,
  price,
  categorie,
}: Props) {
  return (
    <div
      className={`flex items-end justify-center w-1/4 h-110 bg-cover bg-center rounded-2xl`}
      style={{ backgroundImage: `url(${image}` }}
    >
      <p className="text-lg font-bold">{title}</p>
      <p className="text-md text-gray-400">{categorie}</p>
      <p className="text-gray-600">{price}</p>
    </div>
  );
}
