interface Props {
  titre: string;
}

export default function MesPages({titre}: Props ) {
  return (
    <h2 className="text-2xl font-normal">
      <a href="" className="">{titre}</a>
    </h2>
  );
}
