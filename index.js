
let currentTemp = document.querySelector('#currentTemp');
let country = document.querySelector('.country');
let button = document.querySelector('button')

// Getting Weather From openWeather API
let getWeather = async (lat, lon) => {
    let weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d173a91e4f295a6018ac5d77d473c44b`);
    let response = weather.json()
    return response
}

// Button to Invoke getWeather Function
button.addEventListener('click', () => {
    let lat = document.querySelector('#latInput').value;
    let lon = document.querySelector('#lonInput').value;
    getWeather(lat, lon)
        .then(data => {
            currentTemp.textContent = (data.main.temp - 273.15).toFixed(2) + '°C'
            country.textContent = data.sys.country
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
})


