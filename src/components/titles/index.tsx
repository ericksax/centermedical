import style from "./style.module.scss";

interface TitleProps {
  title: string;
  text?: string;
}

export function Titles({ title, text }: TitleProps) {
  return (
    <section className={style.container}>
      <h1 className={style.title}>{title}</h1>
      <p className={style.text}>{text}</p>
    </section>
  );
}
