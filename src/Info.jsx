import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({ info }) {
    const INIT_URL =
        "https://media.istockphoto.com/id/2202245472/photo/manali-himachal-pradesh-view-stock-photo.jpg?s=612x612&w=0&k=20&c=Yq4Uz2eAA32Qk18kiYY6qm_U-cQj12EGMA-WaTEWTn0=";

    const HOT_URL =
        "https://media.istockphoto.com/id/2163514261/photo/boy-drinking-water-from-a-bottle-on-a-sunny-hot-day.jpg?s=2048x2048&w=is&k=20&c=cn5lJgGTT1jTIy4Z38EAfxoJevgnZ0IJ-NsFEAscYnE=";

    const COLD_URL =
        "https://images.unsplash.com/photo-1516384315388-90f7b1d0302c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZCUyMCUyMHNlYXNvbnxlbnwwfHwwfHx8MA%3D%3D";

    const RAINY_URL =
        "https://plus.unsplash.com/premium_photo-1667516468789-81a6ba214724?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAINY_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Temperature : {info.temp}&deg;C <br />
                            Humidity : {info.humidity} <br />
                            Min Temp : {info.tempMin}&deg;C <br />
                            Max Temp : {info.tempMax}&deg;C  <br />
                            The weather can be described as  <i>{info.weather}</i> and feels like : {info.feelsLike}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};