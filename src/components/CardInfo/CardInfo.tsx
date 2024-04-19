import Rating from "../Rating/Rating";
import "./CardInfo.css";

function CardInfo() {
    return (
        <div className="card-info">
            <div className="card-info-row">
                <h4 className="restaurant-name">Micro Cafe</h4>
                <Rating />
            </div>
            <div className="card-info-row">
                <p className="cuisine">
                    Burger,pizza,fsfsfs,sfs,fs,fs,f,s,fs,f,Burger,pizza,fsfsfs,sfs,fs,fs,f,s,fs,f,Burger,pizza,fsfsfs,sfs,fs,fs,f,s,fs,f
                </p>
            </div>
            <div className="card-info-row">
                <p className="address"> Bodakdev, Ahmedabad</p>
            </div>
        </div>
    );
}

export default CardInfo;
