import style from "./Listagem.module.css"

function Listagem ({ animes }){
    return (
      <div className={style.listagem}>
        <h2>Lista de Animes Cadastrados</h2>
        <ul>
          {animes.map((anime, index) => (
            <li key={index}>
              <h3>{anime.nome}</h3>
              <img src={anime.video} target="_blank" alt={anime.nome}/>
              <p><strong>Descrição:</strong> {anime.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export { Listagem };