import React, { useEffect, useState } from 'react';
import { deleteStudent, listStudents } from '../services/StudentService';
import { useNavigate } from 'react-router-dom';

const ListStudentComponent = () => {
  const [students, setStudents] = useState([]);
  const navigator = useNavigate();

  // Function to navigate to the add student page
  function addNewStudent() {
    navigator('/add-student');
  }

  // Function to navigate to the edit student page with a specific ID
  function updateStudent(id) {
    navigator(`/edit-student/${id}`);
  }

  useEffect(() => {
    // Fetch the list of students when the component mounts
    listStudents()
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function removeStudent(id) {
    console.log(id);

    deleteStudent(id)
      .then((response) => {
        console.log('Student deleted successfully');
        // Update the state or provide feedback to the user
        listStudents().then((response) => {
          setStudents(response.data);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // Function to open the Moodle login page
  function loginToMoodle() {
    window.location.href = 'https://moodle.eek.ee/';
  }

  return (
    <div className='container'>
      <br />
      <br />

      <h2 className='text-center'>Student Web Application Final Exam Registration List</h2>

      <div className='d-flex justify-content-between mb-2'>
        <button className='btn btn-primary' onClick={addNewStudent}>
          Register Your Defense
        </button>
        <button className='btn btn-primary' onClick={loginToMoodle} >
          Login to Moodle
        </button>
      </div>

      <br />

      <p className='text-left'>
        Welcome. This is a form for students who wish to register for their Web Application project on the{' '}
        <strong>18th of December, 2023</strong>.
        <br />
        Please note the following:
        <br />
        <br />
        <ul>
          <li>You will <strong>describe your personal project.</strong></li>
          <li>You will <strong>DEMO</strong> your personal project.</li>
          <li>You will answer some questions.</li>
          <li>You will receive feedback.</li>
        </ul>
      </p>

      <br />
      <br />

      <strong>Please reserve a time slot for your project defense. Click on the register button above.</strong>

      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student First Name</th>
            <th>Student Last Name</th>
            <th>Student Email ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>
                <button className='btn btn-info' onClick={() => updateStudent(student.id)}>
                  Update
                </button>
                <button className='btn btn-danger' onClick={() => removeStudent(student.id)} style={{ marginLeft: '10px' }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListStudentComponent;
