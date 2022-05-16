import { depoiments } from "../../mock-data-image.json";
import style from "./style.module.scss";

export function ClientsCard() {
  return (
    <main className={style.container}>
      {depoiments.map((depoiment) => (
        <section key={depoiment.id} className={style.content}>
          <section className={style["avatar-info"]}>
            <header className={style.info}>
              <aside>
                <img src="./src/assets/avatar.png" alt="avatar" />
              </aside>
              <aside className={style["client-info"]}>
                <strong className={style.name}>{depoiment.name}</strong>
                <span className={style.position}>{depoiment.position}</span>
              </aside>
            </header>
            <aside>
              <img src="./src/assets/aspas.png" alt="" />
            </aside>
          </section>
          <section className={style.article}>
            <article>{depoiment.text}</article>
          </section>
        </section>
      ))}
    </main>
  );
}
