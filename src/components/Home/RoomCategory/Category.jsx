import { useNavigate } from "react-router-dom";


function Category({ category }) {
  
  const navigate = useNavigate()

  return (
    <>
      <div className='my-10 mx-4 sm:mx-6 md:mx-10 lg:mx-14'>
        <div className='grid cursor-pointer  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
          {
            category?.data?.map((data) => (
              <div key={data.id} onClick={()=>navigate(`/property/${data.id}`)}
                className='flex justify-center items-center'>
              <img
                src={import.meta.env.VITE_STRAPI_LOCALHOST + data.attributes.img.data.attributes.url}
                alt='Room Pic'
                className='w-full h-auto object-cover rounded-lg transition hover:scale-110 delay-150 ease-in-out duration-300 hover:-translate-y-1'
              />
            </div>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Category;
