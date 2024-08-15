 import RelatedProperty from './RelatedProperty';
import { useParams } from 'react-router-dom';
import useFetch from '../../CustomHook/CustomApiCall'
import { useContext, useState } from 'react';
import { appContext } from '../../Utils/Context/Context';


function SingleProperty() {
  const [quantity, setQuantity] = useState(1)
  const { id } = useParams()
  const { data } = useFetch(`/api/properties?populate=*&[filters][id]=${id}`)
  const {handleAddToCart} = useContext(appContext)
  

  if (!data) return
  const property = data.data[0].attributes

  const increament = () => {
    setQuantity((prev) => prev + 1)
    
  }

  const decreament = () => {
    setQuantity((prev) => {
      if (prev === 1) return 1
      return prev - 1
    })
  }
  

  return (
    <div className="mx-4 sm:mx-6 md:mx-10 my-20">
      <div className="flex flex-col md:flex-row md:gap-10">
        <div className="max-w-full md:max-w-xl ">
          <img
            src={import.meta.env.VITE_STRAPI_LOCALHOST + property.image.data[0].attributes.url}
            className="w-full rounded shadow transition ease-in-out delay-100 cursor-pointer duration-300 hover:-translate-y-1 hover:scale-110"
            alt="Property"
          />
        </div>
        <div className="flex flex-col justify-start">
          <span className="text-lg sm:text-xl md:text-2xl font-serif font-semibold my-2">{property.title}</span>
          <p className="my-2 text-gray-500 text-sm max-w-sm sm:text-base md:text-lg">{property.description}</p>
          <p className="font-semibold text-lg sm:text-xl md:text-2xl">${property.price}</p>
          <div className="flex gap-2 my-4">
            <span className="border cursor-pointer px-3 py-1 text-base sm:text-lg md:text-xl" onClick={decreament}>-</span>
            <span className="border px-3 py-1 text-base sm:text-lg md:text-xl">{quantity}</span>
            <span className="border cursor-pointer px-3 py-1 text-base sm:text-lg md:text-xl" onClick={increament}>+</span>
          </div>
          <button onClick={() => {
            handleAddToCart(data.data[0], quantity),
              setQuantity(1)
          }}
            className="border px-4 py-2 font-serif bg-purple-600 hover:bg-purple-500 text-white ">
            Add To Cart
          </button>
        </div>
      </div>
      <RelatedProperty propertyId={id} categoryId={property.categories.data[0].id} />
    </div>
  );
}

export default SingleProperty;
