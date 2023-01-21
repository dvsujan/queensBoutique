import React, { useState } from 'react'
import './order.css'
// react arrow function with props 

const Order = (props) => {
    const [delivered, setDelivered] = useState(false);
    const [msg,setMsg] = useState('');
    const  user = props.user;
    const orderId = props.order._id;
    const userId = props.order.userId;
    const onDeliverClick = () => {
        fetch('https://queensbotique.onrender.com/api/order/deliver/' + orderId + '/' + userId
            , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        )
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setDelivered(true);
                }
            })
    }
    return (
        <div>
            {user?(
                <span>
                    <h3>Customer Name</h3>
                    <h4>{props.order.user.name}</h4>
                </span> 
                ):null} 
            {
                props.order.needMeasurement ? (
                    <div className='orderContainer'>
                        <h1>
                            {props.order.name}
                        </h1>
                        <span>
                            <h2>bookingDate</h2>
                            <p>{
                                props.order.bookingDate.split('T')[0]
                            }</p>
                        </span>
                        <span>
                            <h2>Delivery Date</h2>
                            <p>{props.order.deliveryDate.split("T")[0]}</p>
                        </span>
                        <span>
                            <h2>Product Price</h2>
                            <p>{props.order.price}</p>
                        </span>
                        <h2>Measurements</h2>
                        <span>
                            <h2>Length</h2>
                            <p>{props.order.length}</p>
                        </span>
                        <span>
                            <h2>Shoulder</h2>
                            <p>{props.order.shoulder}</p>
                        </span>
                        <span>
                            <h2>Hand Length</h2>
                            <p>{props.order.handLength}</p>
                        </span>
                        <span>
                            <h2>Hand Loose</h2>
                            <p>{props.order.handLoose}</p>
                        </span>
                        <span>
                            <h2>Chest</h2>
                            <p>{props.order.chest}</p>
                        </span>
                        <span>
                            <h2>Waist</h2>
                            <p>{props.order.waist}</p>
                        </span>
                        <span>
                            <h2>Front Dot</h2>
                            <p>{props.order.frontDot}</p>
                        </span>
                        <span>
                            <h2>Seat Loose</h2>
                            <p>{props.order.seatLoose}</p>
                        </span>
                        <span>
                            <h2>Side Cuts</h2>
                            <p>{props.order.sideCuts}</p>
                        </span>
                        <span>
                            <h2>Gear</h2>
                            <p>{props.order.gear}</p>
                        </span>
                        <span>
                            <h2>Front Neck</h2>
                            <p>{props.order.frontNeck}</p>
                        </span>
                        <span>
                            <h2>Back Neck</h2>
                            <p>{props.order.backNeck}</p>
                        </span>
                        <span>
                            <h2>Bottom Length</h2>
                            <p>{props.order.bottomLength}</p>
                        </span>
                        <span>
                            <h2>Lehanga Length</h2>
                            <p>{props.order.lehangaLength}</p>
                        </span>
                        <span>
                            <h2>Wait</h2>
                            <p>{props.order.wait}</p>
                        </span>
                        <div>
                            <h2>description</h2>
                            <p>{props.order.description}</p>
                        </div>
                        {delivered ? <div>delivered</div> : (

                            <button onClick={onDeliverClick}>deliver</button>
                        )}
                    </div>
                ) : (
                    <div className='orderContainer'>
                        <h1>{props.order.name}</h1>
                        <span>
                            <h2>bookingDate</h2>
                            <p>{
                                props.order.bookingDate.split('T')[0]
                            }</p>
                        </span>
                        <span>
                            <h2>Delivery Date</h2>
                            <p>{props.order.deliveryDate.split("T")[0]}</p>
                        </span>
                        <span>
                            <h2>Product Price</h2>
                            <p>{props.order.price}</p>
                        </span>
                        <div>
                            <h2>description</h2>
                            <p>{props.order.description}</p>
                        </div>
                        {}
                        {delivered||user ? delivered&&<div>delivered</div> : (
                            <button onClick={onDeliverClick}>deliver</button>
                        )}
                    </div>
                )}
        </div>
    )
}

export default Order    