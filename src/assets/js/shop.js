const nombre_territorio = document.getElementById("nombre_territorio");

async function fetch_add_airplanes (id_ter)	{ 
		
    let query = {
        "played": false};
    let ruta = `http://localhost:3000/airplanes/update/${id_ter}`;
    let options = {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
        };
    let rawResponse = await fetch(ruta,options)
    .then(function(){
            null
        }
    );
}

$('#btn_av').click(async function () {		
    let current_user = JSON.parse(localStorage.getItem("current_user"));
    
    await fetch_add_airplanes()
    
});

$('#btn_bq').click(async function () {		
    let current_user = JSON.parse(localStorage.getItem("current_user"));
    
});

$('#btn_m').click(async function () {		
    let current_user = JSON.parse(localStorage.getItem("current_user"));
    
});