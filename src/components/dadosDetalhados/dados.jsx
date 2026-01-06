import { SiCsswizardry } from 'react-icons/si';
import { RiJavascriptFill } from 'react-icons/ri';
import { GrReactjs } from 'react-icons/gr';
import { FaHtml5 } from 'react-icons/fa';
import { FaGithubAlt } from 'react-icons/fa';
import './styleIcons.css';
import Skills from '../dadosDetalhados/barraDeProgresso.jsx';

export default function DadosDetalhados() {
  return (
    <>
      <div id="externo">
        <div id="todasAsCaixas">
          <p id="caixa" className="sombra">
            Marcus Vinicius
          </p>
          <div id="descrição" className="sombra">
            <p>Engenharia de software...loading 1/8 </p>
          </div>

          <div id="skills">
            <h3>Minhas Skills</h3>
            <Skills
              nome="JavaScript"
              nivel={30}
              cor="#f7df1e"
              icon={
                <RiJavascriptFill size={20} color="rgba(233, 118, 83, 1)" />
              }
            />
            <Skills
              nome="React"
              nivel={50}
              cor="#61dafb"
              icon={<GrReactjs size={20} color="rgba(8, 59, 126, 1)" />}
            />
            <Skills
              nome="CSS"
              nivel={60}
              cor="#2965f1"
              icon={<SiCsswizardry size={20} color="rgba(50, 129, 233, 1)" />}
            />
            <Skills
              nome="HTML"
              nivel={80}
              cor="#f8013fff"
              icon={<FaHtml5 size={20} color="rgba(216, 40, 40, 1)" />}
            />
            <Skills
              nome="git"
              nivel={60}
              cor="#97ac3cff"
              icon={<FaGithubAlt size={20} color="rgba(74, 74, 74, 1)" />}
            />
          </div>
        </div>
      </div>
    </>
  );
}
