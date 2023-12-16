import React, { useState } from 'react';
import { createStudent } from '../services/StudentService';
import { useNavigate } from 'react-router-dom';

const StudentComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedTime, setSelectedTime] = useState(''); // New state for selected time

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleTimeChange(e) {
    setSelectedTime(e.target.value);
  }

  const navigator = useNavigate();

  function saveStudent(e) {
    e.preventDefault();

    const student = { firstName, lastName, email, selectedTime };
    console.log(student);

    createStudent(student).then((response) => {
      console.log(response.data);
      navigator('/students');
    });
  }

  // Time options for the dropdown
  const timeOptions = ['12:00 AM', '12:30 PM','1:00 PM', '1:30 PM','2:00 PM', '2:30 PM','3:00 PM', '3:30 PM','4:00 PM','4:30 PM','5:00 PM'];

  return (
    <div className='container'>
      <br />
      <br />
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
                  onChange={handleFirstName}
                />
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Last Name</label>
                <input
                  type='text'
                  placeholder='Enter Student Last Name'
                  name='lastName'
                  value={lastName}
                  className='form-control'
                  onChange={handleLastName}
                />
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Email</label>
                <input
                  type='text'
                  placeholder='Enter Email'
                  name='email'
                  value={email}
                  className='form-control'
                  onChange={handleEmail}
                />
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Select Time for Defense</label>
                <select
                  className='form-control'
                  value={selectedTime}
                  onChange={handleTimeChange}
                >
                  <option value='' disabled>
                    Select a time
                  </option>
                  {timeOptions.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>

              <button className='btn btn-success' onClick={saveStudent}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentComponent;
