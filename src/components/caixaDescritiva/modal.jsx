import './style.css';

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
