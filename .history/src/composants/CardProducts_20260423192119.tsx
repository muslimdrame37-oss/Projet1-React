// import React from "react";


interface Props {
  image: string
  title: string;
  categorie: string;
  price: number;
  
}

export default function CardProducts({image, title, price, categorie}: Props) {
  return (
      <div
        className={`flex items-end justify-center w-1/4 h-110 bg-cover bg-center rounded-2xl`}
        style={{ backgroundImage: `url(${image}` }}
      >
        <p className="">{title}</p>
        <p>{categorie}</p>
       <p></p>
      </div>
    );
}
