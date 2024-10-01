
import { useState } from 'react';
import './App.css';
import { FormAnime } from './components/FormAnime/FormAnime';
import { Listagem } from './components/Listagem/Listagem';
import { Header } from './components/Header/Header';

function App() {

  const [animes, setAnimes] = useState([])


  const addAnime = (anime) => {
    setAnimes([...animes, anime]);
  }

  return (
    <div className="App">
      <Header>Cadastro Animes</Header>
      <FormAnime addAnime={addAnime}/>
      <Listagem animes={animes}/>
    </div>
  );
}

export default App;
