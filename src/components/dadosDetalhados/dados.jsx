import { SiCsswizardry } from 'react-icons/si';
import { RiJavascriptFill } from 'react-icons/ri';
import { GrReactjs } from 'react-icons/gr';
import { FaHtml5 } from 'react-icons/fa';
import { FaGithubAlt } from 'react-icons/fa';
import './styleIcons.css';

export default function DadosDetalhados() {
  return (
    <>
      <div id="externo">
        <div id="conteudo-objetivo">
          <div className="bloco">
            <h2 id="titulo-objetivo">Programador por diversao</h2>
          </div>
          <div className="bloco">
            <p className="texto-objetivo">
              Hoje programo pela diversao de criar sites com objetivos que ajudem empresas com pequenos problemas de terceirizacao
            </p>
            <p className="texto-objetivo">
              Minha principa area de atuacao e o atendimento presencial e em campo ao cliente. gosto do contato com o ser umano 
            </p>
          </div>

          <div className="bloco">
            <p className="texto-objetivo">
              Todos os meus sites terao assinatura eletronica.
            </p>
            <p className="texto-objetivo">
              Estou semre aceitando novas colaborações, acredito que o conhecimento vem da cooperação em todos os niveis. TODO CONHECIMENTO É VALIDO
            </p>
          </div>
          <div className="bloco">
            <div id="icons">
              <RiJavascriptFill size={50} color="rgba(233, 118, 83, 1)" />
              <GrReactjs size={50} color="rgba(8, 59, 126, 1)" />
              <SiCsswizardry size={50} color="rgba(50, 129, 233, 1)" />
              <FaHtml5 size={50} color="rgba(216, 40, 40, 1)" />
              <FaGithubAlt size={50} color="rgba(74, 74, 74, 1)" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
