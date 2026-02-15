import './modal.modules.css';

//Modal do card, onde tem o nome do site e a descrição, e um botão para fechar o modal
export default function Modal({ isOpen, setOpenModal, nome, descricao }) {
  if (isOpen) {
    return (
      <>
        <div id="fundoModal">
          <div id="caixaModal">
            <div id="fotoDoSite">{nome}</div>
            <div id="descricaoDoSite">{descricao}</div>

            <button id="closeModal" onClick={setOpenModal}>
              X
            </button>
          </div>
        </div>
      </>
    );
  }

  return null;
}
