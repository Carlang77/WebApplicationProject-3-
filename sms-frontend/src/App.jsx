import './App.css'
import HelloWorld from './HelloWorld'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListStudentComponent from './components/ListStudentComponent'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import StudentComponent from './components/StudentComponent'

function App() {


  return (
    <>

    <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* { http://localhost:3000/students} */}
          <Route path = '/' element = {<ListStudentComponent />}></Route>
          {/* // http://localhost:3000/students */}
          <Route path='/students' element = {<ListStudentComponent />}></Route>

          <Route path='/add-student' element ={<StudentComponent />}></Route>

          {/* // http://localhost:3000/edit-student/1 */}
          <Route path='/edit-student/:id' element = {<StudentComponent />}></Route>

        </Routes>
        
        <FooterComponent />
    </BrowserRouter>
      
    </>
  )
}

export default App
