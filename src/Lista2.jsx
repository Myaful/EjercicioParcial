import React from "react";

function Lista2 ({viajes}){
     //para renderizar agrego el map
     // la key es para que me tome los elementos como diferentes, sino al no ponerlo son todos iguales
return(
    <div>
        <h2>Viajes</h2>
       
        {viajes.map((viaje,index)=>(<div key={index} className="card">
                <h3>{viaje.ciudadInicial} {viaje.ciudadFinal}</h3>
            </div>
            ))}
    </div>
)
}
export default Lista2;