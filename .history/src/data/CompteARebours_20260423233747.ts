export const compteAReboursList: CompteAReboursList[] = [
  {
    compte: 12,
    duree: "Jours",
  },
  {
    compte: 5,
    duree: "Heures",
  },
  {
    compte: 30,
    duree: "Minutes",
  },
  {
    compte: 45,
  }
];

interface CompteAReboursList {
  compte: number;
  duree: string;
}