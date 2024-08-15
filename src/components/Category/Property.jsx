import Properties from "../Propertie/properties";
import useFetch from "../../CustomHook/CustomApiCall";
import { useParams } from "react-router-dom";

function Property() {
  const { id } = useParams();

  const { data } = useFetch(
    `/api/properties?populate=*&[filters][categories][id]=${id}`
  );
  console.log(data);

  return (
    <div>
      <div>
        <div className="my-5">
          <Properties properties={data} />
        </div>
      </div>
    </div>
  );
}

export default Property;
