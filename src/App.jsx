import { useState } from 'react'
import Form from './Form'
import Form2 from './Form2'
import './App.css'
import Lista from './Lista'
import Lista2 from './Lista2'

function App() {
  const [count, setCount] = useState(0)

  
  const[pacientes, setPacientes]=useState([]);
  const[viajes, setViajes]=useState([]);
  
  const addPatient= (patient)=>{
    setPacientes([...pacientes,patient]);
  }
  const addTravel= (travel)=>{
    setViajes([...viajes,travel]);
  }

//aca seria la estructura basica de nuestro htm
//genero una prop con el nombre onAddPatient y paso la funcion de agregar pacientes al array
//genero una propt llamada paciente y le paso el estado
  return (
    <div className='App'>
      <h1>Formularios para viajes</h1>
      <dir>
        <h2>Formulario Paciente</h2>
        <Form onAddPatient={addPatient}/>
        <Lista pacientes={pacientes}/>
      </dir>
      <div>
        <h2>Formulario Viajes</h2>
        <Form2 onAddTravel={addTravel}/>
        <Lista2 viajes={viajes}/>
      </div>
      
    </div>
  )

}

export default App
