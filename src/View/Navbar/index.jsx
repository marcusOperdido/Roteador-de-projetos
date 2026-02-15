import styles from './style.module.css'; // Importando o CSS Module
import foto from './twitchcertinh.png';


//Viwe da navbar, onde tem a foto do perfil e o nome do site
function Navbar() {
  return (
    <div className={styles.fundoDoHeader}>
      <div className={styles.titulo}>Sites rodando</div>
      <div>
        <img src={foto} alt="Foto de perfil" className={styles.Img} />
      </div>
    </div>
  );
}

export default Navbar;
