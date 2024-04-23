import useFetchRestaurantData from "../../api/fetchrestaurantdata";
import CardImage from "../CardImage/CardImage";
import CardInfo from "../CardInfo/CardInfo";
import "./Card.css";

function Card() {
  const { isPending, error, firstTenRestaurants } =
    useFetchRestaurantData("M160RA");

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div className="row">
      {firstTenRestaurants?.map((restaurant, index) => (
        <div className="card col-3 " key={index}>
          <CardImage />
          <CardInfo
            name={restaurant.name}
            cuisines={restaurant.cuisines}
            rating={restaurant.rating}
            address={restaurant.address}
          />
        </div>
      ))}
    </div>
  );
}

export default Card;
