import './App.css';
import Cabeca from './components/header';
import CaixasDeSites from './components/caixasDeSites';
import Exibicao from './components/carroceu/carroceu.jsx';
import Modal from './components/caixaDescritiva/modal.jsx';
import { useState } from 'react';
import relogio from './components/react-img/relogio.png';
import DadosDetalhados from './components/dadosDetalhados/dados.jsx';
import Footer from './components/footer/footer.jsx';

function CorpoPadrao() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Cabeca />
      <Exibicao />
      <div id="teste">
        <CaixasDeSites src={relogio} alt="Reloginho Fofo" onClick={() => setOpenModal(true)} nome="Reloginho" descricao="Um relogio muito fofo" />
        
        <button onClick={() => setOpenModal(true)}>Abrir Modal</button>

        <Modal
          nome="marcus"
          descricao="eu sou seu filho"
          isOpen={openModal}
          setOpenModal={() => setOpenModal(!openModal)}
        ></Modal>
      </div>
    <DadosDetalhados />
    <Footer />

    </>
  );
}


export default CorpoPadrao;
