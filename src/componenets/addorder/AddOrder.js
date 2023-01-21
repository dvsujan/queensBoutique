import React, { useState, useRef } from 'react'
import './addorder.css';

const AddOrder = () => {
    // log the user id from the url
    const userId = window.location.pathname.split('/')[3];
    const nameRef = useRef();
    const priceRef = useRef();
    const lengthRef = useRef();
    const shoulderRef = useRef();
    const handLengthRef = useRef();
    const handLooseRef = useRef();
    const armLooseRef = useRef();
    const chestRef = useRef();
    const waistRef = useRef();
    const frontDotRef = useRef();
    const seatLooseRef = useRef();
    const sideCutsRef = useRef();
    const gearRef = useRef();
    const frontNeckRef = useRef();
    const backNeckRef = useRef();
    const bottomLengthRef = useRef();
    const lehangaLengthRef = useRef();
    const waitRef = useRef();
    const bookingDateRef = useRef();
    const deliveryDateRef = useRef();
    const descriptionRef = useRef();

    const [needMeasuring, setNeedMeasuring] = useState(true);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [msg, setMsg] = useState('');
    const addOrder = () => {

        if (needMeasuring) {
            const name = nameRef.current.value;
            const price = priceRef.current.value;
            const length = lengthRef.current.value;
            const shoulder = shoulderRef.current.value;
            const handLength = handLengthRef.current.value;
            const handLoose = handLooseRef.current.value;
            const armLoose = armLooseRef.current.value;
            const chest = chestRef.current.value;
            const waist = waistRef.current.value;
            const frontDot = frontDotRef.current.value;
            const seatLoose = seatLooseRef.current.value;
            const sideCuts = sideCutsRef.current.value;
            const gear = gearRef.current.value;
            const frontNeck = frontNeckRef.current.value;
            const backNeck = backNeckRef.current.value;
            const bottomLength = bottomLengthRef.current.value;
            const lehangaLength = lehangaLengthRef.current.value;
            const wait = waitRef.current.value;
            const bookingDate = bookingDateRef.current.value;
            const deliveryDate = deliveryDateRef.current.value;
            const description = descriptionRef.current.value;
            
            const order = {
                name: name,
                price: price,
                bookingDate: bookingDate,
                deliveryDate: deliveryDate,
                needMeasurement: needMeasuring,
                length: length,
                shoulder: shoulder,
                handLength: handLength,
                handLoose: handLoose,
                armLoose: armLoose,
                chest: chest,
                waist: waist,
                frontDot: frontDot,
                seatLoose: seatLoose,
                sideCuts: sideCuts,
                gear: gear,
                frontNeck: frontNeck,
                backNeck: backNeck,
                bottomLength: bottomLength,
                lehangaLength: lehangaLength,
                wait: wait,
                description: description,
                userId: userId,
            };
            console.log(order);
            console.log("fetching");
            fetch(`https://queensbotique.onrender.com/api/order/add/` + userId, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => console.log(err))
        } else {
            const name = nameRef.current.value;
            const price = priceRef.current.value;
            const bookingDate = bookingDateRef.current.value;
            const deliveryDate = deliveryDateRef.current.value;
            const description = descriptionRef.current.value;
            const order = {
                name: name,
                price: price,
                bookingDate: bookingDate,
                deliveryDate: deliveryDate,
                needMeasurement: needMeasuring,
                description: description,
                userId: userId,
            };
            console.log("fetching");
            setSuccess(false); 
            fetch(`https://queensbotique.onrender.com/api/order/add/` + userId, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.success){ 
                        setSuccess(true);
                        setError(false);
                    }
                    else{
                        setSuccess(false);
                        setError(true);
                        setMsg(data.message);
                    }
                });
        }
    }
    return (
        <div className='add-order-page'>
            <h1>add order</h1>
            <div>
                <label>name</label>
                <input type="text" name="name" ref={nameRef} />
            </div>
            <div>
                <label>booking date</label>
                <input type="date" name="bookingDate" ref={bookingDateRef} />
            </div>
            <div>
                <label>delivery date</label>
                <input type="date" name="deliveryDate" ref={deliveryDateRef} />
            </div>
            <div>
                <label>price</label>
                <input type="text" name="price" ref={priceRef} />
            </div>
            <div>
                <label>need Measurements</label>
                <input type="checkbox" name="needMeasuring" checked={needMeasuring} onChange={() => setNeedMeasuring(!needMeasuring)} />
            </div>
            {needMeasuring ? (
                <div className='measurements'>
                    <div>
                        <label>length</label>
                        <input type="text" name="length" ref={lengthRef} />
                    </div>
                    <div>
                        <label>shoulder</label>
                        <input type="text" name="shoulder" ref={shoulderRef} />
                    </div>
                    <div>
                        <label>handLength</label>
                        <input type="text" name="handLength" ref={handLengthRef} />
                    </div>
                    <div>
                        <label>handLoose</label>
                        <input type="text" name="handLoose" ref={handLooseRef} />
                    </div>
                    <div>
                        <label>armLoose</label>
                        <input type="text" name="handLoose" ref={armLooseRef} />
                    </div>
                    <div>
                        <label>chest</label>
                        <input type="text" name="chest" ref={chestRef} />
                    </div>
                    <div>
                        <label>waist</label>
                        <input type="text" name="waist" ref={waistRef} />

                    </div>
                    <div>
                        <label>frontDot</label>
                        <input type="text" name="frontDot" ref={frontDotRef} />
                    </div>
                    <div>
                        <label>seatLoose</label>
                        <input type="text" name="seatLoose" ref={seatLooseRef} />
                    </div>
                    <div>
                        <label>sideCuts</label>
                        <input type="text" name="sideCuts" ref={sideCutsRef} />
                    </div>
                    <div>
                        <label>gear</label>
                        <input type="text" name="gear" ref={gearRef} />
                    </div>
                    <div>
                        <label>frontNeck</label>
                        <input type="text" name="frontNeck" ref={frontNeckRef} />
                    </div>
                    <div>
                        <label>backNeck</label>
                        <input type="text" name="backNeck" ref={backNeckRef} />
                    </div>
                    <div>
                        <label>bottomLength</label>
                        <input type="text" name="bottomLength" ref={bottomLengthRef} />
                    </div>
                    <div>
                        <label>lehangaLength</label>
                        <input type="text" name="lehangaLength" ref={lehangaLengthRef} />
                    </div>
                    <div>
                        <label>wait</label>
                        <input type="text" name="wait" ref={waitRef} />
                    </div>
                </div>
            ) : null}
            <textarea name="comments" placeholder="comments" ref={descriptionRef}></textarea>
            <button className='add-btn' onClick={addOrder}>Add</button>
            {success ? <p>order added successfully</p> : null}
            {error ? <p>{msg}</p> : null}
        </div>
    )
}

export default AddOrder