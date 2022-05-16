import style from "./style.module.scss";
import { CustomSlider } from "../custon-slide";
import { ImgHTMLAttributes } from "react";

import nextArrow from "../../assets/nextArrow.svg";
import prevArrow from "../../assets/prevArrow.svg";

const SlickArrowRight = ({
  className,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <div className={style.arrowLeft}>
      <img src={prevArrow} alt="prevArrow" {...props} />
    </div>
  );
};

const SlickArrowLeft = ({
  className,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <div className={style.arrowRight}>
      <img src={nextArrow} alt="nextArrow" {...props} />
    </div>
  );
};

export function SlideTop() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slideToScroll: 2,
    slidesToScroll: 1,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
  };

  return (
    <main className={style.container}>
      <CustomSlider settings={settings}>
        <div className={style.content}>
          <img src="./src/assets/imageSlideTop.png" alt="" />
        </div>
        <div className={style.content}>
          <img src="./src/assets/imageSlideTop.png" alt="" />
        </div>
      </CustomSlider>
    </main>
  );
}
