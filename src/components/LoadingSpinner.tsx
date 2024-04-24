import { Spinner } from "react-bootstrap";

function LoadingSpinner() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "200px" }}
    >
      <Spinner animation="border" variant="primary" />
    </div>
  );
}

export default LoadingSpinner;
