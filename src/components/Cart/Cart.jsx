import { IoMdClose } from "react-icons/io";
import CartItem from "./CartItem";

function Cart({ onClose }) {


  

    return (
      <div className="fixed top-0 right-0 w-80 h-full bg-slate-50 transition-transform transform translate-x-0 ease-in-out duration-300 z-10">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white text-xl"
        >
          <IoMdClose className="text-black mt-2 text-2xl" />
        </button>
        <div className="p-4 border-b-2 border-b-purple-600">
          <h2 className="text-2xl text-black">Cart</h2>
        </div>
        <CartItem/>
      </div>
    );
  }
  
  export default Cart;
  