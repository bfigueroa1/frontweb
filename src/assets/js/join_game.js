let join = document.getElementById("btn_join_game");
let code = document.getElementById("session_code");

join.onclick = async function() {
    game_session = JSON.parse(localStorage.getItem('game_session'));
    game_session = code.value;
    localStorage.setItem('game_session', JSON.stringify(game_session));
    let jugada = {
        troop_attack: [],
        airplane_attack: [],
        ship_attack: [],
        collect_resources: []
    };
    localStorage.setItem('jugada', JSON.stringify(jugada));
    players = await fetch_getAllPlayers(game_session);
    let user1 = {name: players[0], territories: 9, color: '#26378C'};
    let user2 = {name: players[1], territories: 9, color: '#ACA71E'};
    let user3 = {name: players[2], territories: 8, color: '#AD4E8C'};
    let user4 = {name: players[3], territories: 8, color: '#AB1A17'};
    let user5 = {name: players[4], territories: 8, color: '#46AC35'};
    localStorage.setItem('user1', JSON.stringify(user1));
    localStorage.setItem('user2', JSON.stringify(user2));
    localStorage.setItem('user3', JSON.stringify(user3));
    localStorage.setItem('user4', JSON.stringify(user4));
    localStorage.setItem('user5', JSON.stringify(user5));

    

    let current_user = JSON.parse(localStorage.getItem('current_user'));

    army = await fetch_army_id(current_user.player);

    current_user.game = game_session;
    current_user.army = army;
    localStorage.setItem('current_user', JSON.stringify(current_user));

    let map_data = await fetch_map();
	for (territory in map_data) {
		//console.log(territory.toLowerCase().replace(', ', '-').replace(' y ', '-').replace(' e ', '-').replace(' ', '-').replace(',-', '-').replace('l ', 'l-'));
		localStorage.setItem(territory.toLowerCase().replace(', ', '-').replace(' y ', '-').replace(' e ', '-')
		.replace(' ', '-').replace(',-', '-').replace('l ', 'l-').replace('ñ', 'n'), JSON.stringify(map_data[territory]));
	}

    window.location = "map.html";
};

async function fetch_getAllPlayers(id_game) {  //CONSEGUIR TODO LOS PLAYERS ID DEL GAME
    const rawResponse = await fetch(`http://infinite-escarpment-66062.herokuapp.com/games/username/${id_game}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
    }})
    .then(res => res.json())
    .then(res => {return res}); 
    return rawResponse;
}


async function fetch_map() { //CONSEGUIR MAP 
    const rawResponse = await fetch('http://infinite-escarpment-66062.herokuapp.com/maps/territories', {
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

async function fetch_army_id(id_player) {  //CONSEGUIR TODO LOS PLAYERS ID DEL GAME
    const rawResponse = await fetch(`http://infinite-escarpment-66062.herokuapp.com/armies/get_army_id/${id_player}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
    }})
    .then(res => res.json())
    .then(res => {return res}); 
    return rawResponse;
}


var u1 = localStorage.getItem('user1');
console.log(u1)
var u12 = document.getElementById('user1');
u1.innerHTML = u12;
    


