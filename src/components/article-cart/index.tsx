import { articles } from "../../mock-data-image.json";
import style from "./style.module.scss";

export function ArticleCard() {
  return (
    <main className={style.container}>
      {articles.map((article) => (
        <article key={article.id} className={style.content}>
          <img src={article.imgUrl} alt="mulher aferindo pressão" />
          <section className={style.article}>
            <span className={style.rashtag}>{article.hash}</span>
            <h1 className={style.title}>{article.title}</h1>
            <p className={style.text}>{article.text}</p>
          </section>
        </article>
      ))}
    </main>
  );
}
