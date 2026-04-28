import Container from "./Container";
import { Button } from "./Button";
import { MoveLeft, MoveRight } from "lucide-react";
import { CardList } from "../data/categorie";
import Card from "./categoryCard";
import { useState } from "react";

export default function SectionCategorie() {
  const [SectionCategorie, setSectionCategorie] = useState<number>(0);

  function nextSectionCategorie() {
    setSectionCategorie(SectionCategorie + 1);
  }

  function prevSectionCategorie() {
    setSectionCategorie(SectionCategorie - 1);
  }

  return (
    <section className="container max-w-7xl mx-auto mt-15">
      <Container>
        <div className="flex justify-between">
          <p className="text-5xl font-bold">Nos Catégories</p>
          <div className="flex gap-4">
            <Button
              variant="secondary"
              className="py-4 px-4"
              onClick={prevSectionCategorie}
            >
              <MoveLeft />
            </Button>
            <Button
              variant="primary"
              className="py-4 px-4"
              onClick={nextSectionCategorie}
            >
              <MoveRight />
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 mt-10 ">
          {CardList.slice(SectionCategorie, SectionCategorie + 4).map(
            (card, index) => (
              <Card
                key={index}
                buttonText={card.buttonText}
                image={card.image}
              />
            ),
          )}
        </div>
      </Container>
    </section>
  );
}
