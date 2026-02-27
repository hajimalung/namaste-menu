import { CardContent, CardHeader, CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import type { Restaurant } from "../types/RestaurantType";
const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
    return(
        <Card sx={{ maxWidth: 345 }} elevation={3}>
            <CardActionArea>
                <CardHeader
                    title={restaurant.name}
                    subheader={`⭐️ ${restaurant.avgRating} (${restaurant.totalRatingsString})`}
                />
                <CardMedia
                    component="img"
                    width="345"
                    image="/vite.svg"
                    alt="Paella dish"
                />
                <CardContent>                    
                    <div>{restaurant.cuisines.join(", ")}</div>
                    <div><b>{restaurant.costForTwo}</b></div>
                    <div>Delivers in : {restaurant.sla.deliveryTime} mins</div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
export default RestaurantCard;