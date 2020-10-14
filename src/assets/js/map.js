$(function () {
	// open modal when a territory is clicked
	$('.modal-openBtn').click(function () {
		$('.modal').addClass('modal-open');
		// make modal draggable
		$('.modal').draggable({handle: ".modal-header"});
    	return false;
  	});

  	//close modal
  	$('.modal-closeBtn').click(function () {
    	$('.modal').removeClass('modal-open');
  	});

  	//Territories box

  	$('.vladivostok').hover(function () {
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Vladivostok");
		// change username
		$("#uname").empty();
		$("#uname").append("Username1");
		$("#uname").css("color", "#ACA71E");
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append("Troops: 3");
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append("Airplanes: 2");
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append("Ships: 2");
    	return false;
  	});

  	$('.japon').hover(function () {
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Japon");
		// change username
		$("#uname").empty();
		$("#uname").append("Username1");
		$("#uname").css("color", "#ACA71E");
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append("Troops: 3");
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append("Airplanes: 2");
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append("Ships: 2");
    	return false;
  	});

  	$('.china').hover(function () {
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("China");
		// change username
		$("#uname").empty();
		$("#uname").append("Username1");
		$("#uname").css("color", "#ACA71E");
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append("Troops: 3");
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append("Airplanes: 2");
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append("Ships: 2");
    	return false;
  	});

  	$('.siberia').hover(function () {
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Siberia");
		// change username
		$("#uname").empty();
		$("#uname").append("Username1");
		$("#uname").css("color", "#ACA71E");
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append("Troops: 3");
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append("Airplanes: 2");
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append("Ships: 2");
    	return false;
  	});

  	$('.tchita').hover(function () {
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Tchita");
		// change username
		$("#uname").empty();
		$("#uname").append("Username1");
		$("#uname").css("color", "#ACA71E");
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append("Troops: 3");
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append("Airplanes: 2");
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append("Ships: 2");
    	return false;
  	});

  	$('.mongolia').hover(function () {
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Mongolia");
		// change username
		$("#uname").empty();
		$("#uname").append("Username1");
		$("#uname").css("color", "#ACA71E");
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append("Troops: 3");
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append("Airplanes: 2");
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append("Ships: 2");
    	return false;
  	});

  	$('.vietnam').hover(function () {
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Vietnam");
		// change username
		$("#uname").empty();
		$("#uname").append("Username1");
		$("#uname").css("color", "#ACA71E");
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append("Troops: 3");
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append("Airplanes: 2");
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append("Ships: 2");
    	return false;
  	});

  	$('.dudinka').hover(function () {
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Dudinka");
		// change username
		$("#uname").empty();
		$("#uname").append("Username1");
		$("#uname").css("color", "#ACA71E");
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append("Troops: 3");
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append("Airplanes: 2");
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append("Ships: 2");
    	return false;
  	});

  	$('.omsk').hover(function () {
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Omsk");
		// change username
		$("#uname").empty();
		$("#uname").append("Username1");
		$("#uname").css("color", "#ACA71E");
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append("Troops: 3");
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append("Airplanes: 2");
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append("Ships: 2");
    	return false;
  	});

  	$('.aral').hover(function () {
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Aral");
		// change username
		$("#uname").empty();
		$("#uname").append("Username1");
		$("#uname").css("color", "#ACA71E");
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append("Troops: 3");
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append("Airplanes: 2");
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append("Ships: 2");
    	return false;
  	});

  	$('.medio-oriente').hover(function () {
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Medio Oriente");
		// change username
		$("#uname").empty();
		$("#uname").append("Username1");
		$("#uname").css("color", "#ACA71E");
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append("Troops: ");
		$("#troops-territory").append(localStorage.getItem("tropas_2"));
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append("Airplanes: ");
		$("#airplanes-territory").append(localStorage.getItem("aviones_2"));
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append("Ships: ");
		$("#ships-territory").append(localStorage.getItem("buques_2"));
    	return false;
  	});

  	$('.india').hover(function () {
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("India");
		// change username
		$("#uname").empty();
		$("#uname").append("Username1");
		$("#uname").css("color", "#ACA71E");
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append("Troops: 3");
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append("Airplanes: 2");
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append("Ships: 2");
    	return false;
  	});

  	$('.australia').hover(function () {
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Australia");
		// change username
		$("#uname").empty();
		$("#uname").append("Username1");
		$("#uname").css("color", "#ACA71E");
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append("Troops: 3");
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append("Airplanes: 2");
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append("Ships: 2");
    	return false;
  	});

  	$('.nueva-guinea').hover(function () {
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Nueva Guinea");
		// change username
		$("#uname").empty();
		$("#uname").append("Username1");
		$("#uname").css("color", "#ACA71E");
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append("Troops: 3");
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append("Airplanes: 2");
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append("Ships: 2");
    	return false;
  	});

  	$('.borneo').hover(function () {
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Borneo");
		// change username
		$("#uname").empty();
		$("#uname").append("Username1");
		$("#uname").css("color", "#ACA71E");
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append("Troops: 3");
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append("Airplanes: 2");
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append("Ships: 2");
    	return false;
  	});

  	$('.sumatra').hover(function () {
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Sumatra");
		// change username
		$("#uname").empty();
		$("#uname").append("Username1");
		$("#uname").css("color", "#ACA71E");
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append("Troops: 3");
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append("Airplanes: 2");
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append("Ships: 2");
    	return false;
  	});

  	$('.moscu').hover(function () {
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Moscu");
		// change username
		$("#uname").empty();
		$("#uname").append("Username1");
		$("#uname").css("color", "#ACA71E");
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append("Troops: 3");
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append("Airplanes: 2");
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append("Ships: 2");
    	return false;
  	});

  	$('.polonia-yugoeslavia').hover(function () {
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Polonia-Yugoeslavia");
		// change username
		$("#uname").empty();
		$("#uname").append("Username1");
		$("#uname").css("color", "#ACA71E");
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append("Troops: 3");
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append("Airplanes: 2");
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append("Ships: 2");
    	return false;
  	});

  	$('.alemania').hover(function () {
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Alemania");
		// change username
		$("#uname").empty();
		$("#uname").append("Username1");
		$("#uname").css("color", "#ACA71E");
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append("Troops: 3");
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append("Airplanes: 2");
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append("Ships: 2");
    	return false;
  	});

  	$('.espana-francia-italia').hover(function () {
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("España-Francia-Italia");
		// change username
		$("#uname").empty();
		$("#uname").append("Username1");
		$("#uname").css("color", "#ACA71E");
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append("Troops: 3");
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append("Airplanes: 2");
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append("Ships: 2");
    	return false;
  	});

  	$('.inglaterra').hover(function () {
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Inglaterra");
		// change username
		$("#uname").empty();
		$("#uname").append("Username1");
		$("#uname").css("color", "#ACA71E");
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append("Troops: 3");
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append("Airplanes: 2");
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append("Ships: 2");
    	return false;
  	});

  	$('.islandia').hover(function () {
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Islandia");
		// change username
		$("#uname").empty();
		$("#uname").append("Username1");
		$("#uname").css("color", "#ACA71E");
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append("Troops: 3");
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append("Airplanes: 2");
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append("Ships: 2");
    	return false;
  	});

  	$('.suecia').hover(function () {
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Suecia");
		// change username
		$("#uname").empty();
		$("#uname").append("Username1");
		$("#uname").css("color", "#ACA71E");
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append("Troops: 3");
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append("Airplanes: 2");
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append("Ships: 2");
    	return false;
  	});

  	$('.argelia-nigeria').hover(function () {
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Argelia-Nigeria");
		// change username
		$("#uname").empty();
		$("#uname").append("Username1");
		$("#uname").css("color", "#ACA71E");
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append("Troops: 3");
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append("Airplanes: 2");
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append("Ships: 2");
    	return false;
  	});

  	$('.egipto').hover(function () {
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Egipto");
		// change username
		$("#uname").empty();
		$("#uname").append("Username1");
		$("#uname").css("color", "#ACA71E");
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append("Troops: ");
		$("#troops-territory").append(localStorage.getItem("tropas_1"));
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append("Airplanes: ");
		$("#airplanes-territory").append(localStorage.getItem("aviones_1"));
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append("Ships: ");
		$("#ships-territory").append(localStorage.getItem("buques_1"));
    	return false;
  	});

  	$('.sudan').hover(function () {
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Sudan");
		// change username
		$("#uname").empty();
		$("#uname").append("Username1");
		$("#uname").css("color", "#ACA71E");
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append("Troops: 3");
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append("Airplanes: 2");
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append("Ships: 2");
    	return false;
  	});  	

  	$('.el-congo').hover(function () {
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("El Congo");
		// change username
		$("#uname").empty();
		$("#uname").append("Username1");
		$("#uname").css("color", "#ACA71E");
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append("Troops: 3");
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append("Airplanes: 2");
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append("Ships: 2");
    	return false;
  	});

  	$('.africa-del-sur').hover(function () {
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Africa del Sur");
		// change username
		$("#uname").empty();
		$("#uname").append("Username1");
		$("#uname").css("color", "#ACA71E");
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append("Troops: 3");
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append("Airplanes: 2");
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append("Ships: 2");
    	return false;
  	});

  	$('.madagascar').hover(function () {
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Madagascar");
		// change username
		$("#uname").empty();
		$("#uname").append("Username1");
		$("#uname").css("color", "#ACA71E");
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append("Troops: 3");
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append("Airplanes: 2");
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append("Ships: 2");
    	return false;
  	});

  	$('.groenlandia').hover(function () {
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Groenlandia");
		// change username
		$("#uname").empty();
		$("#uname").append("Username1");
		$("#uname").css("color", "#ACA71E");
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append("Troops: 3");
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append("Airplanes: 2");
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append("Ships: 2");
    	return false;
  	});

  	$('.mackenzie').hover(function () {
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Mackenzie");
		// change username
		$("#uname").empty();
		$("#uname").append("Username1");
		$("#uname").css("color", "#ACA71E");
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append("Troops: 3");
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append("Airplanes: 2");
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append("Ships: 2");
    	return false;
  	});
});

