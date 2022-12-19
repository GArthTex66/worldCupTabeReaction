import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import "./Select.css"

export default function Tabela() {
  
  const [equipes, setEquipes] = useState([]);
  const url = "https://backendexpress-c4f5o2wtd-felipewallace.vercel.app/";

  const inicializeEquipes = (data) => {
    setEquipes(data);
  }

  useEffect(() => {
    fetch(url + "equipes")
      .then((response) => response.json())
      .then((data) => inicializeEquipes(data))
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, [url]);


  return (
    <>
      <Form.Select>
      {equipes.map((equipe) => 
          <option key={equipe.id} value={equipe.id}>{equipe.nome}</option>
      )}
    </Form.Select>
    </>
    
  );
}
