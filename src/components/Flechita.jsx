import React from 'react'

export default function Flechita(props) {
    // a traves de las llaves: desestructuro
  let {verbo} = props //saco la propiedad verbo del objeto props
  let {estilo}=props 
  let {onClick}=props
  
  return (
    <div className={`gray flecha ${estilo} flex j-center a-center`} onClick={onClick}> {verbo} </div>
  )
}
