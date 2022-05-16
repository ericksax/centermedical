import { Titles } from "../titles";
import style from "./style.module.scss";

export function About() {
  return (
    <section>
      <Titles title="Sobre a Center Medical" />
      <article className={style.text}>
        Texto de SEO dolor sit amet, consectetur adipiscing elit. Tellus mauris
        morbi ac, posuere senectus diam a. Tristique mattis eros, id quisque
        purus facilisis lectus feugiat. Iaculis est egestas amet, nunc eget.
        Tristique mattis eros, id quisque purus facilisis lectus feugiat.
        Iaculis est egestas amet, nunc eget.
      </article>
    </section>
  );
}
