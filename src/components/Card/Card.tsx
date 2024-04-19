import CardImage from "../CardImage/CardImage";
import CardInfo from "../CardInfo/CardInfo";
import "./Card.css";

function Card() {
    return (
        <div className="card">
            <CardImage />
            <CardInfo />
        </div>
    );
}

export default Card;
