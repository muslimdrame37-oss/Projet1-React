import Container from './Container'
import { storyList } from '../data/storie'

export default function SectionSocialMedia() {
  return (
          <section className="mt-30">
        <Container>
          <div className="flex flex-col items-center justify-center gap-15">
            <h2 className="text-5xl ">Nos Stories Instagram</h2>
            <div className="flex gap-8 ">
              {storyList.map((story, index) => (
                <div key={index}>
                  <img
                    className="h-80 rounded-2xl shadow-sm shadow-gray-400 hover:shadow-lg"
                    src={story.image}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
  )
}
