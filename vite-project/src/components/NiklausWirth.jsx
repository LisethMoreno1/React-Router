import React from 'react'
import image from "../image/NiklausWirth.jpg";
import "../App.css";

export default function NiklausWirth() {
  return (
    <>
      <wrap>
        <card>
          <div>
            <h1>Niklaus Wirth</h1>

            <img src={image} style={{ width: "30%", height: "50%" }} />
            <p>
              Niklaus Wirth Emil es un informático suizo que es considerado como
              el padre de la programación moderna tal y como la conocemos hoy en
              día, entre otros campos de la ingeniería de software. Él es
              bastante conocido por la creación de varios lenguajes de
              programación, incluyendo el popular Pascal, Euler, Algol W,
              Modula, Modula-2, Oberon, Oberon-2 y Oberon-07. También diseñó el
              lenguaje de programación PL / 0 para ilustrar el diseño del
              compilador que sirvió de base para muchas otras clases de
              compiladores. Niklaus había trabajado previamente como parte del
              equipo de diseño e implementación de los sistemas operativos de
              Lilith y Oberon. El trabajo y el desarrollo de estos lenguajes de
              programación como pionero de la técnica le sirvieron a Wirth para
              ganar el prestigioso Premio Turing en 1984. Se retiró del mundo de
              la informática en 1999 y disfruta de su jubilación en Suiza.
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
