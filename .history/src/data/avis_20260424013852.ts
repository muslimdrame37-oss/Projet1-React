export const avisList: AvisList[] = [
  {
    nom: "Ousmane Sonko",
    commentaire: "lorem ipsum dolor sit amet consectetur adipisicing elit. Et, libero? Nostrum optio neque eos debitis impedit officiis ut, obcaecati est dolore culpa qui distinctio aut, facere eius, rem sit quod.",
    note: 5,
    profession: "Premier Ministre du Sénégal",
    image: "/img/Modèle Super Cent Homme.jpeg" 
  },
  {
    nom: "Serigne Latyr",
    commentaire: "lorem ipsum dolor sit amet consectetur adipisicing elit. Et, libero? Nostrum optio neque eos debitis impedit officiis ut, obcaecati est dolore culpa qui distinctio aut, facere eius, rem sit quod. !",
    note: 4,
    profession: "Grand Sérigne de Xarala",
    image: "/img/chapeau.jpeg"
  },
  {
    nom: "Aladji ",
    commentaire: "lorem ipsum dolor sit amet consectetur adipisicing elit. Et, libero? Nostrum optio neque eos debitis impedit officiis ut, obcaecati est dolore culpa qui distinctio aut, facere eius, rem sit quod.",
    note: 4,
    profession: "Serigne Daara",
    image: "/img/costumes.jpeg"
  }
];

interface AvisList {
  note?: number;
  commentaire: string;
  image: string;
  nom: string;
  profession: string;
}
