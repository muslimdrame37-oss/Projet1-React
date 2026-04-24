interface Props {
  titre: string;
}

export default function MesPages({titre}: Props ) {
  return (
    <h2 className="text-2xl font-normal text">
      <a href="">{titre}</a>
    </h2>
  );
}
