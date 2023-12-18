// Import necessary modules and functions from React and other files
import React, { useEffect, useState } from 'react';
import { createStudent, getStudent, updateStudent } from '../services/StudentService';
import { useNavigate, useParams } from 'react-router-dom';

// Define a functional component named StudentComponent
const StudentComponent = () => {
  // Declare state variables using the useState hook
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  // Define functions to handle changes in input fields
  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  // Extract 'id' from the URL parameters using the useParams hook
  const { id } = useParams();

  // Initialize state variable 'errors' to handle form validation errors
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  // Extract the 'navigate' function from the react-router-dom library
  const navigate = useNavigate();

  // Use the useEffect hook to fetch student data when 'id' changes
  useEffect(() => {
    if (id) {
      getStudent(id)
        .then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  // Function to handle form submission (save or update student)
  function saveOrUpdateStudent(e) {
    e.preventDefault();

    // Validate the form using the 'validateForm' function
    if (validateForm()) {
      const student = { firstName, lastName, email };

      // If 'id' exists, update the student; otherwise, create a new student
      if (id) {
        updateStudent(id, student)
          .then((response) => {
            console.log(response.data);
            // Navigate to the '/students' route
            navigate('/students');
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        createStudent(student)
          .then((response) => {
            console.log(response.data);
            // Navigate to the '/students' route
            navigate('/students');
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }

  // Function to validate the form and update the 'errors' state
  function validateForm() {
    let valid = true;

    const errorsCopy = { ...errors };

    // Check if 'firstName' is not empty
    if (firstName.trim()) {
      errorsCopy.firstName = '';
    } else {
      errorsCopy.firstName = 'First name is required';
      valid = false;
    }

    // Check if 'lastName' is not empty
    if (lastName.trim()) {
      errorsCopy.lastName = '';
    } else {
      errorsCopy.lastName = 'Last name is required';
      valid = false;
    }

    // Check if 'email' is not empty
    if (email.trim()) {
      errorsCopy.email = '';
    } else {
      errorsCopy.email = 'Please provide email';
      valid = false;
    }

    // Update the 'errors' state with the new error messages
    setErrors(errorsCopy);

    // Return whether the form is valid or not
    return valid;
  }

  // Function to determine the page title based on the existence of 'id'
  function pageTitle() {
    if (id) {
      return <h2 className='text-center'>Update Your Details</h2>;
    } else {
      return <h2 className='text-center'>Register Your Details</h2>;
    }
  }

  // Render the component with a form to capture student details
  return (
    <div className='container'>
      <br />
      <br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          {pageTitle()}
          <div className='card-body'>
            <form>
              {/* Input field for first name */}
              <div className='form-group mb-2'>
                <label className='form-label'>First Name</label>
                <input
                  type='text'
                  placeholder='Enter Student First Name'
                  name='firstName'
                  value={firstName}
                  className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                  onChange={handleFirstName}
                />
                {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
              </div>

              {/* Input field for last name */}
              <div className='form-group mb-2'>
                <label className='form-label'>Last Name</label>
                <input
                  type='text'
                  placeholder='Enter Student Last Name'
                  name='lastName'
                  value={lastName}
                  className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                  onChange={handleLastName}
                />
                {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
              </div>

              {/* Input field for email */}
              <div className='form-group mb-2'>
                <label className='form-label'>Email</label>
                <input
                  type='text'
                  placeholder='Enter Email'
                  name='email'
                  value={email}
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  onChange={handleEmail}
                />
                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
              </div>

              {/* Button to submit the form */}
              <button className='btn btn-success' onClick={saveOrUpdateStudent}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the StudentComponent as the default export
export default StudentComponent;
