
av_ls1 = localStorage.getItem('aviones_1');
bq_ls1 = localStorage.getItem('buques_1');
t_ls1 = localStorage.getItem('tropas_1');


if (isNaN(av_ls1)) {

    var av_1 = document.getElementById("aviones_1");
    av_1.innerHTML = 0;
    var bq_1 = document.getElementById("buques_1");
    bq_1.innerHTML = 0;
    var t_1 = document.getElementById("tropas_1");
    t_1.innerHTML = 0;

} else {
    var av_1 = document.getElementById("aviones_1");
    av_1.innerHTML = av_ls1;
    var bq_1 = document.getElementById("buques_1");
    bq_1.innerHTML = bq_ls1;
    var t_1 = document.getElementById("tropas_1");
    t_1.innerHTML = t_ls1;
}




//document.getElementById("aviones_1").innerHTML =3;
