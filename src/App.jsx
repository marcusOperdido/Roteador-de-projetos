import './App.css';
import Cabeca from './components/header';
import CaixasDeSites from './components/caixasDeSites';
import Modal from './components/caixaDescritiva/modal.jsx';
import { useState } from 'react';
import relogio from './components/react-img/relogio.png';
import DadosDetalhados from './components/dadosDetalhados/dados.jsx';
import Footer from './components/footer/footer.jsx';
import pc from './components/react-img/pc.png';


function CorpoPadrao() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div>
        <div class="custom-shape-divider-bottom-1770849813" id="reader">
          
          <div id="caixa-do-pc">
                <img src={pc} alt="Computador" />
              </div>
              
          <div id="descricao-site-container">
            <div id="caixinha-descritiva">
              <p id="descricao-site">
                site exlusivamente destina para links de sites produzidos por
                marcus
              </p>
            </div>
          </div>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            >
              {' '}
            </path>
          </svg>
        </div>
      </div>

      <div id="corpo">
        <DadosDetalhados />
      </div>
      <div id="pes">
        <CaixasDeSites
          src={relogio}
          alt="Reloginho Fofo"
          onClick={() => setOpenModal(true)}
          nome="Reloginho"
          descricao="Um relogio muito fofo"
        />
      </div>

      <Cabeca />

      <Footer />
    </>
  );
}

export default CorpoPadrao;
