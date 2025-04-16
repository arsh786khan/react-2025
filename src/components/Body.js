import ProductCard from "./ProductCard";
import { useState } from "react";
import resList from "../utils/mockData.js";


const Body = () => {
   let [restoList, setRestoList] = useState(resList);

   return (
       <div className="body">
          <div className="filter">
             <button className="filter-btn" onClick={() => {
                  const filteredrestoList = restoList.filter((res) => res.card.card.info.avgRating > 4.5);
                  setRestoList(filteredrestoList);
               }}
             >Top Rated restaurants</button>
          </div>
          <div className="res-container">
             {
               restoList.map((restaurant) => <ProductCard key={restaurant.card.card.info.id} data={restaurant}/>)
             }
          </div>
       </div>
    )
 };

 export default Body;