import React from "react";
import { useState } from "react";

export default function Ticket() {
  const [visivel, setVisível] = useState(true);
  const [numero, setNumero] = useState(null);

  function handleClick() {
    const n = Math.floor(Math.random() * 100)
    setNumero(n)
    console.log("Número gerado:", numero);

    setVisível(false);
  }

  function voltar() {
    setNumero(null);
    setVisível(true);
  }


  if (!visivel) {
    return (
        <div>
            <h2>Seu ticket: {numero}</h2>
            <button onClick={voltar}>Ok</button>
        </div>
    )
  }

  return (
    <div>
      <h2>Olá!</h2>
      <p>Clique no botão abaixo para gerar ticket</p>
      <button onClick={handleClick}>Gerar ticket</button>
    </div>
  );
}
