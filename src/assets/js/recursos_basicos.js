function load_resources() {
    let metal = document.getElementById("MetalShow");
    let cemento = document.getElementById("CementoShow");
    let aliment = document.getElementById("AlimentShow");
    
    let current_user =  JSON.parse(localStorage.getItem('current_user'))
    
    metal.innerHTML = `${current_user.resources.metal}`;
    cemento.innerHTML = `${current_user.resources.cement}`;
    aliment.innerHTML = `${current_user.resources.food}`;
}

window.onload = load_resources;
