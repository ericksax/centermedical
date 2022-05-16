import style from "./style.module.scss";

export function Footer() {
  return (
    <footer className={style.container}>
      <section className={style.content}>
        <div className={style["contact-box"]}>
          <section className={style.contacts}>
            <div>
              <img src="./src/assets/tel.png" alt="avatar" />
            </div>
            <div className={style["contact-info"]}>
              <strong className={style.name}>SAC E TELEVENDAS</strong>
              <span className={style.contact}>(11) 2424 7213 </span>
            </div>
          </section>

          <section className={style.contacts}>
            <div>
              <img src="./src/assets/tel.png" alt="avatar" />
            </div>
            <div className={style["contact-info"]}>
              <strong className={style.name}>NOSSO WHATSAPP</strong>
              <span className={style.contact}>(11) 9 7699 6558 </span>
            </div>
          </section>

          <section className={style.contacts}>
            <div>
              <img src="./src/assets/tel.png" alt="avatar" />
            </div>
            <div className={style["contact-info"]}>
              <strong className={style.name}>E-MAIL</strong>
              <span className={style.contact}>sac@centermedical.com.br </span>
            </div>
          </section>
        </div>

        <div className={style.about}>
          <div className={style["first-block"]}>
            <strong>SOBRE</strong>
            <ul>
              <li>Empresa</li>
              <li>Política de Privacidade</li>
              <li>Dúvidas Frequentes</li>
              <li>É seguro comprar?</li>
            </ul>
          </div>

          <div className={style["social-links"]}>
            <strong>REDES SOCIAIS</strong>
            <div className={style["social-logo"]}>
              <img src="./src/assets/facebook.png" alt="logo Facebook" />
              <img src="./src/assets/instagram.png" alt="logo Instagram" />
              <img src="./src/assets/twiiter.png" alt="logo Twiiter" />
              <img src="./src/assets/youtube.png" alt="logo Youtube" />
            </div>
          </div>
        </div>

        <div className={style.atendiment}>
          <div>
            <strong>ATENDIMENTO</strong>
            <ul>
              <li>Central Atendimento</li>
              <li>Trocas e Devoluções</li>
              <li>Política de entrega</li>
            </ul>
          </div>

          <div className={style["best-sellers"]}>
            <strong>MAIS BUSCADOS</strong>
            <ul>
              <li>Estotoscópio</li>
              <li>Oximetro dedo</li>
              <li>Esfigmonamômetro</li>
              <li>Equipamento médico</li>
            </ul>
          </div>
        </div>

        <div className={style.payments}>
          <strong>FORMAS DE PAGAMENTO</strong>
          <div className={style["credit-cards"]}>
            <img src="./src/assets/creditCards.png" alt="" />
          </div>
          <strong>SEGURANCA</strong>
          <div className={style.stamps}>
            <img src="./src/assets/letsEncrypt.png" alt="" />
            <img src="./src/assets/shield.png" alt="" />
          </div>
        </div>
      </section>

      <section className={style.footer}>
        <article>
          Copyright © 2014 CenterMedical - TODOS OS DIREITOS RESERVADOS - É
          proibida a reprodução, <br />
          total ou parcial, do conteúdo sem prévia autorização da CENTERMEDICAL.
        </article>
        <img src="./src/assets/vtex.png" alt="" />
      </section>
    </footer>
  );
}
