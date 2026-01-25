

const apiKey = "8e799d72102d302f6c12330e600bde24";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function cheackWeather(city){
	const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

	const data = await response.json(); 
	console.log(data);


	 document.querySelector('.city').innerHTML = data.name;
	 document.querySelector('.temp').innerHTML = data.main.temp + '°C';
	 document.querySelector('.humidity').innerHTML = Math.round(data.main.humidity) + '%';
	 document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';

}

// console.log(cheackWeather());

const input = document.querySelector('.search input');
const btn = document.querySelector('.search button');

btn.addEventListener("click", ()=>{
	cheackWeather(input.value)
});

// btn.onclick()

 ``