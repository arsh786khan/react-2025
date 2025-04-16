import { CDN_URL } from "../utils/constants";

const ProductCard = (props) => {
    const { data } = props;
    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } = data.card.card.info
    return(
       <div className="product-card" style={{ backgroundColor: "lightblue" }}>
          <img src={
            CDN_URL + cloudinaryImageId} width="200" height="200"/>
          <h3>{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{costForTwo}</h4>
          <h4>Rating: {avgRating}</h4>
          <h4>{sla.slaString}</h4>
       </div>
    )
 };

 export default ProductCard;