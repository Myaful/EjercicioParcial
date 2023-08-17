import { useState } from 'react'

function Form({onAddPatient}){
    
    const[nombre, setNombre]=useState("");
    const[apellido, setApellido]=useState("");
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(nombre.length>3 &&apellido>3){
            
            onAddPatient({nombre,apellido});
            setNombre("");
            setApellido("");
        }
    }
return(
<form onSubmit={handleSubmit}>
    <input type="text" placeholder='Ingrese su nombre' value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
    <input type="text" placeholder='Ingrese su apellido' value={apellido} onChange={(e)=>setApellido(e.target.value)}/>
    <button type='submit'>Agregar Paciente</button>
</form>
);

}
export default Form;