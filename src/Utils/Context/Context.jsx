import { createContext, useEffect, useState } from "react";

export const appContext = createContext();

function Context({ children }) {
  const [categories, setCategories] = useState("");
  const [properties, setProperties] = useState("");
  const [cartItem, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState();
  const [cartSubTotal, setCartSubTotal] = useState();
    
    useEffect(() => {
        let count = 0;
        cartItem.map((countItem) => count += countItem.attributes.quantity)
        setCartCount(count)


        let subTotal = 0
        cartItem.map((item) => subTotal += item.attributes.price * item.attributes.quantity)
        setCartSubTotal(subTotal)
        console.log(subTotal);
        
    },[cartItem])

  const handleAddToCart = (product, quantity) => {
    let item = [...cartItem];
    let index = item.findIndex((p) => p.id == product.id);
    if (index !== -1) {
      item[index].attributes.quantity += quantity;
    } else {
      product.attributes.quantity = quantity;
      item = [...item, product];
    }
    setCartItem(item);
  };

  const handleRemoveCart = (productId) => {
    let item = [...cartItem];
    item = item.filter((p) => p.id !== productId.id);
    setCartItem(item);
  };

  const handleCartProductQuantity = (type, product) => {
    let item = [...cartItem];
    let index = item.findIndex((p) => p.id == product.id);
    if (type == "inc") {
      item[index].attributes.quantity += 1;
    } else if (type == "dec") {
      if (item[index].attributes.quantity == 1) return;
      item[index].attributes.quantity -= 1;
    }
    setCartItem(item);
  };

  return (
    <appContext.Provider
      value={{
        categories,
        setCategories,
        properties,
        setProperties,
        cartItem,
        setCartItem,
        cartCount,
        setCartCount,
        cartSubTotal,
        setCartSubTotal,
        handleAddToCart,
        handleRemoveCart,
        handleCartProductQuantity
      }}
    >
      {children}
    </appContext.Provider>
  );
}

export default Context;
