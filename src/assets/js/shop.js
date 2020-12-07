const nombre_territorio = localStorage.getItem('territory_shop');
const btn_av = document.getElementById('btn_av')
const btn_bq = document.getElementById('btn_bq')
const btn_m = document.getElementById('btn_m')



async function fetch_add_airplanes (id_ter, cantidad)	{ 
		
    let query = {
        "nivel": cantidad};
    let ruta = `http://infinite-escarpment-66062.herokuapp.com/airplanes/${id_ter}`;
    let options = {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(query)
        };
    let rawResponse = await fetch(ruta,options)
    .then(res => res.json())
    .then(res => {return res});
    return rawResponse;
}

async function fetch_add_ships (id_ter, cantidad)	{ 
		
    let query = {
        "nivel": cantidad};
    let ruta = `http://infinite-escarpment-66062.herokuapp.com/ships/${id_ter}`;
    let options = {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(query)
        };
    let rawResponse = await fetch(ruta,options)
    .then(res => res.json())
    .then(res => {return res});
    return rawResponse;
}

async function fetch_add_wall(id_ter, cantidad)	{ 
		
    let query = {
        "nivel": cantidad};
    let ruta = `http://infinite-escarpment-66062.herokuapp.com/walls/${id_ter}`;
    let options = {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(query)
        };
    let rawResponse = await fetch(ruta,options)
    .then(res => res.json())
    .then(res => {return res});
    return rawResponse;
}

async function fetch_ter_id(name) { 
    const rawResponse = await fetch(`http://infinite-escarpment-66062.herokuapp.com/territories/get_id/${name}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
    }})
    .then(res => res.json())
    .then(res => {return res});
    //console.log(rawResponse);
    return rawResponse;
}

btn_av.addEventListener('click', async function () {	
    
    let aviones = document.getElementById('cant_a');
    let cantidad = aviones.value;
    let id_territorio =  await fetch_ter_id(nombre_territorio);
    let response = await fetch_add_airplanes(id_territorio, cantidad)
    .then(res => {return res});

    if (response !== false) {
        alert('Successfully purchased');
    }
    else {
        alert('Not enough metal');
    }
    
});

btn_bq.addEventListener('click', async function () {    
    let buques = document.getElementById('cant_b');
    let cantidad = buques.value;
    let id_territorio =  await fetch_ter_id(nombre_territorio);
    let response = await fetch_add_ships(id_territorio, cantidad)
    .then(res => {return res});

    if (response !== false) {
        alert('Successfully purchased');
    }
    else {
        alert('Not enough metal');
    }
});

btn_m.addEventListener('click', async function () {
    let muralla = document.getElementById('cant_m');
    let cantidad = muralla.value;
    let id_territorio =  await fetch_ter_id(nombre_territorio);
    let response = await fetch_add_wall(id_territorio, cantidad)
    .then(res => {return res});

    if (response !== false) {
        alert('Successfully purchased');
    }
    else {
        alert('Not enough cement');
    }
    
});