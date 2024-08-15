import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Propertie({ id, data }) {
  const navigate = useNavigate();

  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-white border border-gray-200 rounded-md my-5 shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to="#">
        <img
          className="rounded-t-md w-full h-48 object-cover"
          src={
            import.meta.env.VITE_STRAPI_LOCALHOST +
            data?.image?.data[0]?.attributes?.url
          }
          alt="properties"
        />
      </Link>
      <div className="p-4 md:p-5">
        <h5 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
          {data?.title}
        </h5>
        <p className="text-sm sm:text-base mb-3 font-normal text-gray-700 dark:text-gray-400">
          {data?.description}
        </p>
        <span className="block text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">
          ${data?.price}
        </span>
        <button
          onClick={() => navigate("/singleProperty/" + id)}
          to="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Propertie;
