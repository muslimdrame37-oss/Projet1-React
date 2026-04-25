import Container from './Container'
import { compteAReboursList } from '../data/CompteARebours'
import { Button } from './Button'
import { MoveRight } from 'lucide-react'

export default function SectionPromo() {
  return (
          <section className="mt-20">
        <Container className="flex items-center justify-between gap-20">
          <div className="flex flex-col gap-6 w-1/2">
            <h2 className="text-5xl font-semibold">Le Deals du Mois</h2>
            <p className="text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              sapiente obcaecati totam earum laudantium ullam natus eius
              tempore? Libero necessitatibus placeat iusto minus nam temporibus
              neque sunt et quibusdam quos.
            </p>
            <div className="flex gap-6 shadow shadow-black/30 w-fit px-3 py-3 rounded-lg items-center justify-center">
              {compteAReboursList.map((carte, index) => (
                <div key={index}>
                  <p className="text-3xl font-extrabold">{carte.compte}</p>
                  <p>{carte.duree}</p>
                </div>
              ))}
            </div>
            <Button className="gap-3 py-4 text-sm w-fit">
              Voir tous nos articles
              <MoveRight />
            </Button>
          </div>
          <img
            src="/img/Tenue Mariage Homme.jpeg"
            alt=""
            className="w-2/6 h-full rounded-lg shadow-2xl hover:shadow-lg transition-shadow"
          />
        </Container>
      </section>
  )
}
