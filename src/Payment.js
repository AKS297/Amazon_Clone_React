import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState ,useEffect} from 'react';
import { Link ,useHistory} from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from './axios'


function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history=useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret,setClientSecret]=useState(true);

    useEffect(()=>{
      
        const getClientSecret =async () =>{
            const response=await axios ({
                method : 'post',
                //stripe expects the total in currency in sub units
                url:`/payments/create?total=${getBasketTotal(basket)}`
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    },[basket])


    const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

     const payload =await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
            card:elements.getElement(CardElement)
        }
     }).then(({paymentIntent})=>
     {



        setSucceeded(true);
        setError(null);
        setProcessing(false);

        history.replace('/oders')
     })
    
    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : " ")
    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} Items</Link>)
                </h1>
                {/* Delivery Address*/}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>

                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>React lane</p>
                        <p>Bangalore</p>
                    </div>
                </div>


                {/* Review Items  */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and Delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                {/* payment method */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        <form onSubmit={handleSubmit}>
                            <CardElement onClick={handleChange} />
                            <div className='payment__priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <p>
                                                Order Total ({basket.length} items):<strong>{`${value}`}</strong>
                                            </p>


                                        </>
                                    )}


                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;