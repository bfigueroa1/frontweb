
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
                alert('Your account has been created');
                //se crea un usuario en userlist
            }
        }else{
            userList = [newUser];
            localStorage.setItem('users', JSON.stringify(userList));
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
                //login success
                alert('Login success');
                window.location = './index loged.html';
                //Pa que el usuario tenga cosas
                localStorage.setItem("aviones_1",0);
                localStorage.setItem("buques_1",0);
                localStorage.setItem("muralla_1",0);
                localStorage.setItem("tropas_1",10);

                localStorage.setItem("metal_1",10)
                localStorage.setItem("cemento_1",10)
                localStorage.setItem("alimento_1",10)

                localStorage.setItem("aviones_2",5);
                localStorage.setItem("buques_2",5);
                localStorage.setItem("muralla_2",2);
                localStorage.setItem("tropas_2",5);

                localStorage.setItem("metal_2",50)
                localStorage.setItem("cemento_2",50)
                localStorage.setItem("alimento_2",50)
                //
            }
        }
    }else{
        alert('No users registered');
    }
}