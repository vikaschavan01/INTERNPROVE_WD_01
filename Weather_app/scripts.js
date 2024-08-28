const apiKey = '55ffdb6e61044f0471f44cd0ab073646'; // Replace with your OpenWeatherMap API key

document.getElementById('search-btn').addEventListener('click', () => {
    const location = document.getElementById('location-input').value;
    if (location) {
        getWeatherData(location);
    } else {
        alert('Please enter a location!');
    }
});

function getWeatherData(location) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.style.display = 'none';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
    console.log("Fetching data from URL:", url); // Log the API URL for debugging

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("API Response Data:", data); // Log the response data for debugging
            if (data.cod === 200) {
                displayWeatherData(data);
            } else {
                alert(`Location not found: ${data.message}`);
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again later.');
        });
}

function displayWeatherData(data) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
    weatherInfo.style.display = 'block';
}
