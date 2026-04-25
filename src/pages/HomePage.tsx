import SectionHero from "../composants/SectionHero";
import SectionCategorie from "../composants/SectionCategorie";
import SectionProdcut from "../composants/SectionProdcut";
import SectionPromo from "../composants/SectionPromo";
import SectionTemoignage from "../composants/SectionTemoignage";
import SectionSocialMedia from "../composants/SectionSocialMedia";
import SectionService from "../composants/SectionService";

export default function HomePage() {
  return (
    <main>
      {/* hero section */}
      <SectionHero />
      {/* section catégorie */}
      <SectionCategorie />

      {/* section product */}
      <SectionProdcut />

      {/* section promo */}
      <SectionPromo />

      {/* section témoignage */}
      <SectionTemoignage />

      {/* section social media */}
      <SectionSocialMedia />

      {/* section service */}
      <SectionService />
    </main>
  );
}
