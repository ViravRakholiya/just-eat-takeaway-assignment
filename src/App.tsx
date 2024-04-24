import RestaurantCard from "./components/Card/RestaurantCard";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <Container  className="p-3">
      <RestaurantCard />
    </Container>
  );
}

export default App;
