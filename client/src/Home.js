import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



function Home() {

  const [Data, setData] = useState([])
  const navigate = useNavigate();


  useEffect(() => {
    getdata();

  }, [])


  



  const checkoutHandler = async(fees,id)=>{

    let res = await fetch("/checkout", {
      method: 'POST', // or 'PUT'
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({fees}),
});

const response = await res.json();

var {success ,order} =response;
console.log(success);



const options = {
  key:"rzp_live_1vMaL5sXr5XsfE",
  amount: order.amount,
  currency: "INR",
  name: "Nri Group of Institution",
  description: "Fees Payment",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ1EcCIPrxloCjx1WVI4VIrfdyNGySY5V1xBcB1R63NfYqyOtoEfWM_yc5AF9WvGPNk9Y&usqp=CAU",
  order_id: order.id,
  handler: async (response)=>{    
     const  res = await fetch("/paymentVerification", {
      method: 'POST', // or 'PUT'
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(response),
})


const responsedata = await res.json();


if(responsedata.success === true){
  const amount = order.amount;
  navigate(`/paymentsuccess?reference=${response.razorpay_payment_id}`);
   await fetch(`/updatefees/${id}`, {
    method: 'PATCH', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({amount}),
  });


}else{
  alert(responsedata);
}

  },
  prefill: {
      name: "Vishal Kumar",
      email: "5060vishalkumar@gmail.com",
      contact: "8517014691"
  },
  notes: {
      "address": "Razorpay Corporate Office"
  },
  theme: {
      "color": "#35A7FB"
  }
};


var rzp1 = new window.Razorpay(options);
rzp1.open();


 


  }

  const getdata = async () => {
    // props.setProgress(10);
    const url = "https://feespayment.herokuapp.com/getstudent";
    const data = await fetch(url);
    // props.setProgress(30);
    const parseddata = await data.json();
    // props.setProgress(70);
    setData(parseddata);
    // props.setProgress(100);
  }


  return (
    <>
      <div className="container">
        <table className="table my-5  table-success table-bordered text-center table-striped">
          <thead>
            <tr>
              <th scope="col">Serial No.</th>
              <th scope="col">Enrollment Number</th>
              <th scope="col">Student Name</th>
              <th scope="col">Father Name</th>
              <th scope="col">Branch</th>
              <th scope="col">Total Fees</th>
              <th scope="col">Payment</th>
            </tr>
          </thead>
          {Data.map((value, index) => {
            return (
              <tbody>
                <tr key="value._id">
                  <th scope="row" >{index + 1}</th>
                  <td>{value.enrollment}</td>
                  <td>{value.name}</td>
                  <td>{value.fathername}</td>
                  <td>{value.branch}</td>
                  <td>{value.fees}</td>
                  <td><button className='btn btn-primary rounded-pill btn-sm' onClick={()=>checkoutHandler(value.fees, value._id)}>Pay Now</button></td>
                </tr>
              </tbody>
            )
          })}
        </table>
      </div>
    </>
  )
}

export default Home