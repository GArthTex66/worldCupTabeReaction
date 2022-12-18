import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsPencilSquare, BsTrash } from 'react-icons/bs'
import "./Equipes.css"

export default function Equipes() {
  const [equipes, setEquipes] = useState([]);
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [escudo, setEscudo] = useState("");
  const [tipo, setTipo] = useState("");

  const url = "https://backendexpress-c4f5o2wtd-felipewallace.vercel.app/";

  useEffect(() => {
    fetch(url + "equipes")
      .then((response) => response.json())
      .then((data) => setEquipes(data))
      .catch((err) => console.log(err));
  }, [url]);

  function novosDados() {
    setTipo("novo");
  }

  function limparDados() {
    setId("");
    setNome("");
    setEscudo("");
    setTipo("");
  }

  function editarDados(cod) {
    let equipe = equipes.find((item) => item.id === cod);
    const { id, nome, escudo } = equipe;
    setTipo("editar");
    setId(id);
    setNome(nome);
    setEscudo(escudo);
  }

  function apagarDados(cod) {
    axios.delete(url + "equipes/" + cod).then(() => {
      setEquipes(equipes.filter((item) => item.id !== cod));
    });
  }

  function atualizaListaComNovaEquipe(response) {
    let { id, nome, escudo } = response.data;
    let obj = { id: id, nome: nome, escudo: escudo };
    let teams = equipes;
    teams.push(obj);
    setEquipes(teams);
    limparDados("");
  }

  function atualizaListaEquipeEditada(response) {
    let { id } = response.data;
    const index = equipes.findIndex((item) => item.id == id);
    let teams = equipes;
    teams[index].nome = nome;
    teams[index].escudo = escudo;
    setEquipes(teams);
    limparDados("");
  }

  function gravaDados() {
    if (nome !== "" && escudo !== "") {
      if (tipo === "novo") {
        axios
          .post(url + "equipes", {
            nome: nome,
            escudo: escudo,
          })
          .then((response) => atualizaListaComNovaEquipe(response))
          .catch((err) => console.log(err));
      } else if (tipo === "editar") {
        axios
          .put(url + "equipes/" + id, {
            id: id,
            nome: nome,
            escudos: escudo,
          })
          .then((response) => atualizaListaEquipeEditada(response))
          .catch((err) => console.log(err));
      }
    } else {
      console.log("Preencha os campos");
    }
  }

  return (
    <div className="box">
      {equipes ? equipes.map((item) => {
            return (
                <div className="linha">
                  <img 
                    alt="Escudo" 
                    src={item.escudo} 
                    id="escudo"
                  />
                  <div id="options">
                    {/* <p>{item.nome}</p> */}
                    <BsPencilSquare
                      cursor="pointer"
                      alt="Editar"
                      id={item.id}
                      className="icon"
                      onClick={(e) => editarDados(item.id)}
                    />
                    <BsTrash
                      cursor="pointer"
                      alt="Apagar"
                      id={item.id}
                      className="icon"
                      onClick={(e) => apagarDados(item.id)}
                    />
                  </div>
                </div>
              
            );
          })
        : false}

    <button type="button" onClick={novosDados}>Novo</button>
      {tipo ? (
        <>
          <input
            type="text"
            name="txtNome"
            value={nome}
            onChange={(e) => {
              setNome(e.target.value);
            }}
          />
          <input
            type="text"
            name="txtEscudo"
            value={escudo}
            onChange={(e) => {
              setEscudo(e.target.value);
            }}
          />
          <button type="button" onClick={limparDados}>Cancelar</button>
          <button type="button" onClick={gravaDados}>Gravar</button>
        </>
      ) : (
        false
      )}
  
    </div>
  );
}
