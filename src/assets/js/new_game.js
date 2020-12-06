let create_g = document.getElementById("btn_send_invitation");


create_g.onclick = async function() {
    
    let saved_users = await fetch_getAllPlayers();

    let current_user = JSON.parse(localStorage.getItem('current_user'));
    let invitation1 = document.getElementById("uname1");
    let invitation2 = document.getElementById("uname2");
    let invitation3 = document.getElementById("uname3");
    let invitation4 = document.getElementById("uname4");
    
    let invited_users = [current_user.username, invitation1.value, 
      invitation2.value, invitation3.value, invitation4.value];
    
    let saved_users_values = [];
    for (let i in saved_users) {
      saved_users_values.push(saved_users[i]);
    };

    let users_exist = true;

    invited_users = invited_users.filter(function(item, index, array) {
      return array.indexOf(item) === index;
    });

    if (invited_users.length != 5) {
      users_exist = false;
      alert("There can't be repeated usernames")
    }

    else {
      for (let inv_user of invited_users) {
        if (!saved_users_values.includes(inv_user)) {
          users_exist = false;
        }
      };    
    
      if (users_exist) {
        await fetch_create_game(invited_users)
        .then(fetch_asign_ter(invited_users))
        .then(alert('Invitation sent'));
      }

      else {
        alert("Please enter existing usernames");
      }
    }
};

async function fetch_create_game(users) {
    const rawResponse = await fetch('http://localhost:3000/games/new', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(users)
    });
  };

async function fetch_create_round(users,game) {
    const rawResponse = await fetch('http://localhost:3000/rounds/create_round', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(users,game)
    });
    const content = await rawResponse.json();
    console.log(content);
  };

async function fetch_asign_ter(users) {
    const rawResponse = await fetch('http://localhost:3000/territories/asign', {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(users)
    });
  };


async function fetch_getAllPlayers() {  //CONSEGUIR TODO LOS PLAYERS ID DEL GAME
    const rawResponse = await fetch(`http://localhost:3000/players/get_username`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
    }})
    .then(res => res.json())
    .then(res => {return res}); 
    return rawResponse;
}