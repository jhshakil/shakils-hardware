import './App.css';
import Navbar from './page/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home/Home'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './page/LoginSystem/Login';
import SignUp from './page/LoginSystem/SignUp';
import PlaceOrder from './page/Order/PlaceOrder';
import RequireAuth from './page/LoginSystem/RequireAuth';
import MyOrder from './page/Order/MyOrder';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/myOrder' element={<RequireAuth><MyOrder></MyOrder></RequireAuth>}></Route>
        {/* <Route path='/review' element={<Home></Home>}></Route> */}
        {/* <Route path='/dashboard' element={<Home></Home>}></Route> */}
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/placeOrder/:id' element={<RequireAuth><PlaceOrder></PlaceOrder></RequireAuth>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
