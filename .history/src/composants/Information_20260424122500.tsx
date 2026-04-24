interface Props {
  titre: string;
}

export default function Information({titre}: Props ) {
  return (
    <h2 className="text-2xl font-normal">
      <a href="#">{titre}</a>
    </h2>
  );
}
