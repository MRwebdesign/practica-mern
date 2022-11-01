import './index.css'
import NombreFoto from './components/NombreFoto'
import CampoConArray from './components/CampoConArray'
import Flechita from './components/Flechita'
import data from './data/events1'
import { useState } from 'react'



function App() {

  let [mostrarOcultar,setMostrarOcultar] = useState(false)
  let [numeroACambiar,setNumeroACambiar]= useState(0)
  

  let hide = ()=>{

    setMostrarOcultar(!mostrarOcultar)    
    console.log(mostrarOcultar);
  }


  let next = (e) => {
    console.log('esta actuando la funcion');
    if (data.length-1>numeroACambiar){
    setNumeroACambiar(++numeroACambiar)
  }else{
    setNumeroACambiar(0)
  }
  }
  let prev = (e) => {
    console.log('esta actuando la funcion');
    if (numeroACambiar>0){
    setNumeroACambiar(--numeroACambiar)
  }else{
    setNumeroACambiar(data.length-1)
  }
  }



  return (
    <div className='card black'>
      <NombreFoto nombre={data[numeroACambiar].category} foto={data[numeroACambiar].image}/>
      {
        mostrarOcultar ?
          (<>
          <p className='gray flex j-center a-center' onClick={hide}>ocultar info</p>
          <CampoConArray datos= {data[numeroACambiar].name}/>
      <CampoConArray titulo= 'Description' datos= {data[numeroACambiar].description}/></>) : 
          (<p className='gray flex j-center a-center' onClick={hide}>Mostrar info</p>)
      }
      <div className='flex j-center a-center'>
        <Flechita verbo='Anterior' estilo='r25' onClick={prev}/>
        <Flechita verbo='Siguiente' estilo='l25' onClick={next}/>
      </div>
    </div>
  )
}

export default App