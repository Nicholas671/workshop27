import React, { useState } from 'react'

function SignUpForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    async function handleSubmit(e) {
        try { }
        catch (error) {
            setError(error.message);
        }
        e.preventDefault();
        console.log("Hello")
    }
    return (
        <>
            <h2>Sign Up</h2>
            {error && <p>{error}</p> >}
            <form onSubmit={handleSubmit}>
                <label>Username: <input value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>Password: <input value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button>Submit</button>
            </form>

        </>
    )
}

export default SignUpForm