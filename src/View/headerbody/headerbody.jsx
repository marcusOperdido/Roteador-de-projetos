import styles from './reader.module.css';
import pc from '../../components/react-img/pc.png';


//viwe header, onde tem a imagem do computador e a descrição do site

function Reader() {
  return (
    <div className={styles.reader}>
      <DescricaoSite />
      <CaixaDoPc />
      <ShapeDivider />
    </div>
  );
}


//componente da caixa do computador, onde tem a imagem do computador
function CaixaDoPc() {
  return (
    <div className={styles.caixaDoPc}>
      <img src={pc} alt="Computador" />
    </div>
  );
}


//Descriçao do objetivo do site
function DescricaoSite() {
  return (
    <div className={styles.descricaoSiteContainer}>
      <div className={styles.caixinhaDescritiva}>
        <p className={styles.descricaoSite}>
          site exclusivamente destinado para links de sites produzidos por Marcus
        </p>
      </div>
    </div>
  );
}


//componente do shape divider, onde tem o shape divider (onda)
function ShapeDivider() {
  return (
  
  <div className={styles.customShapeDivider}>
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
        className={styles.shapeFill}
      ></path>
    </svg>
  </div>
  );
}

export default Reader;





  