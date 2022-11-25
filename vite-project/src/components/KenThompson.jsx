import React from 'react'
import image from "../image/KenThompson.png";
import "../App.css";
export default function KenThompson() {
  return (
    <>
      <wrap>
        <card>
          <div>
            <h1>Ken Thompson</h1>
            <img src={image} style={{ width: "30%", height: "50%" }} />
            <p>
              Kenneth Lane Thompson, o simplemente Ken, como es llamado por la
              comunidad hacker, es un pionero americano de la informática.
              Thompson diseñó e implementó originalmente el sistema operativo
              Unix y también inventó el lenguaje de programación B (el antecesor
              directo del archifamoso lenguaje de programación C), y fue uno de
              los primeros desarrolladores de los sistemas operativos Plan 9.
              Desde 2006, Thompson también ha co-desarrollado el lenguaje de
              programación Go mientras trabajaba en Google. Otras contribuciones
              de Ken al mundo de la programación han sido sus trabajos sobre las
              expresiones regulares, la creación de algunos editores de texto
              para el desarrollo de aplicaciones, la definición de la
              codificación UTF-8 y la creación de varios sistemas informáticos
              programados para jugar al ajedrez, como Belle. Estos han sido los
              primeros seis grandes programadores de todos los tiempos en una
              lista de doce. Próximamente publicaremos la segunda parte para
              completar este gran artículo. De todos los programadores que os
              hemos mostrado en este artículo, ¿cuál creéis que ha sido el más
              importante?
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
