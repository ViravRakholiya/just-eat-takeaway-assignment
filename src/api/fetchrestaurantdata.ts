import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Cuisine = {
  name: string;
};

type Address = {
  city: string;
  firstLine: string;
  postalCode: string;
};

type Rating = {
  starRating: number;
};

type Restaurant = {
  name: string;
  cuisines: Cuisine[];
  rating: Rating;
  address: Address;
};

type APIResponse = {
  restaurants: Restaurant[];
};

function fetchRestaurantData(postcode: string) {
  const proxyUrl = "https://cors-anywhere.herokuapp.com";
  const apiUrl = `${proxyUrl}/https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/${postcode}`;

  return axios.get(apiUrl).then<APIResponse>((response) => response.data);
}

function useFetchRestaurantData(postcode: string) {
  const { isPending, error, data } = useQuery({
    queryKey: ["restaurantData"],
    queryFn: () => fetchRestaurantData(postcode),
  });

  const firstTenRestaurants = data?.restaurants
    .slice(0, 10)
    .map((restaurant) => ({
      name: restaurant.name,
      cuisines: restaurant.cuisines.map((cuisine) => cuisine.name),
      rating: restaurant.rating.starRating,
      address: `${restaurant.address.firstLine},${restaurant.address.city},${restaurant.address.postalCode}`,
    }));

  return {
    isPending,
    error,
    firstTenRestaurants,
  };
}

export default useFetchRestaurantData;
