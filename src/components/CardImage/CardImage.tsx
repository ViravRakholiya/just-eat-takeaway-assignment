import "./CardImage.css";
import PlaceholderImg from "../../assets/placeholder.avif"

function CardImage() {
    return (
        <div className="card-img">
            <img
                alt="Restaurant Card"
                src={PlaceholderImg}
                loading="lazy"
                className="img"
            />
        </div>
    );
}

export default CardImage;
