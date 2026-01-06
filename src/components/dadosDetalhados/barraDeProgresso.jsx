//barra de progresso feita de forma dinâmica



export default function Skill({ nome, nivel, cor, icon }) {
  return (
    
    <div className="skill">
     {icon}
      <span>{nome} – {nivel}%</span>
      <div className="barra">
        <div
          className="progresso"
          style={{ width: `${nivel}%`, background: cor }}
        />
      </div>
    </div>
  );
}