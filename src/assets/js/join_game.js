let join = document.getElementById("btn_join_game");
let code = document.getElementById("session_code");
join.onclick = function() {
    game_session = JSON.parse(localStorage.getItem('game_session'));
    game_session = code.value;
    localStorage.setItem('game_session', JSON.stringify(game_session));
};