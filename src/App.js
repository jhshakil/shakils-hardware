import './App.css';
import Navbar from './page/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home/Home'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
