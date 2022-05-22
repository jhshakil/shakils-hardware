import './App.css';
import Navbar from './page/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home/Home'
import { ToastContainer } from 'react-toastify';
import Login from './page/LoginSystem/Login';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        {/* <Route path='/myOrder' element={<Home></Home>}></Route>
        <Route path='/review' element={<Home></Home>}></Route>
        <Route path='/dashboard' element={<Home></Home>}></Route> */}
        <Route path='/login' element={<Login></Login>}></Route>
        {/* <Route path='/logout' element={<Home></Home>}></Route> */}
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
