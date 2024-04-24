import "./CardImage.css";
import PlaceholderImg from "../../assets/placeholder.avif";
import Rating from "../Rating/Rating";

type RatingProps = {
  starRating: number;
};

function CardImage({ starRating }: RatingProps) {
  return (
    <div className="card-img">
      <img
        alt="Restaurant Card"
        src={PlaceholderImg}
        loading="lazy"
        className="img"
      />

      {starRating > 0 ? <Rating starRating={starRating} /> : <></>}
    </div>
  );
}

export default CardImage;
