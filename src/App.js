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
import MyOrder from './page/Dashboard/MyOrder';
import Dashboard from './page/Dashboard/Dashboard';
import MyProfile from './page/Dashboard/MyProfile';
import AddReview from './page/Dashboard/AddReview';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>

        {/* <Route path='/review' element={<Home></Home>}></Route> */}
        <Route path='dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myOrder' element={<MyOrder></MyOrder>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
        </Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='placeOrder/:id' element={<RequireAuth><PlaceOrder></PlaceOrder></RequireAuth>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
