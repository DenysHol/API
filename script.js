document.addEventListener('DOMContentLoaded', () => {
    fetch('https://www.el-tiempo.net/api/json/v2/home')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const weatherDiv = document.getElementById('weather');
        const cities = data.ciudades;
  
        cities.forEach(city => {
          const cityDiv = document.createElement('div');
          cityDiv.classList.add('city');
  
          const name = document.createElement('h2');
          name.textContent = city.name;
  
          const temperature = document.createElement('p');
          temperature.textContent = `Temperatura: ${temperature.max} ºC`;
  
          const description = document.createElement('p');
          description.textContent = `Descripción: ${city.stateSky.description}`;
  
          cityDiv.appendChild(name);
          cityDiv.appendChild(temperature);
          cityDiv.appendChild(description);
  
          weatherDiv.appendChild(cityDiv);
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });
  