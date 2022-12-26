import React, { useState } from "react"; // 1. IMPORTO EL HOOK useState

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  function todoList() {}
  
  const [todos, setTodos] = useState(data); // 2. EJECUTO EL HOOK useState

  console.log(todos);
   return (
    <div className="container col-md-4">
      <div class="col-md-18">
      <h1>TODOS</h1>  
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">
          ¡Para hacer!
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
       </div>
       <ol class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">{todos}</div>
    </div>
    <span class="badge bg-primary rounded-pill">X</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Trabajar</div>
    </div>
    <span class="badge bg-primary rounded-pill">X</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Trotar</div>
    </div>
    <span class="badge bg-primary rounded-pill">X</span>
  </li>
</ol>
      </div>
    </div>
  );
};

export default Home;
