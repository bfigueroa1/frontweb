/*localStorage.clear();

localStorage.setItem("aviones",0);
localStorage.setItem("buques",0);
localStorage.setItem("muralla",0);

localStorage.setItem("metal",10)
localStorage.setItem("cemento",10)
localStorage.setItem("alimento",10)
*/

var boton_av = document.getElementById("btn_av");

boton_av.addEventListener("click", function(){
    av_ls1 = localStorage.getItem('aviones');
    x = parseInt(av_ls1,10) + 1;
    localStorage.setItem("aviones",x);

    met = localStorage.getItem('metal');
    x = parseInt(met,10) - 3;
    localStorage.setItem("metal",x);

});

var boton_bq = document.getElementById("btn_bq");

boton_bq.addEventListener("click", function(){
    bq_ls1 = localStorage.getItem('buques');
    x = parseInt(bq_ls1,10) + 1;
    localStorage.setItem("buques",x);

    met = localStorage.getItem('metal');
    x = parseInt(met,10) - 3;
    localStorage.setItem("metal",x);
});

var boton_m = document.getElementById("btn_m");

boton_m.addEventListener("click", function(){
    m_ls1 = localStorage.getItem('muralla');

    if (m_ls1 == 0) {
        x = parseInt(m_ls1,10) + 1;
        localStorage.setItem("muralla",x);

        cem = localStorage.getItem('cemento');
        x = parseInt(cem,10) - 5;
        localStorage.setItem("cemento",x);
    }
    

});

