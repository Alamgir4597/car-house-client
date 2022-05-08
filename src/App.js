import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Home from './Homes/Home/Home';
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound/NotFound';
import AddProduct from './AddProduct/AddProduct';
import ProductsDetails from './ProductsDetails/ProductsDetails';
import AllProduct from './AllProduct/AllProduct';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import RequireAuth from './RequireAuth/RequireAuth';
import MyItem from './MyItem/MyItem';
import AddNewProduct from './AddNewProduct/AddNewProduct';
import Blogs from './Blogs/Blogs';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/addnewproduct' element={<RequireAuth>
          <AddNewProduct></AddNewProduct>
        </RequireAuth>}></Route>
        <Route path='/myitem' element={<RequireAuth>
          <MyItem></MyItem>
        </RequireAuth>}></Route>
        <Route path='/add/:id' element={
        <RequireAuth>
            <AddProduct></AddProduct>
        </RequireAuth>
        }></Route>
        <Route path='/product/:id' element={
          <RequireAuth>
            <ProductsDetails></ProductsDetails>
          </RequireAuth>
        }></Route>
        <Route path='/allproduct' element={
          <RequireAuth>
            <AllProduct />
          </RequireAuth>
        }/>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        {/* <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route> */}
        {/* <Route path='/about' element={<About></About>}></Route> */}
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
