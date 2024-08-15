import Properties from "../Propertie/properties"
import useFetch from "../../CustomHook/CustomApiCall"

function RelatedProperty({ propertyId, categoryId }) {
  
  const { data } = useFetch(`/api/properties?populate=*&filters[id][$ne]=${propertyId}&filters
    [categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`)

  return (
      <div className="mt-16">
        
      <Properties property={data} />
    </div>
  )
}

export default RelatedProperty