
import React from 'react'
import { useSearchParams } from "react-router-dom"
import './index.css'


const PaymentSuccess = () => {

    const seachQuery = useSearchParams()[0]

    const referenceNum = seachQuery.get("reference")
    return (
        <>


            <div className="container my-5 logform">
                <h1 textTransform={"uppercase"} className='text-center my-5 logform'> Order Successfull</h1>

                <h2 className='text-center my-5'>
                    Reference No.{referenceNum}
                </h2>

            </div>
        </>


    )
}

export default PaymentSuccess