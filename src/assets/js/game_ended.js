const winner = document.getElementById('winner');
const second = document.getElementById('second');
const third = document.getElementById('third');
const fourth = document.getElementById('fourth');

function load_end() {
    let lugares = JSON.parse(localStorage.getItem('end'));
    winner.innerHTML = `${lugares[0].name} with ${lugares[0].territories}`;
    second.innerHTML = `${lugares[1].name} with ${lugares[1].territories}`
    third.innerHTML = `${lugares[2].name} with ${lugares[2].territories}`
    fourth.innerHTML = `${lugares[3].name} with ${lugares[3].territories}`
}

window.onload = load_end;