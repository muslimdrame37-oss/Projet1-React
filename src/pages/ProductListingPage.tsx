import { ChevronRight, ChevronUp, Plus } from "lucide-react";
import Container from "../composants/Container";

export default function ProductListingPage() {
  return (
    <main className="mt-20">
      <Container className="px-8">
        <div className="flex flex-col">
          <div className="flex items-center justify-start text-sm">
            <p className="">Boutique </p>
            <ChevronRight size={20} />
            <p>Tous les produits</p>
          </div>

          <div className="flex flex-col gap-4 mt-15 bg-amber-900 w-1/5">
            {/* colonne latéralle gauche */}
            {/* titre colonne */}
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold bg-amber-400">
                Catégories de produits
              </h2>
              <ChevronUp />
            </div>
            <div className="flex flex-col">
              {/* contenu colonne */}
              <div className="flex flex-col gap-4 bg-amber-200">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center justify-start gap-1 bg-amber-700 w-full">
                    <input
                      type="checkbox"
                      id="Homme"
                      name="genre"
                      value="Men"
                    />
                    <label htmlFor="Men">Men</label>
                  </div>
                  <Plus />
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
      </Container>
    </main>
  );
}
