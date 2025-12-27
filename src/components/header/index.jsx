import '../../components/header/style.css'
import { SiCsswizardry } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri"
import { GrReactjs } from "react-icons/gr";
import { FaHtml5 } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";



function Cabeca() {
  return (
    <>
   <div id="retrwet"></div>
   <div id='divisaoDeLayout'>
  <div id='portifolio' className='sombra'>
  <p>Portifolio Bases</p>
  </div>
    
    <div id='todasAsCaixas'>
            
            <p id="caixa" className='sombra'>  Marcus Vinicius </p>
    <div id='descrição' className='sombra'> 
           <p>Engenharia de software...loading 1/8  </p>
    </div>
    



    <div id='icons'>
    <RiJavascriptFill  className='liitleIcons'size={30} color='rgba(233, 118, 83, 1)' title='JAVASCRIPT'/>
    <SiCsswizardry className='liitleIcons' size={22} color='rgba(50, 129, 233, 1)' title='CSS/STYLE'/>
    <GrReactjs size={22} color='rgba(8, 59, 126, 1)' title='REACT' />
    <FaHtml5 size={22} color='rgba(216, 40, 40, 1)'/>
    <FaGithubAlt size={22} title='VISIT OUR GIT'/>
    
    <p>TELEFONE: (61)986296081</p>
    </div>
    
    
    </div>
  
  
  </div>
  </>
  )
}

export default Cabeca