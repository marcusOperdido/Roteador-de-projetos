import '../../components/header/style.css';
import foto from './twitchcertinh.png';



function Cabeca() {
  return (
    <>
    <div id='fundoDoHeader'>
      
        <div id="portifolio" className="sombra">
        Sites rodando 
        </div>
        <div>
        <img src={foto} alt="Foto de perfil" />
      </div>
    </div>
    </>
  );
}

export default Cabeca;
