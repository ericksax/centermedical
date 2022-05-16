import style from "./style.module.scss";

export function MenuPromotions() {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <div className={style.promotionIcon}>
          <img src="./src/assets/truck.png" alt="" />
        </div>
        <div>
          <p>Frete Grátis em todo Brasil</p>
          <span>Compras acima de R$ 999,99 </span>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.promotionIcon}>
          <img src="./src/assets/recyclewhite.png" alt="" />
        </div>
        <div>
          <p>Assinaturas 5% OFF</p>
          <span>Como funciona </span>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.promotionIcon}>
          <img src="./src/assets/clarity_bar-code-line.png" alt="" />
        </div>
        <div>
          <p>10% de Desconto</p>
          <span>Em pedidos via boleto </span>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.promotionIcon}>
          <img src="./src/assets/creditCard.png" alt="" />
        </div>
        <div>
          <p>6x sem juros</p>
          <span>No cartão de crédito </span>
        </div>
      </div>
    </section>
  );
}
