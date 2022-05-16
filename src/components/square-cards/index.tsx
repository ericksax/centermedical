import { CustomSlider, SlickArrowLeft, SlickArrowRight } from "../custon-slide";
import style from "./style.module.scss";
import { squareCardsData } from "../../mock-data-image.json";

export function SquareCards() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
  };

  return (
    <main className={style.container}>
      <CustomSlider settings={settings}>
        {squareCardsData.map((product) => (
          <section key={product.description} className={style.content}>
            <img src="./src/assets/cadeiraRodas.png" alt="Produto" />
            <p className={style.marca}>{product.marca}</p>
            <p className={style.description}>{product.description}</p>
            <div className={style["content-price"]}>
              <span className={style["intire-price"]}>{product.oldPrice}</span>
              <div className={style.promo}>
                <p className={style["promo-price"]}>{product.promoPrice}</p>
                <img src="./src/assets/tagprice.png" alt="" />
              </div>
              <p className={style.parcels}>
                ou <strong>6x</strong> de <strong>R$ 93,10</strong>
              </p>
            </div>

            <button className={style["sell-button"]}>
              ADICIONAR <img src="./src/assets/Cart.png" alt="carrinho" />
            </button>
          </section>
        ))}
      </CustomSlider>
    </main>
  );
}
