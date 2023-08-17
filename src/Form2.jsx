import { useState } from 'react'

function Form2({onAddTravel}){
    
    const[ciudadInicial, setInicial]=useState("");
    const[ciudadFinal, setFinal]=useState("");
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(ciudadInicial.length>5 &&ciudadFinal.length>5){
            onAddTravel({ciudadInicial,ciudadFinal});
            setInicial("");
            setFinal("");
        }
    }
return(
<form onSubmit={handleSubmit}>
    <input type="text" placeholder='Ciudad Inicial' value={ciudadInicial} onChange={(e)=>setInicial(e.target.value)}/>
    <input type="text" placeholder='Ciudad Final' value={ciudadFinal} onChange={(e)=>setFinal(e.target.value)}/>
    <button type='submit'>Agregar Viaje</button>
</form>
);

}
export default Form2;