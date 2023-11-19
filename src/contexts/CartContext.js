import { createContext} from "react";
import useLocalStorege from "../hooks/useLocalStrorage";

const CartContextProvider =({children})=>{
    const [cart, setCart] = useLocalStorege('shopping-cart', []);

    const addItem = (item) => {
        setCart([...cart, item]);
      };
    
    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    }
    return(
        <CartContext.Provider value={{cart, addItem, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}

export const CartContext = createContext();
export default CartContextProvider;