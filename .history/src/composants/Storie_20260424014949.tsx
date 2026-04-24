import React from "react";

interface Props {
  image: string;
}
export default function Storie({ image }: Props) {
  return <div> {image} </div>;
}
