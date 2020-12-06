
async function fetch_add_troops (id)	{ //ACTUALIZAR VARIABLE PLAYED POR FALSE
		
    let query = {
        "played": false};
    let ruta = `http://localhost:3000/troops/played/${id}`;
    let options = {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(query)
        };
    let rawResponse = await fetch(ruta,options)
    .then(function(){
            null
        }
    );
}