//FUNCION para el SELECT con localStorage

function my_Function(){

    av_ls1 = localStorage.getItem('aviones_1');
    bq_ls1 = localStorage.getItem('buques_1');
    t_ls1 = localStorage.getItem('tropas_1');
    /*
    var av_1 = document.getElementById("aviones_1");
    av_1.innerHTML = 0;
    var bq_1 = document.getElementById("buques_1");
    bq_1.innerHTML = 0;
    var bq_1 = document.getElementById("buques_1");
    bq_1.innerHTML = 0;
    */
    var select = document.getElementById('troops'); 

    for (var i = 0; i<= t_ls1; i++){

        var option = document.createElement('option_t');
        option.value = i;
        option.innerHTML = i;
        select.options.add(option);
    }
    
    var select = document.getElementById('airplanes'); 
    
    for (var i = 0; i<= av_ls1; i++){
    
        var option = document.createElement('option_a');
        option.value = i;
        option.innerHTML = i;
        select.options.add(option);
    }
    
    var select = document.getElementById('ship'); 
    
    for (var i = 0; i<= bq_ls1; i++){
    
        var option = document.createElement('option_b');
        option.value = i;
        option.innerHTML = i;
        select.options.add(option);
    }

}

// ATTACk elementos de localStorage del enemigo cuando es atacado

