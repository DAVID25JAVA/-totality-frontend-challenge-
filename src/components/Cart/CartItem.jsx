import { appContext } from "../../Utils/Context/Context";
import { useContext } from "react";

function CartItem() {
  const {
    handleRemoveCart,
    cartItem,
    handleCartProductQuantity,
    cartSubTotal,
  } = useContext(appContext);

  
  return (
    <div className=" px-1 bg-white h-full flex  flex-col justify-between">
      {cartItem?.map((item) => (
        <div key={item.id}>
          <div className="flex justify-center items-center">
            <div>
              <img
                src={
                  import.meta.env.VITE_STRAPI_LOCALHOST +
                  item?.attributes?.image.data?.[0].attributes.url
                }
                className="w-20"
                alt="Property"
              />
            </div>
            <div className="ml-3">
              <span className="font-serif font-semibold text-xs mb-2 ">
                {item?.attributes?.title}
              </span>
              <span
                onClick={() => handleRemoveCart(item)}
                className="mx-3 text-2xl cursor-pointer text-purple-500 font-bold"
              >
                x
              </span>
              <div className="flex items-center mb-2">
                <span
                  onClick={() => handleCartProductQuantity("dec", item)}
                  className="border px-2 text-lg cursor-pointer"
                >
                  -
                </span>
                <span className="border px-2 text-lg mx-2">
                  {item?.attributes?.quantity}
                </span>
                <span
                  onClick={() => handleCartProductQuantity("inc", item)}
                  className="border px-2 text-lg cursor-pointer"
                >
                  +
                </span>
              </div>
              <div className="flex items-center">
                <span className="px-1">{item?.attributes?.quantity}</span>
                <span className="px-1">x</span>
                <span className="px-1 text-purple-600 font-semibold">
                  ${item?.attributes.price * item?.attributes?.quantity}
                </span>
              </div>
            </div>
          </div>

          {/* Subtotal */}
        </div>
      ))}
      <div className="flex justify-between px-5 mb-7 items-center mt-auto bottom-10">
        <span className="text-xl font-semibold">SUBTOTAL</span>
        <span className="text-xl font-semibold">${cartSubTotal}</span>
      </div>
      <button className="border px-2 mb-20 py-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold font-sans">
        Checkout
      </button>
    </div>
  );
}

export default CartItem;
