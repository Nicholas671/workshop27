import React from 'react'

function Modal({ message, isOpen, onClose }) {

    if (!isOpen) return null;

    return (
        <div className='modal-overlay'>
            <div className='modal'>
                <p>{message}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default Modal