import './style.modules.css';
import CaixasDeSites from '../../components/BoxDemonstrativa/index.jsx';
import relogio from '../../components/react-img/relogio.png';
import { useState } from 'react';


//view do pes, onde tem as caixas demonstrativas, onde tem o nome do site e a descrição, e quando clica abre um modal com mais detalhes


export default function PesBody() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div id="pes">
      <CaixasDeSites
        src={relogio}
        alt="Reloginho Fofo"
        onClick={() => setOpenModal(true)}
        nome="Reloginho"
        descricao="Um relogio muito fofo"
      />
    </div>
  );
}
