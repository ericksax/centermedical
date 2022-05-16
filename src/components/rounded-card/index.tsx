import { CustomSlider, SlickArrowLeft, SlickArrowRight } from "../custon-slide";
import style from "./style.module.scss";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 3,
  nextArrow: <SlickArrowRight />,
  prevArrow: <SlickArrowLeft />,
};

export function RoundedCard(data: DataImageProps) {
  const { imagesCards } = data;
  return (
    <main className={style.container}>
      <CustomSlider settings={settings}>
        {imagesCards.map((image: Image) => (
          <section key={image.id} className={style.content}>
            <img src={image.url} />
          </section>
        ))}
      </CustomSlider>
    </main>
  );
}
