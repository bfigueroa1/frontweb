function load_resources() {
    var petroleo = document.getElementById("PetroleoShow");
    var red = document.getElementById("RedShow");
    var litio = document.getElementById("LitioShow");
    var tribu = document.getElementById("TribuShow");
    var nuclear = document.getElementById("NuclearShow");

    let current_user =  JSON.parse(localStorage.getItem('current_user'))
    
    petroleo.innerHTML = `${current_user.resources.oil}`;
    red.innerHTML = `${current_user.resources.network}`;
    litio.innerHTML = `${current_user.resources.lithium}`;
    tribu.innerHTML = `${current_user.resources.tribes}`;
    nuclear.innerHTML = `${current_user.resources.nuclear}`;
}

window.onload = load_resources;
