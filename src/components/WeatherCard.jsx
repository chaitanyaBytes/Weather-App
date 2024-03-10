import cityAtom from "../store/atoms/city";
import weatherAtom from "../store/atoms/weather";
import { useRecoilValue } from "recoil";
import { Card, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export function WeatherCard() {
    const weather = useRecoilValue(weatherAtom);
    const city = useRecoilValue(cityAtom);

    return (
        <div style={{ display: "flex", justifyContent: "center", justifyItems: "center" }}>
            <Card variant="outlined" style={{
                margin: 40,
                width: 450,
                minHeight: 250,
                borderRadius: 20,
                marginRight: 30,
                padding: 15,
                background: "linear-gradient(rgba(100, 40, 100, 0.6), rgba(60, 80, 100, 0.9))"
            }}>
                <div style={{ display: "flex" }}>
                    <LocationOnIcon />
                    <Typography variant="h5">{city}</Typography>
                </div>
                <div style={{ textAlign: "center" }}>
                    <Typography variant="h2" style={{ margin: 10 }}>{weather.main.temp}</Typography>
                    <Typography variant="h5" style={{ margin: 10 }}>{weather.weather[0].description} {weather.main.temp_min} / {weather.main.temp_max}</Typography>
                    <Typography variant="h5" style={{ margin: 10 }}>Humidity: {weather.main.humidity}, Pressure: {weather.main.pressure}</Typography>
                </div>
            </Card>
        </div>
    )
}