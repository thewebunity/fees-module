import React, { useState } from 'react';



function AddStudent() {

  const [Data, setData] = useState({
    enrollment:"",name:"",fathername:"",branch:"",fees:""
  })

  const handleChange =(e) => {
   let{name,value}=e.target;

   setData({...Data ,[name]:value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await fetch("/addstudent", {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Data),
    })

let response = await res.json();
console.log(response);
if (response.success === true) {
    alert('Add Student Successfully');
    
} else {
    alert('Server Error');
}
setData({ enrollment:"",name:"",fathername:"",branch:"",fees:""})

};
    
    return (
        <div className='container my-5 d-flex inline justify-content-center'>
            <form className='col-4' onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label htmlFor="enrollment" className="form-label">Enrollment Number</label>
                    <input type="text" className="form-control" id="enrollment" aria-describedby="emailHelp" 
                    name="enrollment"
                    value={Data.enrollment}
                    onChange={handleChange}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="enrollment" className="form-label">Student Name</label>
                    <input type="text" className="form-control" id="enrollment" aria-describedby="emailHelp"  
                    name="name"
                    value={Data.name}
                    onChange={handleChange}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="enrollment" className="form-label">Father Name</label>
                    <input type="text" className="form-control" id="enrollment" aria-describedby="emailHelp" 
                    name="fathername"
                    value={Data.fathername}
                    onChange={handleChange}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="enrollment" className="form-label">Branch Name</label>
                    <input type="text" className="form-control" id="enrollment" aria-describedby="emailHelp"  
                    name="branch"
                    value={Data.branch}
                    onChange={handleChange}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="enrollment" className="form-label">Total Fees</label>
                    <input type="text" className="form-control" id="enrollment" aria-describedby="emailHelp"  
                    name="fees"
                    value={Data.fees}
                    onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100 my-2">Submit</button>
            </form>
        </div>
    )
}

export default AddStudent