import React, { useEffect, useState } from 'react';
import { listStudents } from '../services/StudentService';
import { useNavigate } from 'react-router-dom';

const ListStudentComponent = () => {
  const [students, setStudents] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    listStudents()
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Dummy data for reference
  // const dummyData = [
  //   {
  //     "id": 1,
  //     "firstName": "React",
  //     "lastName": "Awesome",
  //     "email": "awesome@react.com"
  //   }
  // ];

  function addNewStudent(){
    navigator('/add-student')

  }

  return (
    <div className='container'>
      <br></br>
      <br></br>
      

      <h2 className='text-center'>Student Web Application Final Exam Registration List</h2>
      <button className='btn btn-primary mb-2' onClick={addNewStudent}>Register Your Defense</button>

      <br></br>
      <br></br>

      <p className='text-left'>
        Welcome. This is a form for students who wish to register for their Web Application project on the <strong>18th of December, 2023</strong>. 
        <br></br>
        Please note the following:
        <br></br>
        <br></br>
        <ul>
          <li>You will <strong>describe your personal project.</strong></li>
          <li>You will <strong>DEMO</strong> your personal project.</li>
          <li>You wiill answer some questions.</li>
          <li>You will receive feedback.</li>
          
        </ul>
      </p>


      <br></br>
      <br></br>


      <strong>Please register below and reserve a time slot for your project defence.</strong>


      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student First Name</th>
            <th>Student Last Name</th>
            <th>Student Email ID</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListStudentComponent;
