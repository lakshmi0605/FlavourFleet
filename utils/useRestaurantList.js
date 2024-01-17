import { useEffect, useState } from "react";
import { RESTAURANTS_URL, CORS_URL
} from "./constants";

const useRestaurantList = (resId) => {
  const [resList, setResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resData = await fetch(CORS_URL + RESTAURANTS_URL);
        const resJSONData = await resData.json();
        setResList(resJSONData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return resList;
};

export default useRestaurantList;