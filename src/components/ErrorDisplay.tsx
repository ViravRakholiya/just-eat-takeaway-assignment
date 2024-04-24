import { Alert } from "react-bootstrap";

type ErrorDisplayProps = {
  message: string;
};

function ErrorDisplay({ message }: ErrorDisplayProps) {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "200px" }}
    >
      <Alert variant="danger">{message}</Alert>
    </div>
  );
}
export default ErrorDisplay;
