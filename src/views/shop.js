/*localStorage.clear();

localStorage.setItem("aviones_1",0);
localStorage.setItem("buques_1",0);
localStorage.setItem("muralla_1",0);
localStorage.setItem("tropas_1",5);

localStorage.setItem("metal_1",30)
localStorage.setItem("cemento_1",10)
localStorage.setItem("alimento_1",10)

localStorage.setItem("aviones_2",20);
localStorage.setItem("buques_2",20);
localStorage.setItem("muralla_2",1);
localStorage.setItem("tropas_2",20);

localStorage.setItem("metal_2",50)
localStorage.setItem("cemento_2",50)
localStorage.setItem("alimento_2",50)
*/

var boton_av = document.getElementById("btn_av");

boton_av.addEventListener("click", function(){
    av_ls1 = localStorage.getItem('aviones_1');
    x = parseInt(av_ls1,10) + 1;
    localStorage.setItem("aviones_1",x);

    met = localStorage.getItem('metal_1');
    x = parseInt(met,10) - 3;
    localStorage.setItem("metal_1",x);

});

var boton_bq = document.getElementById("btn_bq");

boton_bq.addEventListener("click", function(){
    bq_ls1 = localStorage.getItem('buques_1');
    x = parseInt(bq_ls1,10) + 1;
    localStorage.setItem("buques_1",x);

    met = localStorage.getItem('metal_1');
    x = parseInt(met,10) - 3;
    localStorage.setItem("metal_1",x);
});

var boton_m = document.getElementById("btn_m");

boton_m.addEventListener("click", function(){
    m_ls1 = localStorage.getItem('muralla_1');

    if (m_ls1 == 0) {
        x = parseInt(m_ls1,10) + 1;
        localStorage.setItem("muralla_1",x);

        cem = localStorage.getItem('cemento_1');
        x = parseInt(cem,10) - 5;
        localStorage.setItem("cemento_1",x);
    }
    

});

