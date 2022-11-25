import React from 'react'
import image from "../image/AdaLovelace.jpeg";
import "../App.css"

export default function AdaLovelace() {
  return (
    <>
      <wrap>
        <card>
          <div>
            <h1>Ada Lovelace</h1>

            <img src={image} style={{ width: "30%", height: "50%" }} />
            <p>
              Augusta Ada King, más comúnmente conocida como Ada Lovelace (la
              cual podemos ver en la imagen que encabeza el artículo), fue una
              matemática inglesa y la primera programadora de computadoras del
              mundo. Sobre todo fue conocida por su trabajo sobre la máquina
              calculadora mecánica de uso general de Charles Babbage, la máquina
              analítica. Las notas que creó para el desarrollo de dicha máquina
              analítica incluyen lo que se podría reconocer hoy en día como el
              primer algoritmo creado con el único propósito de ser procesado
              por una máquina, o en otras palabras, el primer programa
              informático.
            </p>
          </div>

          <a className="button button1" href="/">
            Menu Principal
          </a>
        </card>
      </wrap>
    </>
  );
}

