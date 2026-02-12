import { useState } from 'react'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import NavBar from './Components/Navbar'
import ProductList from './Components/ProductList'
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductAppProvider } from './Components/ContextApi';





function App() {

  return (
    <>
   
    <ProductAppProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path={"ProductList"} element={<ProductList />} />
        </Routes>
      </Router>
    </ProductAppProvider>


      
    
    </>
  )
}

export default App
