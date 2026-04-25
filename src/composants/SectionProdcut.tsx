import Container from "./Container";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function SectionProdcut() {
  return (
    <section className="mt-30">
      <Container>
        <div className="flex items-center justify-center">
          <p className="text-5xl font-bold">Nos meilleures ventes</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

          {/* Ancienne méthodes */}

          {/* {productList.map((produit, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white p-4 shadow-md hover:shadow-lg transition-shadow"
                >
                  <img
                    src={produit.image}
                    alt={produit.title}
                    className="mb-4 h-90 w-full rounded-2xl object-cover "
                  />
                  <h2 className="text-xl font-semibold">{produit.title}</h2>
                  <p className="text-gray-500">{produit.categorie}</p>
                  <p className="mt-2 text-lg font-bold">{produit.price}</p>
                </div>
              ))} */}
        </div>
      </Container>
    </section>
  );
}
