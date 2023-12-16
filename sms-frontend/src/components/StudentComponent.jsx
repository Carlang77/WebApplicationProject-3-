import React, { useState } from 'react'

const StudentComponent = () => {

   const [firstName, setFirstName] = useState('')
   const [lastName, setLastName] = useState('')
   const [email, setEmail] = useState('')

   function handleFirstName(e){
    setFirstName(e.target.value);
   }

   function handleLastName(e){
    setLastName(e.target.value);
   }

   function handleEmail(e){
    setEmail(e.target.value);
   }

   function saveStudent(e){
    e.preventDefault();
    
    const student = {firstName, lastName, email}
    console.log(student)
   }


  return (
    <div className='container'>
        <br></br>
        <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h2 className='text-center'>Register Your Details</h2>
            <div className='card-body'>
                <form>
                    <div className='form-group mb-2'>
                        <label className='form-label'>First Name</label>
                        <input 
                        type='text'
                        placeholder='Enter Student First Name'
                        name='firstName'
                        value={firstName}
                        className='form-control'
                        onChange={handleFirstName}>
                        
                        </input>
                    </div>


                  
                    <div className='form-group mb-2'>
                        <label className='form-label'>Last Name</label>
                        <input 
                        type='text'
                        placeholder='Enter Student Last Name'
                        name='lastName'
                        value={lastName}
                        className='form-control'
                        onChange={handleLastName}>
                        
                        </input>
                    </div>


                    <div className='form-group mb-2'>
                        <label className='form-label'>Email</label>
                        <input 
                        type='text'
                        placeholder='Enter Email'
                        name='email'
                        value={email}
                        className='form-control'
                        onChange={handleEmail}>
                        
                        </input>
                    </div>

                    <button className='btn btn-success' onClick={saveStudent}>Submit</button>




                </form>


            </div>



        </div>

        </div>


    </div>
  )
}

export default StudentComponent