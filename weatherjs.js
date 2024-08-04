const apiKey = '0a68893eecbca3102e0a2b4de289f8a9'; // Your OpenWeatherMap API key

function getWeather() {
    const city = 'Hyderabad,Telangana,India';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weather = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
                document.getElementById('weather').innerHTML = weather;
            } else {
                document.getElementById('weather').innerHTML = '<p>City not found. Please try again.</p>';
            }
        })
        .catch(error => {
            document.getElementById('weather').innerHTML = '<p>Something went wrong. Please try again.</p>';
            console.error('Error fetching weather data:', error);
        });
}
