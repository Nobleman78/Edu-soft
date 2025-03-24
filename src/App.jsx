import { Route, Routes } from 'react-router-dom'
import './App.css'

import CourseList from './Pages/Student/CourseList'
import Coursedetails from './Pages/Student/Coursedetails'
import Myenrollement from './Pages/Student/Myenrollement'
import Player from './Pages/Student/Player'
import Loading from './components/Student/Loading'
import Educator from './Pages/Teacher/Educator'
import Dashboard from './Pages/Teacher/Dashboard'
import Addcourse from './Pages/Teacher/Addcourse'
import Mycourses from './Pages/Teacher/Mycourses'
import Studentenroll from './Pages/Teacher/Studentenroll'
import Home from './Pages/Student/Home'
import Navbar from './components/Student/Navbar'
import Contact from './Utility/Contact'
import About from './Utility/About'
import Login from './Utility/Login'
import Registration from './Utility/Registration'
import Footer from './components/Student/Footer'

function App() {

  return (
    <div className='px-10 py-5'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/course-list' element={<CourseList />}></Route>
        <Route path='/course-list/:input' element={<CourseList/>}t></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/registration' element={<Registration/>}></Route>
        <Route path='/course/:id' element={<Coursedetails />}></Route>
        <Route path='/my-enrollments' element={<Myenrollement />}></Route>
        <Route path='/player/:courseId' element={<Player />}></Route>
        <Route path='/loading/:path' element={<Loading />}></Route>
        <Route path='/educator' element={<Educator />}>
          <Route path='educator' element={<Dashboard />}></Route>
          <Route path='add-course' element={<Addcourse />}></Route>
          <Route path='my-courses' element={<Mycourses />}></Route>
          <Route path='student-enrolled' element={<Studentenroll />}></Route>
        </Route>
      </Routes>
      <Footer/>

    </div>
  )
}

export default App
