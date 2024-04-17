import React from 'react'

function Note(props) {
  const Delete =()=>{
    props.deleteitem(props.id)
  }
  return (
    <div className='main_note'>
    <div className='note'>
      <h1>{props.title}</h1>
      <br/>
      <p>{props.content}</p>
    </div>
    <button className='btn_note' onClick={Delete}>-</button>
    </div>
  )
}

export default Note
