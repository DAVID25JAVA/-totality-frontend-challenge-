import { LuShoppingCart } from "react-icons/lu";
import { IoHomeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useState } from "react";
import Search from "./Search/Search";
import { CiSearch } from "react-icons/ci";
import { useContext } from "react";
import { appContext } from "../../Utils/Context/Context";

function Header() {
  const [isShowCart, setIsShowCart] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  const { cartCount } = useContext(appContext);

  const handleToggleCart = () => {
    setIsShowCart(!isShowCart);
  };

  const handleSearch = () => {
    setIsSearch(!isSearch);
  };

  return (
    <>
      <header>
        <nav className="border-gray-200 px-4 lg:px-6 py-2.5 bg-black">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
              <button className="text-white h-6 sm:h-9" alt="Logo">
                <IoHomeSharp className="text-2xl" />
              </button>
            </Link>
            <div className="flex items-center  gap-10 lg:order-2">
              {/* search **************************** */}
              <button
                onClick={handleSearch}
                className="relative flex items-center text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                <CiSearch className="text-2xl text-white" />
              </button>
              {/* search */}

              <button
                onClick={handleToggleCart}
                className="relative flex items-center text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                <LuShoppingCart className="text-xl text-white" />
                {!!cartCount && (
                  <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
               
            </div>
          </div>
        </nav>
      </header>
      {isShowCart && <Cart onClose={handleToggleCart} />}
      {isSearch && <Search search={handleSearch} />}
    </>
  );
}

export default Header;
