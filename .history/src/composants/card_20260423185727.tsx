// import React from "react";

import { Button } from "./Button";

interface Props {
  image: string;
  title?: string;
  buttonText: string;
}



export default function Card({ image, title, buttonText }: Props) {
  return (
    <div
      className={`flex items- justify-center w-1/4 h-110 bg-cover bg-center rounded-2xl`}
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
