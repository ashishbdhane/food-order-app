import classes from './Modal.module.css'
import React from 'react'
import ReactDOM from 'react-dom'

const BackDrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}

const ModalOverlay = (props) => {
    return <div className={classes.modal}>{props.children}</div>
}

const Modal = (props) => {
    const portalId= document.getElementById('overlays');
  return (
    <>
        {ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>,portalId)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalId)}
    </>
  )
}

export default Modal