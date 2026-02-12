import { ProductAppProvider, ProductContext } from "./ContextApi";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
  
function ProductList(){
    const navigate=useNavigate();
  const {ProductList,Price,kategori}=useContext(ProductContext)
 return(
    
<div className="container">
         <div className="row">
    {ProductList.map((product,index)=>{
        return<div className="col">
       <div className="card" key={index}>
        <img src="https://placehold.co/600x400" alt="ürün resmi"/>
            <h1 className="card-title">{product}</h1>
        </div>
        <div className="card-body">
            <p className="card-text">{kategori[index]}</p>
            <p className="card-text">{Price[index]}</p>
        </div>
    </div>
    })}
    </div>
    
    
</div>
    
)}


  export default ProductList 

