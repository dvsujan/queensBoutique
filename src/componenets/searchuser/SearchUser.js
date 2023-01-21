import React, { useRef, useEffect, useState } from 'react'
import './style.css'
import Order from '../order/Order'

const SearchUser = () => {
    const phoneRef = useRef()
    const [userData, setUserData] = useState();
    const [orderData, setOrderData] = useState();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState('');
    const onClick = () => {
        console.log("gg");
        if (phoneRef.current.value === '') {
            setError(true);
            setMsg("enter phoneno ");
        }
        setLoading(true);
        fetch('https://queensbotique.onrender.com/api/user/search/' + phoneRef.current.value)
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                if (!data.success) {
                    setError(true);
                    setMsg(data.message);
                }
                setUserData(data.user);
                setOrderData(data.orders);
                console.log(data);
            })
    }
    return (
        <div className='search-user-page'>
            {loading ? (<div>Loading....</div>) : (
                <div className='search-container'>
                    <h1>Search User</h1>
                    <input type='text' placeholder='PhoneNo' ref={phoneRef} />
                    <button className='add-btn' onClick={onClick}>search</button>
                    {error && <div className='error'>{msg}</div>}
                    {success && <div className='success'>{msg}</div>}
                </div>
            )}
            {loading ? (
                <div>Loading....</div>
            ) : (
                <div className='orders-container'>
                    {userData ? (
                        <div className='colmn'>
                            <span>
                                <button className='add-btn' onClick={
                                    () => {
                                        window.location.href = '/order/add/' + userData._id
                                    }
                                }>add order</button>
                            </span>
                            <span>
                                <h2>name</h2>
                                <p>{userData.name}</p>
                            </span>
                            <h1>Active Orders</h1>

                        </div>
                    ) : null}
                    {orderData ? (
                        orderData.map((order, index) => {
                            return (
                                <Order key={index} order={order} />
                            )
                        })
                    ) : null
                    }
                </div>
            )}
        </div>
    )
}

export default SearchUser