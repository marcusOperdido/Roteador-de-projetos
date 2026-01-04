import { Children } from 'react'
import '../caixasDeSites/style.css'
//import relogio from '../react-img/relogio.png'




function CaixasDeSites({src, alt, Children, onclick}) {
  return (
    <>

    <div id='card'className="movimento" >
    <div id='box'>
       <img src={src} alt={alt} className="movimento teste" id='relogio' title='Reloginho-Muito-Fofo' onclick={onclick}/>
       {Children}
    </div>

    <div className="mini-bar">
    POMODORO
        </div>
    </div>
    </>
  )
}


export default CaixasDeSites