import "./Rating.css";

type RatingProps = {
  starRating: number; 
};

function Rating({ starRating }: RatingProps) {
  const getRatingClass = (rating: number) => {
    if (rating >= 4) return "rating-high";
    if (rating >= 3) return "rating-medium";
    return "rating-low";
  };
  
  const formattedRating = starRating.toFixed(1);
  
  return (
    <div className="rating">
      <div className="rating-inner">
        <div className={`rating-i-1 ${getRatingClass(starRating)}`}>
          <div className="rating-i-2">
            <div className="rating-val">{formattedRating}</div>
            <i className="bi bi-star-fill"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rating;
