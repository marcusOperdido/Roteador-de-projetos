import './App.css';
import Cabeca from './components/header';
import CaixasDeSites from './components/caixasDeSites';
import Exibicao from './components/Exibicao/exibicao';

function CorpoPadrao() {
  return (
    <>
      <Cabeca></Cabeca>
      <Exibicao></Exibicao>
      <div id="teste">
        <CaixasDeSites></CaixasDeSites>
        <CaixasDeSites></CaixasDeSites>
      </div>
    </>
  );
}

export default CorpoPadrao;
