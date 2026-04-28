import Container from "./Container";
import { Button } from "./Button";
import { MoveLeft, MoveRight } from "lucide-react";
import { avisList } from "../data/avis";
import { FaStar } from "react-icons/fa";

export default function SectionTemoignage() {
  return (
    <section className="bg-gray-50 py-20 mt-20 ">
      <Container className="flex flex-col gap-15">
        <div className="flex justify-between">
          <h2 className="text-5xl ">Que disent nos clients ?</h2>
          <div className="flex gap-4">
            <Button variant="secondary" className="py-4 px-4">
              <MoveLeft />
            </Button>
            <Button variant="primary" className="py-4 px-4">
              <MoveRight />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 ">
          {avisList.map((avis, index) => (
            <div
              key={index}
              className="flex flex-col bg-white gap-4 rounded-lg shadow px-6 py-4 hover:shadow-lg transition-shadow border border-[#dbe6e0] border-border"
            >
              <div>
                <div className="flex gap-1">
                  <FaStar color="orange" size={24} />
                  <FaStar color="orange" size={24} />
                  <FaStar color="orange" size={24} />
                  <FaStar color="orange" size={24} />
                  <FaStar color="orange" size={24} />
                </div>
              </div>
              <p>{avis.commentaire}</p>

              <div className="flex gap-4">
                <img
                  src={avis.image}
                  alt=""
                  className="w-15 h-15 rounded-full"
                />
                <div className="">
                  <div className="font-bold"> {avis.nom} </div>
                  <div className="text-sm"> {avis.profession} </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
