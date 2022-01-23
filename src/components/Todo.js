import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  // Leverage the React Hook to get state of the modal, this will create a state that react is aware of
  // You call the second value to change the state
  // The modal state should be off when it starts
  const [modalIsOpen, setModalIsOpen] = useState(false); 

  function deleteHandler() {
    console.log('Clicked "' + props.title + '"');
    setModalIsOpen(true); // changes the initial state to true
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>

      {/* Can also be written { modalIsOpen ? <Modal /> : null } */}
      {modalIsOpen && <Modal />}
      {modalIsOpen && <Backdrop />}
    
    </div>
  );
}

export default Todo;
