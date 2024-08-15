import Propertie from "./Propertie";

function Properties({properties}) {
  return (
    <div className="md:mx-10 mx-4">
      <span className=" text-3xl font-semibold font-serif border-b-4 border-pink-600">Popular <span className="text-orange-500">Properties</span></span>
      <div className="container mx-auto flex justify-center items-center">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {
            properties?.data?.map((property) => (
              <Propertie key={property.id}
                id={property.id}
                data={property.attributes} />
            ))
          }
          
        </div>
      </div>
    </div>
  );
}

export default Properties;
