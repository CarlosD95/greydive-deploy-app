import React from 'react';
import data from '../db.json';


export default function Item2() {

  let count = 1;

  return (
    <div className="item-client">
      <h1 className="name-client">Cliente: {data[1].cliente}</h1>
      <h1 className="name-test">Test: {data[1].plataforma}</h1>
      <video className="video-test" controls>
        <source src={data[1].linkVideo} type="video/mp4" />
      </video>
      <h2 className="name-transcripcion">Transcripción</h2>
      <marquee
        className="scroll"
        width="40%"
        direction="up"
        height="100px"
        scrollamount="1"
      >
        {data[1].transcripcion.replaceAll("<br>", " ")}
      </marquee>
      <h2 className="name-tasks">Tareas</h2>
      <h4 className="name-escenario">Escenario: {data[1].escenario}</h4>
      <div className="preguntas">
        {data[1].preguntas.map((item) => (
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