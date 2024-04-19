import "./Rating.css";

function Rating() {
    return (
        <div className="rating">
            <div className="rating-inner">
                <div className="rating-i-1">
                    <div className="rating-i-2">
                        <div className="rating-val">3.9</div>
                        <div className="rating-star">
                            <i className="rating-star-i" color="#FFFFFF">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#FFFFFF"
                                    width="0.8rem"
                                    height="0.8rem"
                                    viewBox="0 0 20 20"
                                    aria-labelledby="icon-svg-title- icon-svg-desc-"
                                    role="img"
                                    className="rating-svg"
                                >
                                    <title>star-fill</title>
                                    <path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"></path>
                                </svg>
                            </i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rating;
