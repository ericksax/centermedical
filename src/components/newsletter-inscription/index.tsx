import style from "./style.module.scss";

export function NewsletterInscription() {
  return (
    <main className={style.container}>
      <section className={style.content}>
        <section>
          <h1>ASSINE NOSSA NEWSLETTER</h1>
          <p>
            Fique por dentro de todas as novidades, lançamentos e promoções da
            <strong> Center Medical</strong>
          </p>
        </section>

        <section className={style.form}>
          <div className={style["form-control"]}>
            <img src="./src/assets/userIcon.png" alt="" />
            <input type="text" placeholder="Digite seu nome" />
          </div>
          <div className={style["form-control"]}>
            <img src="./src/assets/letter.png" alt="" />
            <input type="email" placeholder="Digite seu email" />
          </div>
          <input type="submit" value="CADASTRAR" />
        </section>
      </section>
    </main>
  );
}
