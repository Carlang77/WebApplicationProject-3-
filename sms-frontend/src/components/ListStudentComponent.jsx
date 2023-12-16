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
      

      <h2 className='text-center'>Student Web Application Final Exam Registration List</h2>
      <button className='btn btn-primary mb-2' onClick={addNewStudent}>Register Your Defense</button>

      <p className='text-center'>
        <ul>
          <li>Note: You will Describe your personal project.</li>
          <li>You will demo your personal project.</li>
          <li>Answer my questions.</li>
          <li>Receive feedback.</li>
          <li><strong>Please register below and reserve a time slot for your project defence.</strong></li>
        </ul>
      </p>

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
