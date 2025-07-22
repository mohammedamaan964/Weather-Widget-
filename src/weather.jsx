import { useState } from "react";
import InfoBox from "./Info";
import SearchBox from "./SearchBox";
import "./weather.css";

export default function Weather() {

    const [connect, setConnect] = useState({
        city: "Banglore",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    })

    let updateInfo = (newInfo) => {
        setConnect(newInfo);
    }

    return (
        <div className="Weather">
            <h3>Weather App by Delta </h3>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={connect} />
        </div>
    );
}