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

var boton_av = document.getElementById("btn_av");

boton_av.addEventListener("click", function(){
    av_ls1 = localStorage.getItem('aviones_1');
    met = localStorage.getItem('metal_1');

    if (parseInt(met) > 0) {

        a = parseInt(av_ls1,10) + 1;
        localStorage.setItem("aviones_1",a);
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

        x = parseInt(cem,10) - 5;
        if (x < 0){
            x = 0
            localStorage.setItem("cemento_1",x);
        } else {
            localStorage.setItem("cemento_1",x);
        };
        
    };
    
        
    
    

});

