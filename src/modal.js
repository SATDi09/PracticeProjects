import { useEffect, useState } from "react";

const Modal =() =>{
    const [show, setShow] = useState(false);
  useEffect(()=>{
    function handleBackDrop (event) {
      if(event.keyCode===27) {
        handleClose()
      }
    }
    document.addEventListener("keydown",handleBackDrop)
    return (()=>document.addEventListener("keydown",handleBackDrop))
  })

  function handleClose() {
    setShow(false);
  }
  return (
    <div className="App" onClick={()=>handleClose()}>
      <h2>Open Modal</h2>
      <button
        style={{
          height: "5vh",
          widows: "20vw",
          borderRadius: "5px",
          background: "violet",
        }}
        onClick={(e) => {
          e.stopPropagation()
          setShow(true)}}
      >
        Open Modal
      </button>
      {show && (
        <div className="ModalBackground">
          <div className="Modal">
            <div className="ModalHeader">
              <span className="title">Header of Modal</span>
              <span onClick={()=>handleClose()} className="close">X</span>
            </div>
            <span className="ModalBody">
              This approach provides a dynamic progress bar that updates
              automatically and includes controls for stopping and resetting
              progress, enhancing the user experience and providing more control
              over the progress state.
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;