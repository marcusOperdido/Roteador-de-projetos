
import './App.css'
import Cabeca from './components/header'
import CaixasDeSites from './components/caixasDeSites'

function CorpoPadrao() {
  return (
    <>
   
    <Cabeca></Cabeca>
     <div id='teste'>
    <CaixasDeSites></CaixasDeSites>
        <CaixasDeSites></CaixasDeSites>
            <CaixasDeSites></CaixasDeSites>
                <CaixasDeSites></CaixasDeSites>
                    <CaixasDeSites></CaixasDeSites>
   
   </div>
    </>
  )
}

export default CorpoPadrao

