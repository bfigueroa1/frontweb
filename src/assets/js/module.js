function includeHTML() {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    /* Loop through a collection of all HTML elements: */
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("loadhtml");
        if (file) {
            Object.keys(moduleList).map(
                (key) => {
                    if(key===file)
                    elmnt.innerHTML = moduleList[key];
                }
            )
        }
    }
}

const moduleList = {};

moduleList.nav = `
    <a href="../../index.html" class="link_logo">
        <img class= "logo" src="../assets/imgs/Logo Blanco.png" alt="logo">
    </a>
    <ul class="navbar_items">
        <li class="navbar_item">
            <a href="rules.html" class="navbar_link">Rules</a>
        </li>
        <li class="navbar_item">
            <a href="about.html" class="navbar_link">About Us</a>
        </li>
        <li class="navbar_item">
            <a href="contact.html" class="navbar_link">Contact Us</a>
        </li>
    </ul>
    <a href="log_in.html"><button class="log_in">Login</button></a>
    <a href="sign_up.html"><button class="sign_up">Sign Up</button></a>
`
let game_session = JSON.parse(localStorage.getItem('game_session'));
let link = "start_playing.html";
if (game_session != 0) {
    link = "map.html"    
};
moduleList.navloged = `
    <nav class="navbar"  id="navloged">
        <a href="index loged.html" class="link_logo">
            <img class= "logo" src="../assets/imgs/Logo Blanco.png" alt="logo">
        </a>    
        <ul class="navbar_items">
            <li class="navbar_item">
                <a href="player.html" class="navbar_link">Player</a>
            </li>
            <li class="navbar_item">
                <a href="army.html" class="navbar_link">Army</a>
            </li>
            <li class="navbar_item">
                <a href="territories.html" class="navbar_link">Territories</a>
            </li>
            <li class="navbar_item">
                <a href=${link} class="navbar_link">Game Session</a>
            </li>
        </ul>
        <a href="../../index.html"><button class="log_out">Logout</button></a>
    </nav>
`

window.onload = includeHTML();
