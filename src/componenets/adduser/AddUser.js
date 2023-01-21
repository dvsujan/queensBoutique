import React, { useState, useEffect, useRef } from 'react'
import './style.css'

const AddUser = () => {
    const nameRef = useRef()
    const phoneRef = useRef()
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState('');
    const addClick = (ev) => {
        ev.preventDefault(); 
        if (nameRef.current.value === '' || phoneRef.current.value === '') {
            setError(true)
            setMsg('Please fill all the fields')
            return
        }
        setLoading(true)
        // if server is not responding then it will throw error
        fetch('https://queensbotique.onrender.com/api/user/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nameRef.current.value,
                phoneNo: phoneRef.current.value
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data); 
                setLoading(false)
                if (!data.success) {
                    setError(true)
                    setMsg(data.message)
                    return
                }
                setSuccess(true)
                setMsg(data.message)
            })
    }
    return (
        <div className='add-user-page'>
            {loading ? (<div>Loading....</div>) : (
                <div className='container'>
                    <h1>Add User</h1>
                    <input type='text' placeholder='name' ref={nameRef} />
                    <input type='text' placeholder='PhoneNo' ref={phoneRef} />
                    <button className='add-btn' onClick={addClick}>Add</button>
                    {error && <div className='error'>{msg}</div>}
                    {success && <div className='success'>{msg}</div>}
                </div>
            )}
        </div>
    )
}

export default AddUser