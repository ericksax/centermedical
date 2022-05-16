import style from "./styles.module.scss";

export function InfoFrames() {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <img src="./src/assets/frameLeft.png" alt="imagem de médica" />
        <button>VER NOVIDADES</button>
      </div>
      <div className={style.content}>
        <img src="./src/assets/frameRight.png" alt="glicosímetro" />
        <div className={style.imgframe}>
          <img src="./src/assets/GlicoTech.png" alt="glicosímetro" />
        </div>

        <button>VER NOVIDADES</button>
      </div>
    </section>
  );
}
