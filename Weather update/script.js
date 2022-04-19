const numb = document.getElementById ('number'),
v_weather = document.getElementById ('view-weather') ,
cityName = document.getElementById('Cname'),
feel_like= document.getElementById('feels'),
hum= document.getElementById('Humdity'),
myValue= document.getElementById('value'),
btn = document.getElementById('btn');


function putWeather(){
     const myValue= document.getElementById('value').value;
      document.getElementById('Cname').textContent=myValue;

      fetch('https://api.openweathermap.org/data/2.5/weather?q='+myValue+'&appid=12001cb3049844d9da860c8a406dd821')
      .then(response => response.json())
      .then(data => {
        const numbValue= data['main']['temp'];
        const v_weatherValue = data['weather'][0]['description']
        const feel_likeValue = data['main']['feels_like']
        const humvalue = data['main']['humidity']

        numb.innerHTML+= numbValue
        v_weather.innerHTML=v_weatherValue
        feel_like.innerHTML+=feel_likeValue +'°C' + '<br>' + 'feels like'
        hum.innerHTML+=humvalue +'%' + '<br>' + 'Humdity'
    })
}



btn.addEventListener('click' , putWeather)