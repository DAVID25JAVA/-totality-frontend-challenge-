import { useEffect } from "react";
import { fetchDataFromApi } from "../../Utils/Api/Api";
import Properties from "../Propertie/properties";
import Banner from "./Banner/Banner";
import Category from "./RoomCategory/Category";
import { useContext } from "react";
import { appContext } from "../../Utils/Context/Context";


function Home() {
  const { categories, setCategories, properties, setProperties } = useContext(appContext)
  
const getCategory = async () => {
  const response = await fetchDataFromApi("/api/categories?populate=*")
  setCategories(response)
         
  };

  const getProperty = async () => {
      await fetchDataFromApi("/api/properties?populate=*")
        .then((res) => {
          // console.log(res);
          setProperties(res) 
        })
  };

  
  useEffect(() => {
    getCategory();
    getProperty()
  },[]);

  return (
    <>
      <div>
        <Banner />
        <Category category={categories} />
        <Properties properties={properties} />
      </div>
    </>
  );
}

export default Home;
