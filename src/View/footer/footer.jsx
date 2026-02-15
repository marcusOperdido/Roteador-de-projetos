import style from './foter.module.css';

//Viwe do footer, onde tem o copyright do site

export default function Footer() {
  return (
    <div className={style.footer}>
      <p>© 2024 Meu Aplicativo. Todos os direitos reservados.</p>
    </div>
  );
}