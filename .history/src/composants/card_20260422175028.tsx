import React from "react";
import { Button } from "./Button";

interface Props {
  image: string;
  title: string;
  buttonText: string;
}

export default function Card({ image, title, buttonText } : Props) {
  return (
    
      <div className={`flex items-end justify-center bg-[url(/src/img/chapeau.jpeg)] w-1/4 h-110 bg-cover bg-center rounded-2xl`}>

        <Button variant="secondary" className="text-2xl px-20 py-4 mb-4 border-none bg-white hover:opacity-100">
          <p>{buttonText}</p>
        </Button>
      </div>
    
  );
}
