import Icons from '../../components/icons/icons';
import styles from './style.module.css';  // Importando o CSS Module

// View do corpo, onde tem textos genéricos



export default function BodyBody() {
  return (
    <>
      <div className={styles.corpo}>
        <div className={styles.externo}>
          <div className={styles.conteudoObjetivo}>
            <div className={styles.bloco}>
              <h2 className={styles.tituloObjetivo}>Resumo Programador</h2>
            </div>
            <div className={styles.bloco}>
              <p className={styles.textoObjetivo}>
                Hoje programo pela diversão de criar sites com objetivos que
                ajudem empresas com pequenos problemas de terceirização.
              </p>
              <p className={styles.textoObjetivo}>
                Minha principal área de atuação é o atendimento presencial e em
                campo ao cliente. Gosto do contato com o ser humano.
              </p>
            </div>

            <div className={styles.bloco}>
              <p className={styles.textoObjetivo}>
                Todos os meus sites terão assinatura eletrônica.
              </p>
              <p className={styles.textoObjetivo}>
                Estou sempre aceitando novas colaborações, acredito que o
                conhecimento vem da cooperação em todos os níveis. TODO
                CONHECIMENTO É VÁLIDO.
              </p>
            </div>

            <div className={styles.bloco}>
              <div className={styles.icons}>
                <Icons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
