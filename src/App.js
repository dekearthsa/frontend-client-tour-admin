import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './view/HomePage';
import ShopPage from './view/ShopPage';
// import NavBar from './component/Navbar/NavBar';
import ContactPage from './view/ContactPage';
// import ComponentBottonBar from './component/ComponentHome/ComponentBottonBar';
import ProductDetail from './view/ProductDetail';
import AboutPage from './view/AboutPage';
import ComponentAdminAddingProductDetail from './component/ComponentAdmin/ComponentAdminAddingProductDetail';


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        {/* <NavBar/> */}
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/shop" element={<ShopPage/>}/>
          <Route path="/contact" element={<AboutPage/>}/>
          {/* <Route path="/about" element={<ContactPage/>}></Route> */}
          <Route path="/about" element={<ComponentAdminAddingProductDetail/>}></Route>
          <Route path="/product/:name" element={<ProductDetail/>}/>
        </Routes>
        {/* <ComponentBottonBar/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
