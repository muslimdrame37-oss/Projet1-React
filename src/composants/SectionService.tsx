import Container from "./Container";
import { serviceList } from "../data/service";

export default function SectionService() {
  return (
    <section className="mt-25">
      <Container>
        <div className="grid grid-cols-4 items-start justify-center gap-8">
          {serviceList.map((service, index) => (
            <div key={index}>
              <service.icon />
              <h2 className="text-2xl font-semibold">{service.titre}</h2>
              <p className="text-sm">{service.texte}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
