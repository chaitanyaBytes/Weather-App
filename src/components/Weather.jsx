/* eslint-disable react-hooks/exhaustive-deps */
import weatherAtom from "../store/atoms/weather";
import { useRecoilValue } from "recoil";
import { WeatherCard } from "./WeatherCard";
import { InputBox } from "./InputBox";

function Weather() {
    const weather = useRecoilValue(weatherAtom);

    return (
        <div style={{ justifyContent: "center", justifyItems: "center", display: "flex", flexDirection: "column", margin: 200 }}>
            <InputBox />
            {weather && <WeatherCard />}
        </div>
    )
}

export default Weather;