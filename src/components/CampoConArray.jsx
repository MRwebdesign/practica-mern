import React from 'react'

export default function CampoConArray(props) {
    console.log(props)
    let {datos} = props

 return (
    <div className='datos white flex a-center'>
    <p>{datos}</p>
  </div>
  )
}
