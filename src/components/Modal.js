import React from "react";

const Modal = ({closeModalHandler}) => {
  
  return (
    <div className="modal">
      <h1>Are you sure?</h1>
      <button className="btn" onClick={closeModalHandler}>Cancle</button>
      <button className="btn" onClick={closeModalHandler}>Confirm</button>
    </div>
  );
};

export default Modal;
