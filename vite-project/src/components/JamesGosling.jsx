import React from 'react'
import image from "../image/JamesGosling.jpeg";
import "../App.css";
export default function JamesGosling() {
  return (
    <>
      <wrap>
        <card>
          <div>
            <h1>James Gosling</h1>

            <img src={image} style={{ width: "30%", height: "50%" }} />
            <p>
              James Arthur Gosling es un informático canadiense y un oficial de
              la orden de Canadá. Él ha codificado un buen número de
              aplicaciones informáticas, pero es ampliamente conocido por la
              creación del lenguaje de programación más popular de hoy en día,
              Java. Fue en 1994 cuando James desarrolló el lenguaje Java, así
              como su máquina virtual original y su compilador. Él atribuye la
              creación del lenguaje a su época de estudiante de posgrado, en la
              que creó una máquina virtual p-code para el ordenador DEC VAX del
              laboratorio, para que su profesor pudiera ejecutar programas UCSD
              Pascal. Más tarde se dio cuenta que la ejecución de la
              arquitectura-neutral para programas de amplia distribución, podría
              lograrse mediante una técnica similar. James también ha hecho
              importantes contribuciones a varios otros sistemas de software,
              tales como neWS y Gosling Emacs. Debido a sus logros
              extraordinarios, Gosling fue elegido miembro asociado de la
              Academia Nacional de los Estados Unidos de Ingeniería. En 2015
              recibió la medalla Von Newman de la IEEE por sus contribuciones al
              desarrollo informático.
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
