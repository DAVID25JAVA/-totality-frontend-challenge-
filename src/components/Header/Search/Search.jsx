import { IoMdClose } from "react-icons/io";
import {useNavigate} from 'react-router-dom'
import useFetch from "../../../CustomHook/CustomApiCall";
import { useState } from "react";

function Search({ search }) {
  const [searchdata, setSearchData] = useState("");
  const navigate = useNavigate()
  

  let { data } = useFetch(
    `/api/properties?populate=*&filters[title][$contains]=${searchdata}`
  );

  const handleSearch = (e) => {
    setSearchData(e.target.value);
  };

  if (!searchdata.length) {
    data = null;
  }

  return (
    <>
      <div className="w-full h-full z-10 top-0 left-0 fixed bg-white">
        <div className=" relative flex  mx-auto my-1 border-b-2 border-b-purple-500">
          <input
            type="text"
            onChange={handleSearch}
            value={searchdata}
            className="w-full text-center outline-none border placeholder:text-center placeholder:text-xl placeholder:font-serif"
            placeholder="Search"
          />
          <IoMdClose
            onClick={search}
            className="absolute cursor-pointer mt-1 text-3xl right-4 "
          />
        </div>

        {/* Search suggestion *************** */}
        {data?.data?.map((item) => (
          <div
            key={item.id}
            className="flex justify-center items-center mt-5"
          >
            <div className="cursor-pointer" onClick={() => {
              navigate(`/singleProperty/` + item.id),
              onClick={search}
            }}>
              <img
                src={
                  import.meta.env.VITE_STRAPI_LOCALHOST +
                  item?.attributes.image?.data[0].attributes.url
                }
                alt=""
                className="w-28 rounded"
              />
            </div>
            <div>
              <span className="px-3 text-xl font-serif">
                {item?.attributes?.title}
              </span>
                
            </div>
          </div>
        ))}
        {/* Search suggestion *************** */}
      </div>
    </>
  );
}

export default Search;
