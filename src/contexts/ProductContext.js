import { createContext, useContext, useState } from "react";
import {data} from "../data";
import { CartContext } from "./CartContext";


const ProductContextProvider = ({children})=>{
    const [products, setProducts] = useState(data);
    const {addItem} = useContext(CartContext);

    return(
        <ProductsContext.Provider value={{addItem, products}}>
            {children}
        </ProductsContext.Provider>
    
    )
};


export const ProductsContext = createContext();
export default ProductContextProvider;