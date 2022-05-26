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
import AllReview from './page/Review/AllReview';
import ManageOrders from './page/Dashboard/Admin/ManageOrders';
import AddProduct from './page/Dashboard/Admin/AddProduct';
import ManageProduct from './page/Dashboard/Admin/ManageProduct';
import EditOrder from './page/Order/EditOrder';
import NotFound from './page/Shared/NotFound';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='allReview' element={<AllReview></AllReview>}></Route>
        <Route path='dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myOrder' element={<MyOrder></MyOrder>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
          <Route path='manageOrder' element={<ManageOrders></ManageOrders>}></Route>
          <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='manageProduct' element={<ManageProduct></ManageProduct>}></Route>
        </Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='placeOrder/:id' element={<RequireAuth><PlaceOrder></PlaceOrder></RequireAuth>}></Route>
        <Route path='EditOrder/:id' element={<RequireAuth><EditOrder></EditOrder></RequireAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}>Not Found</Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
