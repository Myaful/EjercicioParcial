import React from "react";

function Lista ({pacientes}){
     //para renderizar agrego el map
     // la key es para que me tome los elementos como diferentes, sino al no ponerlo son todos iguales
return(
    <div>
        <h2>Pacientes</h2>
       
        {pacientes.map((paciente,index)=>(<div key={index} className="card">
                <h3>{paciente.nombre} {paciente.apellido}</h3>
            </div>
            ))}
    </div>
)
}
export default Lista;