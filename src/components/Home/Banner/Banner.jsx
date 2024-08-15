import Hotel from '../../../assets/Image/Banners/Hotel.jpg';
 

function Banner() {
  return (
    <div className="relative h-screen w-full">
      {/* Background image with blur */}
      <img
        src={Hotel}
        alt="Hotel"
        className="absolute inset-0 object-cover w-full h-full filter"
      />
      {/* Overlay text */}
      <div className="relative flex flex-col items-center justify-center h-full px-4">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold text-center bg-black bg-opacity-50 rounded-lg px-4 py-2">
          FIND YOUR HOME WITH DREAMDWELL
        </h1>

        <p className="text-white font-serif text-sm sm:text-base md:text-lg lg:text-xl mt-4 max-w-lg text-center">
          Discover the perfect place to call home with dreamDwell Real Estate
        </p>
         
      </div>
    </div>
  );
}

export default Banner;
