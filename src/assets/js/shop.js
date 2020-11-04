/*localStorage.clear();

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
*/
let australia = {
    army: {
        name: 'uname1',
        color: '#26378C',
        resources: {
            metal : 3,
            cement : 2,
            food : 5,
            oil : 1,
            network : 2,
            lithium : 2,
            nuclear : 0,
            tribes : 0,
            tecnology : 1,
            niobium : 0,
            virus : 0,
            workforce: 1
          }
    },
    troops: 10,
    airplanes: 3,
    ships: 2,
    wall: 4 
};
let egipto = {
    army: {
        name: 'Username1',
        color: 'ACA71E',
        resources: {
            metal : 6,
            cement : 12,
            food : 2,
            oil : 0,
            network : 2,
            lithium : 0,
            nuclear : 0,
            tribes : 3,
            tecnology : 5,
            niobium : 2,
            virus : 0,
            workforce: 1
          }
    },
    troops: 18,
    airplanes: 12,
    ships: 0,
    wall: 6 
};
let medio_oriente = {
    army: {
        name: 'Username5',
        color: '#46AC35'
    },
    troops: 12,
    airplanes: 0,
    ships: 5,
    wall: 1,
    resources: {
        metal : 10,
        cement : 0,
        food : 12,
        oil : 2,
        network : 0,
        lithium : 0,
        nuclear : 1,
        tribes : 0,
        tecnology : 1,
        niobium : 0,
        virus : 2,
        workforce: 1
      } 
};
let mackenzie = {
    army: {
        name: 'Username5',
        color: '#46AC35'
    },
    troops: 5,
    airplanes: 4,
    ships: 1,
    wall: 12,
    resources: {
        metal : 15,
        cement : 12,
        food : 0,
        oil : 0,
        network : 0,
        lithium : 0,
        nuclear : 3,
        tribes : 6,
        tecnology : 1,
        niobium : 1,
        virus : 0,
        workforce: 0
      } 
};
localStorage.setItem("australia", JSON.stringify(australia));
localStorage.setItem("egipto", JSON.stringify(egipto));
localStorage.setItem("medio-oriente", JSON.stringify(medio_oriente));
localStorage.setItem("mackenzie", JSON.stringify(mackenzie));

var boton_av = document.getElementById("btn_av");

boton_av.addEventListener("click", function(){
    av_ls1 = localStorage.getItem('aviones_1');
    met = localStorage.getItem('metal_1');

    if (parseInt(met) > 0) {

        a = parseInt(av_ls1,10) + 1;
        localStorage.setItem("aviones_1",a);
        alert("Compraste un avion para tu territorio")
        x = parseInt(met,10) - 3;
        if (x < 0){
            x = 0
            localStorage.setItem("metal_1",x);
        } else {
            localStorage.setItem("metal_1",x);
        };
    };
    

});

var boton_bq = document.getElementById("btn_bq");

boton_bq.addEventListener("click", function(){
    bq_ls1 = localStorage.getItem('buques_1');
    met = localStorage.getItem('metal_1');

    if (parseInt(met) > 0) {

        b = parseInt(bq_ls1,10) + 1;
        localStorage.setItem("buques_1",b);
        alert("Compraste un buque para tu territorio")
        x = parseInt(met,10) - 3;
        if (x < 0){
            x = 0
            localStorage.setItem("metal_1",x);
        } else {
            localStorage.setItem("metal_1",x);
        };
    };
    
    
});

var boton_m = document.getElementById("btn_m");

boton_m.addEventListener("click", function(){
    m_ls1 = localStorage.getItem('muralla_1');
    cem = localStorage.getItem('cemento_1');

    if (parseInt(cem) > 0) {
        m = parseInt(m_ls1,10) + 1;
        localStorage.setItem("muralla_1",m);
        alert("Compraste una muralla para tu territorio")
        x = parseInt(cem,10) - 5;
        if (x < 0){
            x = 0
            localStorage.setItem("cemento_1",x);
        } else {
            localStorage.setItem("cemento_1",x);
        };
        
    };
    
        
    
    

});

