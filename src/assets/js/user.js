
document.getElementById('formsubmit').addEventListener('click', (e)=>e.preventDefault());
//todos los submit buttons tienen que tener ese id id^

function validateEmail(mail){
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)){
        return (true)
    }
    return (false)
}

var store = (e) => {
    var uname = document.getElementById('uname');
    var pw1 = document.getElementById('pw1');
    var pw2 = document.getElementById('pw2');
    var umail = document.getElementById('umail');

    if(uname.value.length == 0){
        alert('Please fill in your username');

    }else if(pw1.value.length == 0){
        alert('Please fill in your password');

    }else if(pw2.value.length == 0){
        alert('Please confirm your password');

    }else if(umail.value.length == 0){
        alert('Please fill in your mail');

    }else if(pw1.value != pw2.value){
        alert("Passwords don't match");

    }else if(!validateEmail(umail.value)){
        alert("You have entered an invalid email address!")
    }
    else{
        var newUser = {username: uname.value, password: pw1.value, email: umail.value}
        var userList = JSON.parse(localStorage.getItem('users'));
        if(userList){
            //Si existe la lista users
            var conflictUser = userList.find(user=>user.username===uname.value);
            console.log(conflictUser);
            
            if(conflictUser){
                alert('Username taken');
            }else{
                userList.push(newUser);
                localStorage.setItem('users', JSON.stringify(userList));

                (async () => {
                    const rawResponse = await fetch('https://infinite-escarpment-66062.herokuapp.com/players/new', {
                      method: 'POST',
                      headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(newUser)
                    })
                    /*.then(res => res.json())
                    .then( res => {
                        console.log( res );
                        let inMemoryToken = res.token;
                        localStorage.setItem('user', JSON.stringify(res));
*/
                    const content = await rawResponse.json();
                    console.log(content);
                  })();

                alert('Your account has been created');
                //se crea un usuario en userlist
            }
        }else{
            userList = [newUser];
            localStorage.setItem('users', JSON.stringify(userList));

            (async () => {
                const rawResponse = await fetch('https://infinite-escarpment-66062.herokuapp.com/players/new', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(newUser)
                });
                const content = await rawResponse.json();
                console.log(content);
              })();

            alert('Your account has been created');
            //Se crea un usuario junto a la userlist
        }
    }
}




function check(){
    var userName = document.getElementById('userName').value;
    var userPw = document.getElementById('userPw').value;
    var userList = JSON.parse(localStorage.getItem('users'));
    if(userList){
        var user = userList.find(userItem=>userItem.username === userName);
        console.log(user?('found user', user):'user not found');
        if(!user){
            alert('Username is wrong');
        }else{
            if(user.password !== userPw){
                alert('Wrong password');
            }else{
                
                (async () => {
                    const content = await fetch('https://infinite-escarpment-66062.herokuapp.com/auth/login', {
                      method: 'POST',
                      headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(user)
                    })
                    .then(res => res.json())
                    .then(res => {return res});
                      let current_user = {
                        player: content.player.player_id,
                        username: content.player.username, 
                        game: 0,
                        army: 0,
                        token: content.player.token,
                        resources: {}
                    };
                    localStorage.setItem('current_user', JSON.stringify(current_user));
                    })();          
                


                //login success
                alert('Login success');
                localStorage.setItem('game_session', JSON.stringify(0));

                window.location = './index loged.html';
            }
        }
    }else{
        alert('No users registered');
    }
}