import axios from "axios";
 

const params = {
  headers: {
    Authorization: "bearer" + import.meta.env.VITE_STRAPI_API_KEY,
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(
      import.meta.env.VITE_STRAPI_LOCALHOST + url,
      params
    );
    return data;
  } catch (error) {
    console.log("API error :: ", error);
  }
};

export const paymentMethod = axios.create({
  baseURL: import.meta.env.VITE_STRAPI_LOCALHOST,
  headers: {
    Authorization: "bearer" + import.meta.env.VITE_STRAPI_API_KEY,
  },
})
