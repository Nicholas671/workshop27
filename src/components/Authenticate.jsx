import React, { useState } from 'react'
import Modal from './Modal'

function Authenticate({ token }) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);
    const [modalMessage, setModalMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);


    async function handleClick() {
        try {
            const response = await fetch(
                'https://fsa-jwt-practice.herokuapp.com/authenticate',
                {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`

                    }
                }
            );

            const result = await response.json();
            if (response.ok) {
                setSuccessMessage(result.message);
                setModalMessage('Get to the Beaches!');
            } else {
                setError(result.error);
                setModalMessage('No Beaches for You!');
            }
        } catch (error) {
            setError(error.message);
            setModalMessage(error.message);
        }
        setIsModalOpen(true);
    }
    function closeModal() {
        setIsModalOpen(false);
    }
    return (
        <div>
            <h2>Authenticate</h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <button onClick={handleClick}>Authenticate</button>
            <Modal message={modalMessage} isOpen={isModalOpen} onClose={closeModal} />
        </div>

    )
}

export default Authenticate