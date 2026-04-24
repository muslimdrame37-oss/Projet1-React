interface Props {
  titre: string;
}

export default function MesPages({titre}: Props ) {
  return (
    <h2 className="text-2xl font-normal tex">
      <a href="">{titre}</a>
    </h2>
  );
}
