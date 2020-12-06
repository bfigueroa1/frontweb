let nombre = document.getElementById("nombre_territorio");
let continente = document.getElementById("continente_territorio");
let aviones = document.getElementById("aviones_territorio");
let tropas = document.getElementById("tropas_territorio");
let buques = document.getElementById("buques_territorio");

let left = document.getElementById("left");
let right = document.getElementById("right");

let next_right = {'Vladivostok': 'Japon', 'Japon': 'Vietnam', 'Vietnam': 'Siberia', 'Siberia': 'Dudinka', 
'Dudinka': 'Medio Oriente', 'Medio Oriente': 'Omsk', 'Omsk': 'Aral', 'Aral': 'China', 'China': 'India', 
'India': 'Tchita', 'Tchita': 'Mongolia', 'Mongolia': 'Alaska', 'Alaska': 'Mackenzie', 
'Mackenzie': 'Vancouver', 'Vancouver': 'Groenlandia', 'Groenlandia': 'Nueva York', 
'Nueva York': 'California', 'California': 'Ottawa', 'Ottawa': 'Labrador', 'Labrador': 'Mexico', 
'Mexico': 'Chile, Bolivia, Peru y Ecuador', 
'Chile, Bolivia, Peru y Ecuador': 'Argentina, Paraguay y Uruguay', 
'Argentina, Paraguay y Uruguay': 'Brasil', 'Brasil': 'Colombia y Venezuela', 
'Colombia y Venezuela': 'Nueva Guinea', 'Nueva Guinea': 'Borneo', 'Borneo': 'Sumatra', 
'Sumatra': 'Australia', 'Australia': 'Inglaterra', 'Inglaterra': 'Moscu', 'Moscu': 'Suecia', 
'Suecia': 'Islandia', 'Islandia': 'Alemania', 'Alemania': 'España, francia e Italia', 
'España, francia e Italia': 'Polonia y Yugoeslavia', 'Polonia y Yugoeslavia': 'Sudan', 
'Sudan': 'El Congo', 'El Congo': 'Africa del Sur', 'Africa del Sur': 'Argelia y Nigeria', 
'Argelia y Nigeria': 'Madagascar', 'Madagascar': 'Egipto', 'Egipto': 'Vladivostok'};

let next_left = {'Vladivostok': 'Egipto', 'Japon': 'Vladivostok', 'Vietnam': 'Japon', 
'Siberia': 'Vietnam', 'Dudinka': 'Siberia', 'Medio Oriente': 'Dudinka', 'Omsk': 'Medio Oriente', 
'Aral': 'Omsk', 'China': 'Aral', 'India': 'China', 'Tchita': 'India', 'Mongolia': 'Tchita', 
'Alaska': 'Mongolia', 'Mackenzie': 'Alaska', 'Vancouver': 'Mackenzie', 'Groenlandia': 'Vancouver', 
'Nueva York': 'Groenlandia', 'California': 'Nueva York', 'Ottawa': 'California', 'Labrador': 'Ottawa', 
'Mexico': 'Labrador', 'Chile, Bolivia, Peru y Ecuador': 'Mexico', 
'Argentina, Paraguay y Uruguay': 'Chile, Bolivia, Peru y Ecuador', 
'Brasil': 'Argentina, Paraguay y Uruguay', 'Colombia y Venezuela': 'Brasil', 
'Nueva Guinea': 'Colombia y Venezuela', 'Borneo': 'Nueva Guinea', 'Sumatra': 'Borneo', 
'Australia': 'Sumatra', 'Inglaterra': 'Australia', 'Moscu': 'Inglaterra', 'Suecia': 'Moscu', 
'Islandia': 'Suecia', 'Alemania': 'Islandia', 'España, francia e Italia': 'Alemania', 
'Polonia y Yugoeslavia': 'España, francia e Italia', 'Sudan': 'Polonia y Yugoeslavia', 
'El Congo': 'Sudan', 'Africa del Sur': 'El Congo', 'Argelia y Nigeria': 'Africa del Sur', 
'Madagascar': 'Argelia y Nigeria', 'Egipto': 'Madagascar'};

let terr_cont = {'Vladivostok': 'Asia', 'Japon': 'Asia', 'Vietnam': 'Asia', 'Siberia': 'Asia', 
'Dudinka': 'Asia', 'Medio Oriente': 'Asia', 'Omsk': 'Asia', 'Aral': 'Asia', 'China': 'Asia', 
'India': 'Asia', 'Tchita': 'Asia', 'Mongolia': 'Asia', 'Alaska': 'America del Norte', 
'Mackenzie': 'America del Norte', 'Vancouver': 'America del Norte', 'Groenlandia': 'America del Norte',
'Nueva York': 'America del Norte', 'California': 'America del Norte', 'Ottawa': 'America del Norte',
'Labrador': 'America del Norte', 'Mexico': 'America del Norte', 
'Chile, Bolivia, Peru y Ecuador': 'America del Sur', 'Argentina, Paraguay y Uruguay': 'America del Sur',
'Brasil': 'America del Sur', 'Colombia y Venezuela': 'America del Sur', 'Nueva Guinea': 'Oceania', 
'Borneo': 'Oceania', 'Sumatra': 'Oceania', 'Australia': 'Oceania', 'Inglaterra': 'Europa', 
'Moscu': 'Europa', 'Suecia': 'Europa', 'Islandia': 'Europa', 'Alemania': 'Europa', 
'España, francia e Italia': 'Europa', 'Polonia y Yugoeslavia': 'Europa', 'Sudan': 'Africa', 
'El Congo': 'Africa', 'Africa del Sur': 'Africa', 'Argelia y Nigeria': 'Africa', 'Madagascar': 'Africa', 
'Egipto': 'Africa'}

left.addEventListener("click", function(){
    let new_name = next_left[nombre.innerHTML.substr(8,)];
    nombre.innerHTML = `Nombre: ${new_name}`;
    let new_continent = terr_cont[new_name];
    continente.innerHTML = `Continente: ${new_continent}`;
    let terr = JSON.parse(localStorage.getItem(new_name.toLowerCase().replace(', ', '-')
    .replace(' y ', '-').replace(' e ', '-').replace(' ', '-').replace(',-', '-')
    .replace('l ', 'l-').replace('ñ', 'n')));
    tropas.innerHTML = `Tropas: ${terr.troops}`;
    aviones.innerHTML = `Aviones: ${terr.airplanes}`;
    buques.innerHTML = `Buques: ${terr.ships}`;
})

right.addEventListener("click", function(){
    let new_name = next_right[nombre.innerHTML.substr(8,)];
    nombre.innerHTML = `Nombre: ${new_name}`;
    let new_continent = terr_cont[new_name];
    continente.innerHTML = `Continente: ${new_continent}`;
    let terr = JSON.parse(localStorage.getItem(new_name.toLowerCase().replace(', ', '-')
    .replace(' y ', '-').replace(' e ', '-').replace(' ', '-').replace(',-', '-')
    .replace('l ', 'l-').replace('ñ', 'n')));
    tropas.innerHTML = `Tropas: ${terr.troops}`;
    aviones.innerHTML = `Aviones: ${terr.airplanes}`;
    buques.innerHTML = `Buques: ${terr.ships}`;
})
