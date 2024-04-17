import './App.css';
import React, { useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';

function App() {
  const [additem,setAdditem] = useState([])

  const addNote = (note) =>{
    setAdditem((preData)=>{
        return [...preData,note]
    })
    console.log(note)
  }

  const onDelete = (id)=>{
    setAdditem((olddata)=>
      olddata.filter((currdata,idx)=>{
        return idx!==id
      })
    )
  }
  return (
    <>
      <Header/>
      <CreateNote passNote={addNote}/>
      {
        additem.map((val,index)=>{
          return (
            <Note key={index} id={index} title={val.title} content={val.content} deleteitem={onDelete}/>
          )
        })
      }
      <Footer/>
    </>
  );
}

export default App;
