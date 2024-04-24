import useFetchRestaurantData from "../../api/fetchrestaurantdata";
import CardImage from "../CardImage/CardImage";
import "./RestaurantCard.css";
import { Row, Col, Card } from "react-bootstrap";
import loc from "bootstrap-icons/icons/geo-alt-fill.svg";
import LoadingSpinner from "../LoadingSpinner";
import ErrorDisplay from "../ErrorDisplay";

function RestaurantCard() {
  const { isPending, error, firstTenRestaurants } =
    useFetchRestaurantData("M160RA");

  if (isPending) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorDisplay message={`Error: ${error.message}`} />;
  }

  return (
    <Row>
      {firstTenRestaurants?.map((restaurant, index) => (
        <Col
          key={`${restaurant.name}-${index}`}
          xs={12}
          sm={6}
          md={6}
          lg={4}
          className="d-flex p-1"
        >
          <Card className="flex-fill w-100 restaurant-card">
            <CardImage starRating={restaurant.rating} />
            <Card.Body>
              <Card.Title>{restaurant.name}</Card.Title>
              <Card.Text className="cuisine">
                {restaurant.cuisines.join(", ")}
              </Card.Text>
              <Card.Text className="address">
                <img src={loc} alt="location" width="15" height="15" />
                {restaurant.address}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default RestaurantCard;
