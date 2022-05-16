import { Header } from "../../components/header";
import { SlideTop } from "../../components/slide-top";
import { MenuPromotions } from "../../components/menu-promotions";
import { ProductsSection } from "../../components/products-section";
import { Titles } from "../../components/titles";
import { InfoFrames } from "../../components/Info-frames";
import { SquareCards } from "../../components/square-cards";
import { RoundedCard } from "../../components/rounded-card";
import { ArticleCard } from "../../components/article-cart";
import { ClientsCard } from "../../components/clients-card";
import { Footer } from "../../components/footer";
import { About } from "../../components/about";
import { NewsletterInscription } from "../../components/newsletter-inscription";
import { imagesCards, imagesCards2 } from "../../mock-data-image.json";

function Home() {
  return (
    <>
      <Header />
      <SlideTop />
      <MenuPromotions />
      <ProductsSection />
      <Titles text="Ver Tudo" title="Mais Vendidos" />
      <SquareCards />
      <InfoFrames />
      <Titles title="Quem conhece aprova" />
      <RoundedCard imagesCards={imagesCards} />
      <Titles title="Novidades" text="Ver tudo" />
      <SquareCards />
      <Titles title="As Melhores Marcas" />
      <RoundedCard imagesCards={imagesCards2} />
      <ArticleCard />
      <Titles title="O que nossos clientes dizem" />
      <ClientsCard />
      <About />
      <NewsletterInscription />
      <Footer />
    </>
  );
}

export default Home;
