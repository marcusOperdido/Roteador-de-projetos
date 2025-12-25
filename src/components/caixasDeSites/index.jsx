import '../caixasDeSites/style.css'
import relogio from '../react-img/relogio.png'

function CaixasDeSites() {
  return (
    <>
    <div id='card'className="movimento" >
    <div id='box'>
       <img src={relogio} className="movimento teste" alt="Reloginho-fofo" id='relogio' title='Reloginho-Muito-Fofo'/>
    </div>

    <div className="mini-bar">
    POMODORO
        </div>
    </div>
    </>
  )
}


export default CaixasDeSites