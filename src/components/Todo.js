import React, { useState } from 'react'
import Modal from './Modal';
import Backdrop from './Backdrop';
const Todo = ({textval}) => {
  const [modalisOpen, setModalisOpen] = useState(false);
    const deletehandle=()=>{
        console.log("delete");
        setModalisOpen(true);
    }
    const closeModalHandler=()=>{
      setModalisOpen(false);
    }
  return (
    <div className="card">
      <h2>{textval}</h2>
      <div className="action">
         <button className="btn" onClick={deletehandle}>Delete</button>
      </div>
      {modalisOpen && <Modal closeModalHandler={closeModalHandler}/>}
      {modalisOpen && <Backdrop closeModalHandler={closeModalHandler} />}
      </div>
  )
}

export default Todo