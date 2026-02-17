import './style.css';
import { useState } from 'react';
import Modal from './modal.jsx';

//Card + Modal
//Modal dentro do componente para reaproveitamento
//Modal esta em outra pasta para melhor utilizaçao da estilizaão
//"Descricao" e "nome" são variaveis que passam informaçoes para o modal

function CaixasDeSites({ src, alt, children, nome, descricao }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Modal
        nome={nome}
        descricao={descricao}
        isOpen={openModal}
        setOpenModal={() => setOpenModal(!openModal)}
      ></Modal>

      <div id="card" className="movimento" onClick={() => setOpenModal(true)}>
        <div id="box">
          <img
            src={src}
            alt={alt}
            id="imagem"
            title="Reloginho-Muito-Fofo"
          />
          {children}
        </div>
        <div className="mini-bar">POMODORO</div>
      </div>
    </>
  );
}

export default CaixasDeSites;
