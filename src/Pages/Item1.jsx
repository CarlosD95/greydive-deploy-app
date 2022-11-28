import React from 'react';
import data from '../db.json';


export default function Item1() {

  let count = 1;

  return (
    <div className="item-client">
      <h1 className="name-client">Cliente: {data[0].cliente}</h1>
      <h1 className="name-test">Test: {data[0].plataforma}</h1>
      <video className="video-test" controls>
        <source src={data[0].linkVideo} type="video/mp4" />
      </video>
      <h2 className="name-transcripcion">Transcripción</h2>
      <marquee
        className="scroll"
        width="40%"
        direction="up"
        height="100px"
        scrollamount="1"
      >
        {data[0].transcripcion.replaceAll("<br>", " ")}
      </marquee>
      <h2 className="name-tasks">Tareas</h2>
      <h4 className="name-escenario">Escenario: {data[0].escenario}</h4>
      <div className="preguntas">
        {data[0].preguntas.map((item) => (
          <p className="item-task">
            <span className="number-task">
              Tarea: {count++} <br />
            </span>
            <span className="task">
              {item.texto.replaceAll("\\n", " ")} <br />
            </span>
            <span className="time-task">
              Duracion de la tarea: {item.tiempo}
            </span>
          </p>
        ))}
      </div>
    </div>
  ); 
}
