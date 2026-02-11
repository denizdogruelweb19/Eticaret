import { useState } from 'react'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import { Navbar } from 'reactstrap'



function App() {

  return (
    <>
    <Router>
      <Routes>
         <Route path={`/ProductList`} element={<Navbar></Navbar>}></Route>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
