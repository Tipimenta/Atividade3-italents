import { useState } from "react"
import { Button } from "../Button/Button"
import style from '../FormAnime/FormAnime.module.css'


function FormAnime ({addAnime}) {

const [nome, setNome] = useState("")
const [capa, setCapa] = useState("")
const [desc, setDesc] = useState("")

const handleSubmit = (e) => {
    e.preventDefault();

    if (nome && capa && desc) {
      addAnime({ nome, capa, desc });
      setNome('');
      setCapa('');
      setDesc('');
    }
  };

    return (
        <form className={style.formAnime}onSubmit={handleSubmit}>
        <label htmlFor="name">Nome do Anime</label>
        <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Insira o nome do anime"></input>
        <label htmlFor="capa">Link da capa</label>
        <input value={capa} onChange={(e) => setCapa(e.target.value)} placeholder="Insira o link do capa"></input>
        <label htmlFor="desc">Descrição do capitulo</label>
        <input value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Insira a descrição"></input>
        <Button type="submit">Cadastrar Anime</Button>
        </form>
    )
}

export {FormAnime}