import React, { useState, useEffect } from "react";
import "./Select.css"

export default function Select() {
 
  const [equipes, setEquipes] = useState([]);
  const url = "https://backendexpress-c4f5o2wtd-felipewallace.vercel.app/";

  useEffect(() => {
    fetch(url + "equipes")
      .then((response) => response.json())
      .then((data) => setEquipes(data))
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <select>
      {equipes ? equipes.map((item) => {
        return (
          <option value={item.id}>
            <img 
              alt="Escudo" 
              src={item.escudo} 
              id="escudo"
            />
            {item.nome} 
          </option>
        );
      })
        : false}
    </select>
  );
}
