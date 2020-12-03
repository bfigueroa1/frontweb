function load_resources() {
    var virus = document.getElementById("VirusShow");
    var obra = document.getElementById("ObraShow");
    var tech = document.getElementById("TechShow");
    var niobio = document.getElementById("NiobioShow");

    let current_user =  JSON.parse(localStorage.getItem('current_user'))

    virus.innerHTML = `${current_user.resources.virus}`;
    obra.innerHTML = `${current_user.resources.workforce}`;
    tech.innerHTML = `${current_user.resources.tecnology}`;
    niobio.innerHTML = `${current_user.resources.niobium}`;
}

window.onload = load_resources;