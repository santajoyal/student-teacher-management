import logo from './logo.svg';
import './App.css';
import "./css/sb-admin-2.css";
import "./css/fontawesome-free/css/all.min.css";
import Portal from './Portal';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Teacher from './Teacher';
import Student from './Student';
import Createteacher from './Createteacher';
import Editteacher from './Editteacher';
import Viewteacher from './Viewteacher';
import Createstudent from './Createstudent';
import Viewstudent from './Viewstudent';
import Editstudent from './Editstudent';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Portal/>}>
    <Route path='teachers' element={<Teacher/>}></Route>
    <Route path='students' element={<Student/>}></Route>
    <Route path='create-teacher' element={<Createteacher/>}></Route>
    <Route path='edit-teacher/:id' element={<Editteacher/>}></Route>
    <Route path='view-teacher/:id' element={<Viewteacher/>}></Route>
    <Route path='create-student' element={<Createstudent/>}></Route>
    <Route path='view-student/:id' element={<Viewstudent/>}></Route>
    <Route path='edit-student/:id' element={<Editstudent/>}></Route>


    </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
