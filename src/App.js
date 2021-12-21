import "./App.css";
import { useState } from "react";
import Sesion from "./components/Sesion";
import Home from "./components/Home";


function App() {
  const [carrito, setCarrito] = useState([]);

  const [sesionStatus, setSesionStatus] = useState(true);

  const addCarrito = (el) => {
    let newCarrito = el;
    console.log(newCarrito);
    setCarrito([...carrito, newCarrito]);

    
  };

  const deleteCarrito = (id) => {
    console.log(id);
    let newDataCarrito = carrito.filter((el) => el.id !== id);
    setCarrito(newDataCarrito);
  };

  return (
    <div className="App">
      {sesionStatus ? (
        <Sesion setSesionStatus={setSesionStatus} />
      ) : (
        <Home
          carrito={carrito}
          deleteCarrito={deleteCarrito}
          addCarrito={addCarrito}
          setSesionStatus={setSesionStatus}
        />
      )}
    </div>
  );
}

export default App;
