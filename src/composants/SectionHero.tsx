import { MoveRight } from "lucide-react";
import { Button } from "./Button";
import Container from "./Container";



export default function SectionHero() {
  return (
            <section className="container max-w-7xl mx-auto mt-5">
          <Container className="relative flex items-center bg-gray-100 justify-center gap-6 px-8">
            <div className="relative flex flex-col items-start w-1/2 gap-4">
              <p className="text-lg text-gray-600">
                Des styles uniques pour tous les goûts
              </p>
              <h1 className="text-5xl font-bold">
                Découvrez notre collection de vêtements tendance
              </h1>
              <p className="text-lg text-gray-600">Plus de 50% de réduction</p>
              <Button variant="primary" className="gap-1">
                <p>Shop Now</p>
                <MoveRight />
              </Button>
              <p className="absolute top-40 left-25 text-[13rem] font-extrabold text-gray-50">
                BEST
              </p>
            </div>
            <img
              src="/img/Quiet Luxury Weekend Style _ Men's Smart Casual Outfit.jpeg"
              alt=""
              className="absolte w-1/3 rounded-2xl"
            />
          </Container>
        </section>
  )
}
