import React, {useEffect, useState} from 'react'
import { listStudents } from '../services/StudentService'

const ListStudentComponent = () => {

   const [students, setStudents] = useState([])


   useEffect(() => {
    listStudents().then((response) => {
        setStudents(response.data);


    }).catch(error =>{
       console.error(error); 
    })




   }, [])

  
//   const dummyData = [
//     {
//         "id": 1,
//         "firstName": "React",
//         "lastName": "Awesome",
//         "email": "awesome@react.com"
//     }


//   ]
  



    return (
    <div className='container'>
        <h2 className='text-center'> Student Web Application Final Exam Registration List</h2>

        <p className='text-center'>Note: You will Describe your personal project  Your personal project demo
    Answer my questions
    Receive feedback

Please reserve a time slot for your project defence.</p>

        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Student id</th>
                    <th>Student First Name</th>
                    <th>Student Last Name</th>
                    <th>Student Email id</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map(student =>
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.email}</td>
                        </tr>)


                }


            </tbody>
        </table>




    </div>
  )
}

export default ListStudentComponent