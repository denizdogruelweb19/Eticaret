import { createContext, useState } from "react";

const ProductContext = createContext();

const ProductAppProvider = ({ children }) => {

    const [ProductList, setProductList] = useState([
        "product 1",
        "product 2"
    ]);
     const [Price, setPrice] = useState([
        7000,
       10000
    ]);

    const [kategori, setKategori] = useState([
        "kategori 1",
        "kategori 2"
    ]);

    return (
        <ProductContext.Provider
            value={{ kategori, setKategori, ProductList, setProductList ,Price,setPrice}}
        >
            {children}
        </ProductContext.Provider>
    );
};

export { ProductContext, ProductAppProvider };