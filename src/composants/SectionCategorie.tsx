import Container from "./Container";
import { Button } from "./Button";
import { MoveLeft, MoveRight } from "lucide-react";
import { CardList } from "../data/categorie";
import Card from "./categoryCard";

export default function SectionCategorie() {
  return (
    <section className="container max-w-7xl mx-auto mt-15">
      <Container>
        <div className="flex justify-between">
          <p className="text-5xl font-bold">Nos Catégories</p>
          <div className="flex gap-4">
            <Button variant="secondary" className="py-4 px-4">
              <MoveLeft />
            </Button>
            <Button variant="primary" className="py-4 px-4">
              <MoveRight />
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 mt-10 ">
          {/* {CardList.map((card, index) => (
                    <Card key={index} {...card} />
                  ))} */}

          {CardList.map((card, index) => (
            <Card key={index} buttonText={card.buttonText} image={card.image} />
          ))}
        </div>
      </Container>
    </section>
  );
}
