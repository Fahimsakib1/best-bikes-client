import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';




const CheckOutForm = ({ order }) => {

    const { price, sellerName, companyName, productName, buyerEmail, buyerName, sellerEmail, buyerMobile, _id, productID } = order

    const stripe = useStripe();
    const elements = useElements();

    const [cardError, setCardError] = useState('');

    const [clientSecret, setClientSecret] = useState("");


    //const [successfulPayment, setSuccessfulPayment] = useState('');
    const [transactionId, setTransactionId] = useState('');

    const [paymentConfirmError, setPaymentConfirmError] = useState('')



    const [completePayment, setCompletePayment] = useState(true);
    const [buttonName, setButtonName] = useState('Pay');





    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);




    useEffect(() => {

        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((data) => {
                setClientSecret(data.clientSecret);
            });

    }, [order]);



    const handleSubmit = async (event) => {
        event.preventDefault();

        setTransactionId('');


        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });


        if (error) {
            console.log("Error", error)
            setCardError(error);
        }
        else {
            setCardError('');
        }

        setSuccess('')
        setProcessing(true);



        //Payment Intent
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyerName,
                        email: buyerEmail
                    },
                },
            },
        );

        if (confirmError) {
            setPaymentConfirmError(confirmError.message)
            return;
        }

        // console.log("Payment Intent", paymentIntent)



        if (paymentIntent.status === "succeeded") {

            //setTransactionId(paymentIntent.id)
            //setCompletePayment(false);
            //setButtonName('Paid');


            const payment = {
                price: price,
                transactionId: paymentIntent.id,
                email: buyerEmail,
                paymentBy: buyerName,
                productName: productName,
                brand: companyName,
                bookingId: _id,
                bikeOriginalID: productID,
            }


            //store payment info in database
            fetch('http://localhost:5000/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(payment)
            })

                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.acknowledged) {
                        setTransactionId(paymentIntent.id);
                        setCompletePayment(false);
                        setButtonName('Paid');
                        toast.success(`${buyerName} Your Payment is Successful for ${companyName} ${productName}`);
                    }
                })
            
            //remove the bike from the category after successful payment
            fetch(`http://localhost:5000/payments/${productID}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Product Removed From Category Details')
                    }
                    else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops... Something Went Wrong',
                            text: `Can not Remove Product ${productName}`
                        })
                    }
                })

        }

        setProcessing(false);


    }





    return (
        <div>
            <>
                <h1 className='text-center text-2xl text-blue-600 font-semibold'>Pay with Your Card</h1>
                <form
                    className='w-[320px] md:w-[550px] sm:w-[340px] my-8 mx-auto border-2 py-24 px-2 rounded-md  shadow-lg'
                    onSubmit={handleSubmit}>

                    <CardElement
                        className=' -mt-20 py-4 shadow-lg'
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: 'blue',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />

                    <div className='mx-auto text-center'>

                        <button className='btn btn-sm bg-blue-700 hover:bg-blue-800 border-0 text-white font-bold mt-8 px-10 w-1/2 text-lg' type="submit" disabled={!stripe || !clientSecret || !completePayment}>
                            {buttonName}
                        </button>


                        {/* <button className='btn btn-sm bg-blue-700 border-0 text-white font-bold mt-10 px-10 hover:bg-blue-600 ' type="submit" disabled={!stripe || !clientSecret || processing || !completePayment}>
                            {buttonName}
                        </button> */}

                    </div>

                    {
                        cardError ?
                            <>
                                <p className='text-red-600 text-center mt-2'>{cardError.message} Try Again..</p>
                            </>
                            :
                            <>
                                <p className='text-red-600 text-center mt-2'>{paymentConfirmError}</p>
                            </>

                    }


                </form>

                <>
                    {
                        transactionId &&
                        <div className=''>
                            <h1 className='text-lg  font-semibold text-center'><span className='text-blue-600'>Congratulations!!</span> {buyerName} Your Payment is <span className='text-green-600 font-semibold text-2xl'>Successful</span> For {companyName}  {productName}</h1>

                            <h2 className='text-md text-center font-semibold'>Transaction ID: <span className='font-bold text-green-600'>{transactionId}</span></h2>

                        </div>
                    }
                </>
            </>
        </div>
    );
};

export default CheckOutForm;