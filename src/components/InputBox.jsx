import { API_Key } from "../API-key";
import axios from "axios";
import cityAtom from "../store/atoms/city";
import weatherAtom from "../store/atoms/weather";
import { useSetRecoilState, useRecoilState } from "recoil";
import { TextField, Button } from '@mui/material';

export function InputBox() {
    const [city, setCity] = useRecoilState(cityAtom)
    const setWeather = useSetRecoilState(weatherAtom);

    const fetchWeather = async () => {
        try {
            let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`);
            console.log(response.data);
            setWeather(response.data);
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", justifyItems: "center" }}>
            <TextField id="outlined-basic"
                label="Enter your City"
                variant="outlined"
                focused
                style={{ marginRight: 20, color: "white" }}
                onChange={(e) => setCity(e.target.value)} />
            <Button variant="contained" size={"large"} style={{backgroundColor:"black"}}
                onClick={() => {fetchWeather()}}>Get Weather</Button>
        </div>
    )
}