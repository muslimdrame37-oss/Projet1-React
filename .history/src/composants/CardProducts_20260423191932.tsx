import React from "react";
import { Button } from "./Button";

interface Props {
  image: string
  title: string;
  price: number;
  categorie: string;
}

export default function CardProducts({name, title, price, categorie}: Props) {
  return (
      <div
        className={`flex items-end justify-center w-1/4 h-110 bg-cover bg-center rounded-2xl`}
        style={{ backgroundImage: `url(${image}` }}
      >
        <p className="">{title}</p>
        <Button
          variant="primary"
          className="text-2xl px-20 py-4 mb-4 border-none hover:opacity-100"
        >
          <p>{buttonText}</p>
        </Button>
      </div>
    );
}
