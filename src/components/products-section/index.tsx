import style from "./styles.module.scss";

export function ProductsSection() {
  return (
    <>
      <section className={style.container}>
        <div className={style["block-content"]}>
          <div className={style.block}>
            <img
              src="./src/assets/esteto.png"
              alt=" imagem de um estetoscópio"
            />
          </div>
          <p>Medicia Ocupacional</p>
        </div>

        <div className={style["block-content"]}>
          <div className={style.block}>
            <img src="./src/assets/baby.png" alt=" imagem de um estetoscópio" />
          </div>
          <p>Pediatria</p>
        </div>

        <div className={style["block-content"]}>
          <div className={style.block}>
            <img
              src="./src/assets/cadeiraderodas.png"
              alt=" imagem de um estetoscópio"
            />
          </div>
          <p>Cadeiras de rodas</p>
        </div>

        <div className={style["block-content"]}>
          <div className={style.block}>
            <img
              src="./src/assets/esfinger.png"
              alt=" imagem de um estetoscópio"
            />
          </div>
          <p>Estudantes</p>
        </div>

        <div className={style["block-content"]}>
          <div className={style.block}>
            <img
              src="./src/assets/cadeiradentista.png"
              alt=" imagem de um estetoscópio"
            />
          </div>
          <p>Móveis hospitalares</p>
        </div>

        <div className={style["block-content"]}>
          <div className={style.block}>
            <img
              src="./src/assets/nebulizador.png"
              alt=" imagem de um estetoscópio"
            />
          </div>
          <p>Inaladores</p>
        </div>
      </section>

      <div className={style["btn-help"]}>
        <img src="./src/assets/buttonPossoAjudar.png" alt="" />
      </div>
    </>
  );
}
