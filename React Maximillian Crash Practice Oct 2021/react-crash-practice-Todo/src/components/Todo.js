import { useState } from 'react'
import Modal from "./Modal"
import Backdrop from "./Backdrop"

function Todo(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function deleteHandler() {
    setIsModalOpen(true);
  }

  function cancelHandler() {
    setIsModalOpen(false);
  }

  function confirmHandler() {
    setIsModalOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      { isModalOpen && <Modal onCancel={cancelHandler} onConfirm={confirmHandler}/>}
      { isModalOpen && <Backdrop onCancel={cancelHandler}/>}
    </div> 
  );
}

export default Todo;
