import { ImgHTMLAttributes } from "react";

import style from "./style.module.scss";
import Slider from "react-slick";

import nextArrow from "../../assets/nextArrow.svg";
import prevArrow from "../../assets/prevArrow.svg";

import { ChildrenProps } from "./slide";

export function SlickArrowLeft({
  className,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <div className={style.arrowLeft}>
      <img src={prevArrow} alt="prevArrow" {...props} />
    </div>
  );
}

export function SlickArrowRight({
  className,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      className={style.arrowRight}
      src={nextArrow}
      alt="nextArrow"
      {...props}
    />
  );
}

export function CustomSlider({ children, settings }: ChildrenProps) {
  return <Slider {...settings}>{children}</Slider>;
}
