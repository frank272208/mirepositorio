// 986592cac35e7c6455536dcc37352645986592cac35e7c6455536dcc37352645
// id potosi 4404348
// id cochabamba 3919966
// url api.openweathermap.org/data/2.5/weather?id=4404348&units=metric&appid={986592cac35e7c6455536dcc37352645986592cac35e7c6455536dcc37352645}

const requestURL='https://api.openweathermap.org/data/2.5/weather?id=4404348&units=metric&APPID=c2f1a30c08bf1465f982f10da498c31a';
const request = new XMLHttpRequest();
request.open('GET',requestURL);
request.responseType = 'json';
request.send();

// obteniendo los datos json

request.onload = function()
{
    const clima_json= request.response;
    console.log(clima_json); 
   // document.getElementById('tem-act').innerHTML=clima_json['main'].temp;
   mostrarinformacion(clima_json);

}

function mostrarinformacion(objJson)
{
    var header1 = document.querySelector('section');
    var myh1 = document.createElement('h1');
    var myh2 = document.createElement('h2');
    var myh3 = document.createElement('h2');
    var myh4 = document.createElement('h2');
    myh1.textContent = objJson.name;
    myh2.textContent = 'temperatura actual: ' + objJson.main.temp;
    myh3.textContent = 'temperatura minima: ' + objJson.main.temp_min;
    myh4.textContent = 'temperatura maxima: ' + objJson.main.temp_max;
    header1.appendChild(myh1); 
    header1.appendChild(myh2); 
    header1.appendChild(myh3); 
    header1.appendChild(myh4); 
}
