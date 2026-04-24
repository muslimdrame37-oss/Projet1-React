import React from "react";

interface Props {
    compte: number
}

export default function CompteARebours() {
  return (
    <div className="flex flex-col shadow shadow-black/30 w-fit px-3 py-3 rounded-lg items-center justify-center">
      <p className="text-3xl font-extrabold">120</p>
      <p>Jours</p>
    </div>
  );
}
