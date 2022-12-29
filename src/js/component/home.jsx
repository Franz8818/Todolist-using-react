import React, { useState, useEffect } from "react"; // 1. IMPORTO EL HOOK useState

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  //DOS FUNCIONES
  const [tarea, setTarea] = useState("");
  const [lista, setLista] = useState([]);

  const addTask = (event) => {
    if (event.key === "Enter" && !tarea == "" && !tarea.length <= 40) {
      let tareaActual = { label: tarea, done: false };
      setLista((actual) => [...actual, tareaActual]);
    }
  };
  const removeTask = (indice) => {
    setLista(actual =>[
      ...actual.slice(0, indice),
      ...actual.slice(indice + 1, actual.length)
      ]);
  }


  // function "traertarea" usa FETCH y METHOD "Get" para traer el array vacio
  const createUser = async () => {
    try {
      const response = await fetch(
        "https://assets.breatheco.de/apis/fake/todos/user/franz8818",
        {
          method: "POST",
          body: JSON.stringify([]),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      getTasks()
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTasks = async () => {
    try {
      const response = await fetch(
        "https://assets.breatheco.de/apis/fake/todos/user/franz8818",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (data.length > 0 ){
        setLista(data);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateList = async () => {
    try {
      const response = await fetch(
        "https://assets.breatheco.de/apis/fake/todos/user/franz8818",
        {
          method: "PUT",
          body: JSON.stringify(lista),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async () => {
    try {
      const response = await fetch(
        "https://assets.breatheco.de/apis/fake/todos/user/franz8818",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {getTasks()}, []);

  return (
    <div className="container col-md-4">
      <div className="col-md-12">
        <h1>TODOS</h1>
        <div className="d-block">
          <button className="btn btn-primary" onClick={() => createUser()}>
            Crear lista
          </button>
          <button className="btn btn-primary" onClick={() => updateList()}>
            Actualizar lista
          </button>
          <button className="btn btn-primary" onClick={() => deleteUser()}>
            Eliminar lista
          </button>
        </div>
        <div className="input-group flex-nowrap">
          <input
            type="text"
            className="form-control"
            placeholder="¡para hacer!"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
            onKeyDown={addTask}
          />
        </div>
        <ol className="list-group">
          {lista?.map((elemento, indice) => {
            return (
              <li
                className="list-group-item d-flex justify-content-between align-items-start"
                key={indice}
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{elemento.label}</div>
                </div>
                <span className="badge bg-primary rounded-pill">X</span>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Home;
