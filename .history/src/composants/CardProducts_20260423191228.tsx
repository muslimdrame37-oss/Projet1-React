import React from "react";

interface props {
  name: string;
  title: string;
  price: number;
  categorie: string;
}

export default function CardProducts({name, title, price, categorie}: props) {
  return (
    <div>CardProducts</div>;
  )
}
