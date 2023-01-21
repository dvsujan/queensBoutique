import React,{useRef,useState} from 'react'
import Order from '../order/Order';

const SearchDate = () => {
    const dateRef = useRef();
    const [orders,setOrders] = useState();
    const onClick = () => {
        const date = dateRef.current.value;
        if(date === ''){
            alert('enter date');
        }
        fetch('https://queensbotique.onrender.com/api/order/getbyDate/'+date)
        .then(res => res.json())
        .then(data => {
            if(!data.success){
                alert(data.message);
            }
            setOrders(data.orders);
            console.log(data);
        }
        )
    }; 
  return (
    <div>
        <h1>Search Date</h1> 
        <input type='date' placeholder='Date' ref={dateRef} />
        <button className='add-btn' onClick={onClick}>search</button>
        <div>
            {orders && orders.map(order => (
                <Order key={order._id} order={order} user/>
            ))}
        </div>
    </div>
    )
}

export default SearchDate