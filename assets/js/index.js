const weatherData = {
    Tbilisi: {
        city: "Tbilisi",
        date: "2024-09-25",
        temperature: {
            current: 24,
            high: 26,
            low: 18,
            feelsLike: {
                morning: 20,
                afternoon: 25,
                evening: 22,
                night: 19
            }
        },
        humidity: 60,
        wind: {
            speed: 10,
            direction: "NW",
            gusts: {
                morning: 12,
                afternoon: 15,
                evening: 8,
                night: 5
            }
        },
        conditions: "Clear",
        forecast: {
            morning: {
                temperature: 20,
                conditions: "Sunny",
                windSpeed: 12,
                humidity: 65
            },
            afternoon: {
                temperature: 24,
                conditions: "Clear",
                windSpeed: 10,
                humidity: 50
            },
            evening: {
                temperature: 22,
                conditions: "Partly Cloudy",
                windSpeed: 8,
                humidity: 55
            },
            night: {
                temperature: 19,
                conditions: "Clear",
                windSpeed: 5,
                humidity: 70
            }
        },
        airQuality: {
            index: 42,
            status: "Good",
            pollutants: {
                PM2_5: 12,
                PM10: 20,
                O3: 10,
                NO2: 8
            }
        }
    },
    Batumi: {
        city: "Batumi",
        date: "2024-09-25",
        temperature: {
            current: 22,
            high: 25,
            low: 19,
            feelsLike: {
                morning: 21,
                afternoon: 23,
                evening: 20,
                night: 18
            }
        },
        humidity: 70,
        wind: {
            speed: 8,
            direction: "SW",
            gusts: {
                morning: 9,
                afternoon: 11,
                evening: 6,
                night: 4
            }
        },
        conditions: "Partly Cloudy",
        forecast: {
            morning: {
                temperature: 21,
                conditions: "Cloudy",
                windSpeed: 9,
                humidity: 75
            },
            afternoon: {
                temperature: 22,
                conditions: "Partly Cloudy",
                windSpeed: 8,
                humidity: 65
            },
            evening: {
                temperature: 20,
                conditions: "Clear",
                windSpeed: 6,
                humidity: 70
            },
            night: {
                temperature: 18,
                conditions: "Clear",
                windSpeed: 4,
                humidity: 80
            }
        },
        airQuality: {
            index: 55,
            status: "Moderate",
            pollutants: {
                PM2_5: 15,
                PM10: 25,
                O3: 12,
                NO2: 10
            }
        }
    }
};

console.log(weatherData);

// const cities = Object.keys(weatherData);

// for (let i = 0; i < cities.length; i++) {
//     const city = cities[i];
//     console.log("City: " + weatherData[city].city);

//     const cityData = Object.keys(weatherData[city]);
//     for (let j = 0; j < cityData.length; j++) {
//         const property = cityData[j];

//         if (property === "temperature") {
//             console.log("Temperature >> Current: " + weatherData[city].temperature.current);
//             console.log("Temperature >> High: " + weatherData[city].temperature.high);
//             console.log("Temperature >> Low: " + weatherData[city].temperature.low);
//         } else if (property === "wind") {
//             console.log("Wind >> Speed: " + weatherData[city].wind.speed);
//             console.log("Wind >> Direction: " + weatherData[city].wind.direction);
//         } else if (property === "forecast") {
//             console.log("Forecast >> Morning Temp: " + weatherData[city].forecast.morning.temperature);
//             console.log("Forecast >> Afternoon Temp: " + weatherData[city].forecast.afternoon.temperature);
//             console.log("Forecast >> Evening Temp: " + weatherData[city].forecast.evening.temperature);
//             console.log("Forecast >> Night Temp: " + weatherData[city].forecast.night.temperature);
//         } else if (property === "airQuality") {
//             console.log("Air Quality >> Index: " + weatherData[city].airQuality.index);
//             console.log("Air Quality >> Status: " + weatherData[city].airQuality.status);
//         } else {
//             console.log(property + ": " + weatherData[city][property]);
//         }
//     }
// }

weatherData.Tbilisi.temperature.current = 27;
console.log(weatherData.Tbilisi.temperature.current);


weatherData.Tbilisi.pollutionLevel = "Moderate";
weatherData.Batumi.pollutionLevel = "High";


const cities = Object.keys(weatherData);

for (let i = 0; i < cities.length; i++) {
    const city = cities[i];
    console.log("City: " + weatherData[city].city); 

    const cityData = Object.keys(weatherData[city]);
    for (let j = 0; j < cityData.length; j++) {
        const property = cityData[j];

        
        if (property === "temperature") {
            console.log("Temperature >> Current: " + weatherData[city].temperature.current);
            console.log("Temperature >> High: " + weatherData[city].temperature.high);
            console.log("Temperature >> Low: " + weatherData[city].temperature.low);
        } else if (property === "wind") {
            console.log("Wind >> Speed: " + weatherData[city].wind.speed);
            console.log("Wind >> Direction: " + weatherData[city].wind.direction);
        } else if (property === "forecast") {
            console.log("Forecast >> Morning Temp: " + weatherData[city].forecast.morning.temperature);
            console.log("Forecast >> Afternoon Temp: " + weatherData[city].forecast.afternoon.temperature);
            console.log("Forecast >> Evening Temp: " + weatherData[city].forecast.evening.temperature);
            console.log("Forecast >> Night Temp: " + weatherData[city].forecast.night.temperature);
        } else if (property === "airQuality") {
            console.log("Air Quality >> Index: " + weatherData[city].airQuality.index);
            console.log("Air Quality >> Status: " + weatherData[city].airQuality.status);
        } else {
            console.log(property + ": " + weatherData[city][property]);
        }
    }
}


console.log(weatherData.Batumi.temperature.high);
console.log(weatherData.Tbilisi.forecast.evening.conditions);
