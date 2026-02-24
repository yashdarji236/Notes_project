import { useEffect, useState } from 'react'

import viteLogo from '/vite.svg'
import axios from 'axios'
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home.jsx'

const Thoughts = () => {
    const [notes, setnotes] = useState([]);
  const [title,settitle] = useState('');
  const [description,setdescription] = useState('')
  const [currentId, setCurrentId] = useState(null);


   function fetchData(){
    axios.get('http://localhost:3000/api/notes')
    .then(function(res){
      setnotes(res.data.notesArray);
    })
   }

   function handelSubmit(e){
      e.preventDefault();
     if(currentId){
      axios.patch(`http://localhost:3000/api/notes/${currentId}`,{
        description:description
      }).then(function(res){
        console.log(res.data);
        fetchData();
      setCurrentId(null);
      setdescription('');
      settitle('');
      })
     }
     else{
axios.post('http://localhost:3000/api/notes',{
      title:title,
      description:description
     })
     .then(function(res){
      console.log(res.data)
      fetchData()
     })
     settitle('');
     setdescription('')
     }
   }

    function handleDelete(e){
    
      axios.delete(`http://localhost:3000/api/notes/${e}`)
      .then(function(res){
       console.log(res.data)
        fetchData();
      })
     
    }


   
   useEffect(function(){
    fetchData();
   },[])
  return (
    <>
     <div className='parent'>
  <form className='note-create-form' onSubmit={handelSubmit}>
    <h2>Your Thoughts : </h2>
<input type="text" value={title} onChange={function(e){
  settitle(e.target.value);
}} placeholder='enter title' />
<input type="text" value={description} onChange={function(e){
  setdescription(e.target.value)
}}
placeholder='enter description' />
<button>Create Note</button>
  </form>
<div className='all-Notes'>

    <div className='notes'>
      {
        notes.map(function (e,idx) {
          return <div key={idx}className='note'>
            <h1>{e.title}</h1>
            <p>{e.description}</p>
            <button className='delete' onClick={function(){
              handleDelete(e._id)
            }}>Delete</button>
            <button className='update' onClick={function(){
             setdescription(e.description);
             setCurrentId(e._id)
            }}>Update</button>
          </div>
        })
      }
    </div>
    </div>
    </div>
    </>
  )
}

export default Thoughts






