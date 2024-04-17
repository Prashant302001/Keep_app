import React, { useState } from 'react'

function CreateNote(props) {
  const [note,setNote] = useState({
    title: "",
    content: ""
  })
  const [expand,setExpand] = useState(false)
  const inputEvent = (event) =>{
    // const value = event.target.value;
    // const name = event.target.name;

    const {value,name} = event.target;

    setNote((preData)=>{
      return {
        ...preData,
        [name] : value,
      }
    })
    console.log(note)
  }

  const addEvent = () =>{
    props.passNote(note)
    setNote({
      title: "",
    content: ""
    })
  }
  const expandit = () =>{
    setExpand(true)
  }
  const toNoraml = ()=>{
    setExpand(false)
  }
  
  return (
    <>
        <div className='main' onDoubleClick={toNoraml}>
            {expand?<input className='input' type='text' name='title' value={note.title} onChange={inputEvent} placeholder='Title' autoComplete='off'/>:null}
            <textarea className='area' name='content' value={note.content} onChange={inputEvent} rows='' cols='' placeholder='Write a note' onClick={expandit} ></textarea>
            {expand?<button onClick={addEvent}> + </button>:null}
        </div>
    </>
  )
}

export default CreateNote
