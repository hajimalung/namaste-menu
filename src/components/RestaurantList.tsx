import "./RestaurantList.css";
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import type { Restaurant, RestaurantInListResponse } from "../types/RestaurantType";

const RestaurantList = () => {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(()=>{
        fetch("https://namastedev.com/api/v1/listRestaurants")
        .then((response) => response.json())
        .then((data) => {
            const restaurantList = data.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.map((rest:RestaurantInListResponse) => rest.info);
            setRestaurants(restaurantList);
        })
        .catch((error) => console.error(error));
    },[]);
    return (
    <div className="restaurantlist-container">
        {restaurants.length > 0 && restaurants.map((restaurant:Restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
    </div>
    );
};
export default RestaurantList;