import Rating from "../Rating/Rating";
import "./CardInfo.css";

type RestaurantProps = {
    name: string;
    cuisines: string[];
    rating: number;
    address: string;
  };

function CardInfo({ name, cuisines, rating, address }: RestaurantProps) {
  return (
    <div className="card-info">
      <div className="card-info-row">
        <h4 className="restaurant-name">{name}</h4>
        <Rating starRating={rating} />
      </div>
      <div className="card-info-row">
        <p className="cuisine">{cuisines.join(', ')}</p>
      </div>
      <div className="card-info-row">
        <p className="address">{address}</p>
      </div>
    </div>
  );
}

export default CardInfo;
