import React, { useState } from "react"; // 1. IMPORTO EL HOOK useState

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

  
  const [ tarea, setTarea ] = useState(""); 
  const [lista, setLista] = useState([]); 


const createUser = async () => {
  try {
    const response = await fetch('https://assets.breatheco.de/apis/fake/todos/user/franz8818', {
        method: "POST",
        body: JSON.stringify([]),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await response.json()
    console.log(data);
} catch (error) {
    console.log(error);
}
}  

const getTasks = async () => {
  try {
    const response = await fetch('https://assets.breatheco.de/apis/fake/todos/user/franz8818', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await response.json()
    console.log(data);
} catch (error) {
    console.log(error);
};
} 

const updateList= async () => {
  try {
    const response = await fetch('https://assets.breatheco.de/apis/fake/todos/user/franz8818', {
        method: "PUT",
        body: JSON.stringify(lista),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await response.json()
    console.log(data);
} catch (error) {
    console.log(error);
}
} 

const deleteUser = async () => {
  try {
    const response = await fetch('https://assets.breatheco.de/apis/fake/todos/user/franz8818', {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await response.json()
    console.log(data);
} catch (error) {
    console.log(error);
};

} 

   return (
    <div className="container col-md-4">
      <div className="col-md-12">
      <h1>TODOS</h1>  
      <div className="d-block" >
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
          value= {tarea}
        />
        <button className="btn btn-primary" onClick={() => setTareas({})}>
    Click me
  </button>

       </div>
       <ol className="list-group">
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Estudiar</div>
    </div>
    <span className="badge bg-primary rounded-pill">X</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Trabajar</div>
    </div>
    <span className="badge bg-primary rounded-pill">X</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Trotar</div>
    </div>
    <span className="badge bg-primary rounded-pill">X</span>
  </li>
</ol>
      </div>
    </div>
  );
};

export default Home;
