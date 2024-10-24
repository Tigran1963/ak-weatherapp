async function getWeather() {
	const city = document.querySelector('.weatherapp__input').value;
	const result = document.querySelector('.weatherapp__result');
	const apiKey = 'dcce07e1ab223aab00413fc978ade780';
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
	console.log(url);
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error('City not found');
		}
		const data = await response.json();
		result.innerHTML = `
			  <h2>${data.name}, ${data.sys.country}</h2>
			  <p>Temperature: ${data.main.temp} °C</p>
			  <p>Weather: ${data.weather[0].description}</p>
			  <p>Humidity: ${data.main.humidity}%</p>
			  <p>Wind Speed: ${data.wind.speed} m/s</p>
		 `;
	} catch (error) {
		result.innerHTML = `<p style="color: red;">${error.message}</p>`;
	}
}
