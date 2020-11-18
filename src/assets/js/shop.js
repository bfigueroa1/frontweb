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
let jugada = {
    troop_attack: [],
    airplane_attack: [],
    ship_attack: [],
    collect_resources: []
};
let user1 = {name: 'Bronko', territories: 8};
let user2 = {name: 'Juanpita2000', territories: 8};
let user3 = {name: 'Juanpaneitor 1313 uwu', territories: 8};
let user4 = {name: 'Shaggy', territories: 9};
let user5 = {name: 'JUANPAbaSurita', territories: 9};
let australia = {
    army: {
        name: 'Username4',
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
    wall: 3 
};
let egipto = {
    army: {
        name: 'Username1',
        color: '#ACA71E',
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
    wall: 0 
};
let medio_oriente = {
    army: {
        name: 'Username3',
        color: '#AD4E8C'
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
        name: 'Username2',
        color: '#AB1A17'
    },
    troops: 5,
    airplanes: 4,
    ships: 1,
    wall: 8,
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
let vladivostok = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let japon = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let vietnam = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let siberia = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let dudinka = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let omsk = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let aral = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let china = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let india = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let tchita = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let mongolia = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let alaska = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let vancouver = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let groenlandia = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let nueva_york = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let california = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let ottawa = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let labrador = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let mexico = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let chile_bolivia_peru_ecuador = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let argentina_paraguay_uruguay = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let brasil = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let colombia_venezuela = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let nueva_guinea = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let borneo = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let sumatra = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let inglaterra = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let moscu = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let suecia = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let islandia = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let alemania = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let espana_francia_italia = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let polonia_yugoeslavia = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let sudan = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let el_congo = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let africa_del_sur = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let argelia_nigeria = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};
let madagascar = {army: {name: 'Username5', color: '#46AC35'}, troops: 5, airplanes: 4, ships: 1, wall: 6, resources: {metal : 15, cement : 12, food : 0, oil : 0, network : 0, lithium : 0, nuclear : 3, tribes : 6, tecnology : 1, niobium : 1, virus : 0, workforce: 0}};

localStorage.setItem('vladivostok', JSON.stringify(vladivostok));
localStorage.setItem('japon', JSON.stringify(japon));
localStorage.setItem('vietnam', JSON.stringify(vietnam));
localStorage.setItem('siberia', JSON.stringify(siberia));
localStorage.setItem('dudinka', JSON.stringify(dudinka));
localStorage.setItem('medio-oriente', JSON.stringify(medio_oriente));
localStorage.setItem('omsk', JSON.stringify(omsk));
localStorage.setItem('aral', JSON.stringify(aral));
localStorage.setItem('china', JSON.stringify(china));
localStorage.setItem('india', JSON.stringify(india));
localStorage.setItem('tchita', JSON.stringify(tchita));
localStorage.setItem('mongolia', JSON.stringify(mongolia));
localStorage.setItem('alaska', JSON.stringify(alaska));
localStorage.setItem('mackenzie', JSON.stringify(mackenzie));
localStorage.setItem('vancouver', JSON.stringify(vancouver));
localStorage.setItem('groenlandia', JSON.stringify(groenlandia));
localStorage.setItem('nueva-york', JSON.stringify(nueva_york));
localStorage.setItem('california', JSON.stringify(california));
localStorage.setItem('ottawa', JSON.stringify(ottawa));
localStorage.setItem('labrador', JSON.stringify(labrador));
localStorage.setItem('mexico', JSON.stringify(mexico));
localStorage.setItem('chile-bolivia-peru-ecuador', JSON.stringify(chile_bolivia_peru_ecuador));
localStorage.setItem('argentina-paraguay-uruguay', JSON.stringify(argentina_paraguay_uruguay));
localStorage.setItem('brasil', JSON.stringify(brasil));
localStorage.setItem('colombia-venezuela', JSON.stringify(colombia_venezuela));
localStorage.setItem('nueva-guinea', JSON.stringify(nueva_guinea));
localStorage.setItem('borneo', JSON.stringify(borneo));
localStorage.setItem('sumatra', JSON.stringify(sumatra));
localStorage.setItem('australia', JSON.stringify(australia));
localStorage.setItem('inglaterra', JSON.stringify(inglaterra));
localStorage.setItem('moscu', JSON.stringify(moscu));
localStorage.setItem('suecia', JSON.stringify(suecia));
localStorage.setItem('islandia', JSON.stringify(islandia));
localStorage.setItem('alemania', JSON.stringify(alemania));
localStorage.setItem('espana-francia-italia', JSON.stringify(espana_francia_italia));
localStorage.setItem('polonia-yugoeslavia', JSON.stringify(polonia_yugoeslavia));
localStorage.setItem('sudan', JSON.stringify(sudan));
localStorage.setItem('el-congo', JSON.stringify(el_congo));
localStorage.setItem('africa-del-sur', JSON.stringify(africa_del_sur));
localStorage.setItem('argelia-nigeria', JSON.stringify(argelia_nigeria));
localStorage.setItem('madagascar', JSON.stringify(madagascar));
localStorage.setItem('egipto', JSON.stringify(egipto));
localStorage.setItem('user1', JSON.stringify(user1));
localStorage.setItem('user2', JSON.stringify(user2));
localStorage.setItem('user3', JSON.stringify(user3));
localStorage.setItem('user4', JSON.stringify(user4));
localStorage.setItem('user5', JSON.stringify(user5));
localStorage.setItem('jugada', JSON.stringify(jugada));

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

