import React, {useState} from "react"; // 1. IMPORTO EL HOOK useState

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [email,setEmail]=useState("") // 2. EJECUTO EL HOOK useState
	const [password,setPassword]=useState("")

	function handleEmail() {

	}
	
	return (
		<div className="text-center">
         <h1 className="text-center mt-5">Trabajando con componentes</h1>
		 <form className="container">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Tu correo aquí" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Tu contraseña aqui" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

		</div> 
	);
};

export default Home;
