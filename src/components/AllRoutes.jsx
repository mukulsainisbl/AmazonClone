import { Routes,Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import AddtoCart from '../Pages/AddtoCart';
import ProductsView from '../Pages/ProductsView';
export const AllRoutes = () => {


  return (
    <Routes>
   
      <Route exact path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/cart" element={<AddtoCart/>} />
      <Route path='/products/view/:id' element={<ProductsView/>}/>
  
  </Routes>
  )
}
