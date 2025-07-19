const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-26.809270894364648&lon=27.83097240109585&appid=dc0d6fbfb912f677b246bdafdf7b582f&units=metric';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=-26.809270894364648&lon=27.83097240109585&appid=dc0d6fbfb912f677b246bdafdf7b582f&units=metric';

//Current weather
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); 
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;C`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', `Icon for ${desc}`);
  captionDesc.textContent = `${desc}`;
}

//Weather Forecast
const forecastSpans = [
  document.querySelector('#day1'),
  document.querySelector('#day2'),
  document.querySelector('#day3'),
];

async function fetchForecast() {
  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data)
      displayForecast(data);
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
      console.error(error);
    }
}

function displayForecast(data) {
  const dailyData = {};

  data.list.forEach(entry => {
    const date = new Date(entry.dt_txt);
    const day = date.toLocaleDateString('en-ZA', { weekday: 'long' });

    if (!dailyData[day]) {
      dailyData[day] = [];
    }

    dailyData[day].push(entry);
  });

  const days = Object.keys(dailyData).slice(1, 4);

  days.forEach((day, index) => {
    const entries = dailyData[day];
    const temps = entries.map(e => e.main.temp);
    const min = Math.min(...temps).toFixed(0);
    const max = Math.max(...temps).toFixed(0);
    const icon = entries[0].weather[0].icon;
    const desc = entries[0].weather[0].description;

    forecastSpans[index].innerHTML = `
      <strong>${day}:</strong> 
      <img src="https://openweathermap.org/img/wn/${icon}.png" alt="${desc}" width="40"> 
      ${min}°C / ${max}°C
    `;
  });
}

fetchForecast();