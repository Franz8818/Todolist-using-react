import React, { useState, useEffect } from "react"; // 1. IMPORTO EL HOOK useState

//create your first component
const Home = () => {
  //DOS FUNCIONES
  const [tarea, setTarea] = useState(""); // STRING
  const [lista, setLista] = useState([]); // ARRAY QUE TIENE OBJETOS DENTRO

  const addTask = (event) => { // ES UNA FUNCION - ARROW FUNTION
    if (event.key === "Enter" && !tarea == "" && !tarea.length <= 40) {
      let tareaActual = { label: tarea, done: false };
      setLista((actual) => [...actual, tareaActual]);
      setTarea("")
    }
  };
  const removeTask = (indice) => {
    setLista(actual =>[
      ...actual.slice(0, indice),
      ...actual.slice(indice + 1, actual.length)
      ]);
  }


  // function "createUser" usa FETCH y METHOD "Get" para traer el array vacio
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
    <div className="card p-1 container col-md-4">
      <div className="ms-1">
        <h1>To Do List</h1>
        <div className="d-block ms-2">
          <button className="btn btn-primary" onClick={() => createUser()}>
            New list
          </button>
          <button className="btn btn-primary ms-2" onClick={() => updateList()}>
            Save
          </button>
          <button className="btn btn-primary ms-2" onClick={() => deleteUser()}>
          delete
          </button>
        </div>
        <div className="input-group flex-nowrap p-2">
          <input
            type="text"
            className="form-control"
            placeholder="to make!"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea} 
            onKeyDown={addTask}
          />
        </div>
        <ul className="list-group">
          { lista?.map((elemento, indice) => (
            
            <li className="list-group-item d-flex justify-content-between align-items-start"
                key={indice}>
            <div className="ms-2 me-auto">
                  <div className="fw-bold">{elemento.label}</div>
                <span className="badge bg-primary rounded-pill" role="button" onClick={()=>removeTask(indice)}> X</span>
                </div>
              </li>            
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
