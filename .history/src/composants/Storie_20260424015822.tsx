interface Props {
  image: string;
}
export default function Storie({ image }: Props) {
  return <div className="flex"> {image} </div>;
}
