import style from "./style.module.scss";

export function Header() {
  return (
    <header className={style.container}>
      <section className={style["top-contact"]}>
        <img src="./src/assets/iconPhone.png" alt="icone de telefone" />
        <p className={style["top-text"]}> FALE CONOSCO</p>
        <span className={style["top-phonenumber"]}>(11) 2424 7213</span>
      </section>
      <main className={style.content}>
        <section className={style["header-top"]}>
          <img
            src="./src/assets/logoCenterMedical.png"
            alt="logotipo da Center Medical"
            height="52px"
            width="275px"
          />
          <div className={style["input-search"]}>
            <input type="text" placeholder="O que voce procura?" />
            <img src="./src/assets/lupa.png" alt="imagem de uma lupa" />
          </div>

          <section className={style["elipse-container"]}>
            <div className={style.elipse}>
              <img src="./src/assets/recycle.png" />
            </div>

            <p>
              Minhas <br /> Assinaturas
            </p>
          </section>
          <section className={style["elipse-container-medium"]}>
            <div className={style.elipse}>
              <img src="./src/assets/contactIcon.png" />
            </div>

            <p>
              Olá, Visitante
              <br /> <span> Entrar </span>
            </p>
          </section>
          <section className={style["elipse-container"]}>
            <div className={style.elipse}>
              <img src="./src/assets/carrinho.png" />
            </div>

            <p>
              Meu <br /> Carrinho
            </p>
          </section>
        </section>
        <nav className={style["header-nav"]}>
          <ul>
            <li id="link" className={style.activated}>
              <img src="./src/assets/menu.png" alt="menu toggle" />
              Todas Categorias
            </li>
            <li id="link">
              <a href="#">acessibilidade</a>
            </li>
            <li>
              <a href="#">Aparelho de Pressão</a>
            </li>
            <li>
              <a href="#">Estetoscópio</a>
            </li>
            <li>
              <a href="#">Aparelho médico</a>
            </li>
            <li>
              <a href="#">Equipamento Hospitalar</a>
            </li>
            <li>
              <a href="#">Móveis</a>
            </li>
            <li>
              <a href="#">Modelos Anatômicos</a>
            </li>
            <li>
              <a href="#">Uso pessoal</a>
            </li>
          </ul>
        </nav>
      </main>
    </header>
  );
}