var boton_t = document.getElementById("attack-troopsBtn");

boton_t.addEventListener("click", function(){
	t_ls1 = localStorage.getItem('tropas_2');
	
	if (parseInt(t_ls1) > 0) {
		x = parseInt(t_ls1,10) - 1;
    	localStorage.setItem("tropas_2",x);
	};
    
});

var boton_at_av = document.getElementById("attack-airplaneBtn");

boton_at_av.addEventListener("click", function(){
	av_ls1 = localStorage.getItem('aviones_2');
	
	if (parseInt(av_ls1) > 0) {
		x = parseInt(av_ls1,10) - 1;
    	localStorage.setItem("aviones_2",x);
	} else {
		t_ls1 = localStorage.getItem('tropas_2');
		if (parseInt(t_ls1) > 0) {
			x = parseInt(t_ls1,10) - 5;
			if (x < 0) {
				x = 0
				localStorage.setItem("tropas_2",x);
			} else {
				localStorage.setItem("tropas_2",x);
			};
			
		};
	};
    
});

var boton_at_b = document.getElementById("attack-shipBtn");

boton_at_b.addEventListener("click", function(){
	b_ls1 = localStorage.getItem('buques_2');
	if (parseInt(b_ls1) > 0) {
		x = parseInt(b_ls1,10) - 1;
    	localStorage.setItem("buques_2",x);
	} else {
		t_ls1 = localStorage.getItem('tropas_2');
			if (parseInt(t_ls1) > 0) {
				x = parseInt(t_ls1,10) - 5;
				if (x < 0) {
					x = 0
					localStorage.setItem("tropas_2",x);
				} else {
					localStorage.setItem("tropas_2",x);
				};
			};
	};
    
});

//RECOLECT 

var boton_r = document.getElementById("search-resourcesBtn");

boton_r.addEventListener("click", function(){

    m_ls1 = localStorage.getItem('metal_1');
    x = parseInt(m_ls1,10) + 1;
	localStorage.setItem("metal_1",x);
	
	c_ls1 = localStorage.getItem('cemento_1');
    x = parseInt(c_ls1,10) + 1;
	localStorage.setItem("cemento_1",x);
	
	al_ls1 = localStorage.getItem('alimento_1');
    x = parseInt(al_ls1,10) + 1;
    localStorage.setItem("alimento_1",x);
});

