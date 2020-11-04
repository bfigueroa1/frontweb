//Generate range function: https://dev.to/ycmjason/how-to-create-range-in-javascript-539i
function range(end) {
    var ans = [];
    for (let i = 1; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}

// ATTACK elementos de localStorage del enemigo cuando es atacado

var boton_t = document.getElementById("attack-troopsBtn");

boton_t.addEventListener("click", function(){

	t_ls1 = localStorage.getItem('tropas_1');
	t_ls2 = localStorage.getItem('tropas_2');
	at_ls = localStorage.getItem('number_t');
	m_ls2 = localStorage.getItem('muralla_2');

	if (parseInt(t_ls1) > 0) {
		if (parseInt(t_ls1) > parseInt(at_ls)) {
			if (parseInt(m_ls2) > 0) {
				if (parseInt(m_ls2) > parseInt(at_ls)) {
					x = parseInt(m_ls2) - parseInt(at_ls);
					localStorage.setItem("muralla_2",x);

					t = parseInt(t_ls1) - parseInt(at_ls);
					localStorage.setItem("tropas_1",t);
				};
				if (parseInt(m_ls2) < parseInt(at_ls)) {
					x = 0;
					localStorage.setItem("muralla_2",x);

					t2 =   parseInt(t_ls2) + parseInt(m_ls2) - parseInt(at_ls);
					localStorage.setItem("tropas_2",t2);

					t = parseInt(t_ls1) - parseInt(at_ls);
					localStorage.setItem("tropas_1",t);

				};
				if (parseInt(m_ls2) == parseInt(at_ls)) {
					x=0;
					localStorage.setItem("muralla_2",x);

					t = parseInt(t_ls1) - parseInt(at_ls);
					localStorage.setItem("tropas_1",t);
				};
			} else {

				if (parseInt(at_ls) < parseInt(t_ls2)) {

					t = parseInt(t_ls1) - parseInt(at_ls);
					localStorage.setItem("tropas_1",t);

					t2 = parseInt(t_ls2) - parseInt(t_ls1);
					localStorage.setItem("tropas_2",t2);

				};
				if (parseInt(at_ls) > parseInt(t_ls2)) {
					t = parseInt(t_ls1) + parseInt(at_ls) - parseInt(t_ls2);
					localStorage.setItem("tropas_1",t);

					t2 = 0;
					localStorage.setItem("tropas_2",t2);
					//AQUI GANA EL TERRITORIO 1
				};
				if (parseInt(at_ls) = parseInt(t_ls2)) {

					t = parseInt(t_ls1) - parseInt(at_ls);
					localStorage.setItem("tropas_1",t);

					t2 = 0;
					localStorage.setItem("tropas_2",t2);
				};

			};
		} else {
			alert("No tienes suficientes tropas");
		};

	} else {
		alert("No tienes suficientes tropas");
	};
	
    
});

var boton_at_av = document.getElementById("attack-airplanesBtn2");

boton_at_av.addEventListener("click", function(){

	av_ls1 = localStorage.getItem('aviones_1');
	av_ls2 = localStorage.getItem('aviones_2');
	aa_ls = localStorage.getItem('number_a');
	t_ls2 = localStorage.getItem('tropas_2');

	if (parseInt(av_ls1) > 0) {
		if (parseInt(av_ls2) > parseInt(aa_ls)) {

			a = parseInt(av_ls1) - parseInt(aa_ls);
			localStorage.setItem("aviones_1",a);
	
			a2 = parseInt(av_ls2) - parseInt(aa_ls);
			localStorage.setItem("aviones_2",a2);
			
		};
		if (parseInt(av_ls2) < parseInt(aa_ls)) {
	
			a = parseInt(av_ls1) - parseInt(aa_ls);
			localStorage.setItem("aviones_1",a);
	
			a2 = 0
			localStorage.setItem("aviones_2",a2);
	
			t2 = parseInt(t_ls2) -((parseInt(aa_ls)-parseInt(av_ls2))*5);
			localStorage.setItem("tropas_2",t2);
	
	
		};
		if (parseInt(av_ls2) == parseInt(aa_ls)) {
	
			a = parseInt(av_ls1) - parseInt(aa_ls);
			localStorage.setItem("aviones_1",a);
	
			a2 = 0
			localStorage.setItem("aviones_2",a2);
		};
	};

    
});

var boton_at_b = document.getElementById("attack-shipsBtn2");

boton_at_b.addEventListener("click", function(){

	b_ls1 = localStorage.getItem('buques_1');
	b_ls2 = localStorage.getItem('buques_2');
	b_ls = localStorage.getItem('number_s');
	t_ls2 = localStorage.getItem('tropas_2');

	if (parseInt(b_ls1) > 0) {
		if (parseInt(b_ls2) > parseInt(b_ls)) {

			a = parseInt(b_ls1) - parseInt(b_ls);
			localStorage.setItem("buques_1",a);
	
			a2 = parseInt(b_ls2) - parseInt(b_ls);
			localStorage.setItem("buques_2",a2);
			
		};
		if (parseInt(b_ls2) < parseInt(b_ls)) {
	
			a = parseInt(b_ls1) - parseInt(b_ls);
			localStorage.setItem("buques_1",a);
	
			a2 = 0
			localStorage.setItem("buques_2",a2);
	
			t2 = parseInt(t_ls2) -((parseInt(b_ls)-parseInt(b_ls2))*5);
			localStorage.setItem("tropas_2",t2);
	
	
		};
		if (parseInt(b_ls2) == parseInt(b_ls)) {
	
			a = parseInt(b_ls1) - parseInt(b_ls);
			localStorage.setItem("buques_1",a);
	
			a2 = 0
			localStorage.setItem("buques_2",a2);
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

/* onlaed = "Function_wall()"
function start_map() {
	load_map();
	Function_wall();
}
function Function_wall() {

	let m_ls1 = localStorage.getItem('muralla_1');
	let m_ls2 = localStorage.getItem('muralla_2');

	$(".egiptoPath").css("stroke", "darkgoldenrod");
	$(".egiptoPath").css("stroke-width", m_ls1);

	$(".medio-orientePath").css("stroke", "darkgoldenrod");
	$(".medio-orientePath").css("stroke-width", m_ls2);
}
*/

function load_map() {
	let vladivostok = JSON.parse(localStorage.getItem('vladivostok'));
	let japon = JSON.parse(localStorage.getItem('japon'));
	let vietnam = JSON.parse(localStorage.getItem('vietnam'));
	let siberia = JSON.parse(localStorage.getItem('siberia'));
	let dudinka = JSON.parse(localStorage.getItem('dudinka'));
	let medio_oriente = JSON.parse(localStorage.getItem('medio-oriente'));
	let omsk = JSON.parse(localStorage.getItem('omsk'));
	let aral = JSON.parse(localStorage.getItem('aral'));
	let china = JSON.parse(localStorage.getItem('china'));
	let india = JSON.parse(localStorage.getItem('india'));
	let tchita = JSON.parse(localStorage.getItem('tchita'));
	let mongolia = JSON.parse(localStorage.getItem('mongolia'));
	let alaska = JSON.parse(localStorage.getItem('alaska'));
	let mackenzie = JSON.parse(localStorage.getItem('mackenzie'));
	let vancouver = JSON.parse(localStorage.getItem('vancouver'));
	let groenlandia = JSON.parse(localStorage.getItem('groenlandia'));
	let nueva_york = JSON.parse(localStorage.getItem('nueva-york'));
	let california = JSON.parse(localStorage.getItem('california'));
	let ottawa = JSON.parse(localStorage.getItem('ottawa'));
	let labrador = JSON.parse(localStorage.getItem('labrador'));
	let mexico = JSON.parse(localStorage.getItem('mexico'));
	let chile_bolivia_peru_ecuador = JSON.parse(localStorage.getItem('chile-bolivia-peru-ecuador'));
	let argentina_paraguay_uruguay = JSON.parse(localStorage.getItem('argentina-paraguay-uruguay'));
	let brasil = JSON.parse(localStorage.getItem('brasil'));
	let colombia_venezuela = JSON.parse(localStorage.getItem('colombia-venezuela'));
	let nueva_guinea = JSON.parse(localStorage.getItem('nueva-guinea'));
	let borneo = JSON.parse(localStorage.getItem('borneo'));
	let sumatra = JSON.parse(localStorage.getItem('sumatra'));
	let australia = JSON.parse(localStorage.getItem('australia'));
	let inglaterra = JSON.parse(localStorage.getItem('inglaterra'));
	let moscu = JSON.parse(localStorage.getItem('moscu'));
	let suecia = JSON.parse(localStorage.getItem('suecia'));
	let islandia = JSON.parse(localStorage.getItem('islandia'));
	let alemania = JSON.parse(localStorage.getItem('alemania'));
	let espana_francia_italia = JSON.parse(localStorage.getItem('espana-francia-italia'));
	let polonia_yugoeslavia = JSON.parse(localStorage.getItem('polonia-yugoeslavia'));
	let sudan = JSON.parse(localStorage.getItem('sudan'));
	let el_congo = JSON.parse(localStorage.getItem('el-congo'));
	let africa_del_sur = JSON.parse(localStorage.getItem('africa-del-sur'));
	let argelia_nigeria = JSON.parse(localStorage.getItem('argelia-nigeria'));
	let madagascar = JSON.parse(localStorage.getItem('madagascar'));
	let egipto = JSON.parse(localStorage.getItem('egipto'));
	$('.vladivostokPath').css('fill', vladivostok.army.color);
	$('.japonPath').css('fill', japon.army.color);
	$('.vietnamPath').css('fill', vietnam.army.color);
	$('.siberiaPath').css('fill', siberia.army.color);
	$('.dudinkaPath').css('fill', dudinka.army.color);
	$('.medio-orientePath').css('fill', medio_oriente.army.color);
	$('.omskPath').css('fill', omsk.army.color);
	$('.aralPath').css('fill', aral.army.color);
	$('.chinaPath').css('fill', china.army.color);
	$('.indiaPath').css('fill', india.army.color);
	$('.tchitaPath').css('fill', tchita.army.color);
	$('.mongoliaPath').css('fill', mongolia.army.color);
	$('.alaskaPath').css('fill', alaska.army.color);
	$('.mackenziePath').css('fill', mackenzie.army.color);
	$('.vancouverPath').css('fill', vancouver.army.color);
	$('.groenlandiaPath').css('fill', groenlandia.army.color);
	$('.nueva-yorkPath').css('fill', nueva_york.army.color);
	$('.californiaPath').css('fill', california.army.color);
	$('.ottawaPath').css('fill', ottawa.army.color);
	$('.labradorPath').css('fill', labrador.army.color);
	$('.mexicoPath').css('fill', mexico.army.color);
	$('.chile-bolivia-peru-ecuadorPath').css('fill', chile_bolivia_peru_ecuador.army.color);
	$('.argentina-paraguay-uruguayPath').css('fill', argentina_paraguay_uruguay.army.color);
	$('.brasilPath').css('fill', brasil.army.color);
	$('.colombia-venezuelaPath').css('fill', colombia_venezuela.army.color);
	$('.nueva-guineaPath').css('fill', nueva_guinea.army.color);
	$('.borneoPath').css('fill', borneo.army.color);
	$('.sumatraPath').css('fill', sumatra.army.color);
	$('.australiaPath').css('fill', australia.army.color);
	$('.inglaterraPath').css('fill', inglaterra.army.color);
	$('.moscuPath').css('fill', moscu.army.color);
	$('.sueciaPath').css('fill', suecia.army.color);
	$('.islandiaPath').css('fill', islandia.army.color);
	$('.alemaniaPath').css('fill', alemania.army.color);
	$('.espana-francia-italiaPath').css('fill', espana_francia_italia.army.color);
	$('.polonia-yugoeslaviaPath').css('fill', polonia_yugoeslavia.army.color);
	$('.sudanPath').css('fill', sudan.army.color);
	$('.el-congoPath').css('fill', el_congo.army.color);
	$('.africa-del-surPath').css('fill', africa_del_sur.army.color);
	$('.argelia-nigeriaPath').css('fill', argelia_nigeria.army.color);
	$('.madagascarPath').css('fill', madagascar.army.color);
	$('.egiptoPath').css('fill', egipto.army.color);
	// Show Walls
	$('.vladivostokPath').css('stroke-width', vladivostok.wall);
	$('.japonPath').css('stroke-width', japon.wall);
	$('.vietnamPath').css('stroke-width', vietnam.wall);
	$('.siberiaPath').css('stroke-width', siberia.wall);
	$('.dudinkaPath').css('stroke-width', dudinka.wall);
	$('.medio-orientePath').css('stroke-width', medio_oriente.wall);
	$('.omskPath').css('stroke-width', omsk.wall);
	$('.aralPath').css('stroke-width', aral.wall);
	$('.chinaPath').css('stroke-width', china.wall);
	$('.indiaPath').css('stroke-width', india.wall);
	$('.tchitaPath').css('stroke-width', tchita.wall);
	$('.mongoliaPath').css('stroke-width', mongolia.wall);
	$('.alaskaPath').css('stroke-width', alaska.wall);
	$('.mackenziePath').css('stroke-width', mackenzie.wall);
	$('.vancouverPath').css('stroke-width', vancouver.wall);
	$('.groenlandiaPath').css('stroke-width', groenlandia.wall);
	$('.nueva-yorkPath').css('stroke-width', nueva_york.wall);
	$('.californiaPath').css('stroke-width', california.wall);
	$('.ottawaPath').css('stroke-width', ottawa.wall);
	$('.labradorPath').css('stroke-width', labrador.wall);
	$('.mexicoPath').css('stroke-width', mexico.wall);
	$('.chile-bolivia-peru-ecuadorPath').css('stroke-width', chile_bolivia_peru_ecuador.wall);
	$('.argentina-paraguay-uruguayPath').css('stroke-width', argentina_paraguay_uruguay.wall);
	$('.brasilPath').css('stroke-width', brasil.wall);
	$('.colombia-venezuelaPath').css('stroke-width', colombia_venezuela.wall);
	$('.nueva-guineaPath').css('stroke-width', nueva_guinea.wall);
	$('.borneoPath').css('stroke-width', borneo.wall);
	$('.sumatraPath').css('stroke-width', sumatra.wall);
	$('.australiaPath').css('stroke-width', australia.wall);
	$('.inglaterraPath').css('stroke-width', inglaterra.wall);
	$('.moscuPath').css('stroke-width', moscu.wall);
	$('.sueciaPath').css('stroke-width', suecia.wall);
	$('.islandiaPath').css('stroke-width', islandia.wall);
	$('.alemaniaPath').css('stroke-width', alemania.wall);
	$('.espana-francia-italiaPath').css('stroke-width', espana_francia_italia.wall);
	$('.polonia-yugoeslaviaPath').css('stroke-width', polonia_yugoeslavia.wall);
	$('.sudanPath').css('stroke-width', sudan.wall);
	$('.el-congoPath').css('stroke-width', el_congo.wall);
	$('.africa-del-surPath').css('stroke-width', africa_del_sur.wall);
	$('.argelia-nigeriaPath').css('stroke-width', argelia_nigeria.wall);
	$('.madagascarPath').css('stroke-width', madagascar.wall);
	$('.egiptoPath').css('stroke-width', egipto.wall);
}



// Jquery functionality
$(function () {
	// open modal when a territory is clicked
	$('.modal-openBtn').click(function () {
		$('.modal').addClass('modal-open');
		// close troops attack menu if is open
		$('#troops-attackMenu').removeClass('modal-open');
		// close troops attack menu if is open
		$('#airplanes-attackMenu').removeClass('modal-open');
		// close troops attack menu if is open
        $('#ships-attackMenu').removeClass('modal-open');
		// make modal draggable
		$('.modal').draggable({handle: ".modal-header"});
		// make modal draggable
		$('#troops-attackMenu').draggable({handle: ".modal-header"});
		// make modal draggable
		$('#airplanes-attackMenu').draggable({handle: ".modal-header"});
		// make modal draggable
		$('#ships-attackMenu').draggable({handle: ".modal-header"});
		
	  });

  	//close modal
  	$('.modal-closeBtn').click(function () {
		$('.modal').removeClass('modal-open');
		// close troops attack menu if is open
		$('#troops-attackMenu').removeClass('modal-open');
		// close troops attack menu if is open
		$('#airplanes-attackMenu').removeClass('modal-open');
		// close troops attack menu if is open
        $('#ships-attackMenu').removeClass('modal-open');
  	});

	//Change Modal data
	function change_modal(territory, av_ls, bq_ls, t_ls) {   //Para agregar otro territorio copiar toda la función y cambiar
		$(".modal-title").empty();			//medio-orienteClick por (nombre_territorio)Click
		$(".modal-title").append(territory);           //Cambiar en esta linea el nombre del territorio
		$('#troops-sent').children().remove().end();
		$('#airplanes-sent').children().remove().end();
		$('#ships-sent').children().remove().end();
		for (let i of range(parseInt(t_ls))){         //Agregar en range(_) la cantidad de tropas del territorio  
			$('#troops-sent').append(`${`<option value="${i}">${i}</option>`}`)
		}
		for (let i of range(parseInt(av_ls))){         //Agregar en range(_) la cantidad de aviones del territorio  
			$('#airplanes-sent').append(`${`<option value="${i}">${i}</option>`}`)
		}
		for (let i of range(parseInt(bq_ls))){         //Agregar en range(_) la cantidad de barcos del territorio  
			$('#ships-sent').append(`${`<option value="${i}">${i}</option>`}`)
		}	
  	};

  	$('#egiptoClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let egipto = JSON.parse(localStorage.getItem('egipto'));
		let av_ls = egipto.airplanes;
		let bq_ls = egipto.ships;
		let t_ls = egipto.troops;
		change_modal('Egipto', av_ls, bq_ls, t_ls);
  	});

	$('#medio-orienteClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let medio_oriente = JSON.parse(localStorage.getItem('medio-oriente'));
		let av_ls = medio_oriente.airplanes;
		let bq_ls = medio_oriente.ships;
		let t_ls= medio_oriente.troops;
		change_modal('Medio Oriente', av_ls, bq_ls, t_ls);
	});

	$('#australiaClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let australia = JSON.parse(localStorage.getItem('australia'));
		let av_ls = australia.airplanes;
		let bq_ls = australia.ships;
		let t_ls= australia.troops;
		change_modal('Australia', av_ls, bq_ls, t_ls)
	});
	
	$('#sumatraClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let sumatra = JSON.parse(localStorage.getItem('sumatra'));
		let av_ls = sumatra.airplanes;
		let bq_ls = sumatra.ships;
		let t_ls= sumatra.troops;
		change_modal('Sumatra', av_ls, bq_ls, t_ls)
	});

	$('#borneoClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let borneo = JSON.parse(localStorage.getItem('borneo'));
		let av_ls = borneo.airplanes;
		let bq_ls = borneo.ships;
		let t_ls= borneo.troops;
		change_modal('Borneo', av_ls, bq_ls, t_ls)
  	});
	  
	  $('#nueva-guineaClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let nueva_guinea = JSON.parse(localStorage.getItem('nueva-guinea'));
		let av_ls = nueva_guinea.airplanes;
		let bq_ls = nueva_guinea.ships;
		let t_ls= nueva_guinea.troops;
		change_modal('Nueva Guinea', av_ls, bq_ls, t_ls)
  	});
	  
	  $('#vietnamClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let vietnam = JSON.parse(localStorage.getItem('vietnam'));
		let av_ls = vietnam.airplanes;
		let bq_ls = vietnam.ships;
		let t_ls= vietnam.troops;
		change_modal('Vietnam', av_ls, bq_ls, t_ls)
  	});
	
	$('#chinaClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let china = JSON.parse(localStorage.getItem('china'));
		let av_ls = china.airplanes;
		let bq_ls = china.ships;
		let t_ls= china.troops;
		change_modal('China', av_ls, bq_ls, t_ls)
  	});
	
	  $('#japonClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let japon = JSON.parse(localStorage.getItem('japon'));
		let av_ls = japon.airplanes;
		let bq_ls = japon.ships;
		let t_ls= japon.troops;
		change_modal('Japon', av_ls, bq_ls, t_ls)
  	});

	  $('#vladivostokClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let vladivostok = JSON.parse(localStorage.getItem('vladivostok'));
		let av_ls = vladivostok.airplanes;
		let bq_ls = vladivostok.ships;
		let t_ls= vladivostok.troops;
		change_modal('Vladivostok', av_ls, bq_ls, t_ls)
  	});

	$('#siberiaClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let siberia = JSON.parse(localStorage.getItem('siberia'));
		let av_ls = siberia.airplanes;
		let bq_ls = siberia.ships;
		let t_ls= siberia.troops;
		change_modal('Siberia', av_ls, bq_ls, t_ls)
  	});

	$('#tchitaClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let tchita = JSON.parse(localStorage.getItem('tchita'));
		let av_ls = tchita.airplanes;
		let bq_ls = tchita.ships;
		let t_ls= tchita.troops;
		change_modal('Tchita', av_ls, bq_ls, t_ls)
  	});

	$('#mongoliaClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let mongolia = JSON.parse(localStorage.getItem('mongolia'));
		let av_ls = mongolia.airplanes;
		let bq_ls = mongolia.ships;
		let t_ls= mongolia.troops;
		change_modal('Mongolia', av_ls, bq_ls, t_ls)
  	});

	$('#indiaClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let india = JSON.parse(localStorage.getItem('india'));
		let av_ls = india.airplanes;
		let bq_ls = india.ships;
		let t_ls= india.troops;
		change_modal('India', av_ls, bq_ls, t_ls)
  	});

	$('#aralClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let aral = JSON.parse(localStorage.getItem('aral'));
		let av_ls = aral.airplanes;
		let bq_ls = aral.ships;
		let t_ls= aral.troops;
		change_modal('Aral', av_ls, bq_ls, t_ls)
  	});

	$('#omskClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let omsk = JSON.parse(localStorage.getItem('omsk'));
		let av_ls = omsk.airplanes;
		let bq_ls = omsk.ships;
		let t_ls= omsk.troops;
		change_modal('Omsk', av_ls, bq_ls, t_ls)
  	});

	$('#dudinkaClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let dudinka = JSON.parse(localStorage.getItem('dudinka'));
		let av_ls = dudinka.airplanes;
		let bq_ls = dudinka.ships;
		let t_ls= dudinka.troops;
		change_modal('Dudinka', av_ls, bq_ls, t_ls)
  	});

	$('#africa-del-surClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let africa_del_sur = JSON.parse(localStorage.getItem('africa-del-sur'));
		let av_ls = africa_del_sur.airplanes;
		let bq_ls = africa_del_sur.ships;
		let t_ls= africa_del_sur.troops;
		change_modal('Africa del Sur', av_ls, bq_ls, t_ls)
  	});

	$('#madagascarClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let madagascar = JSON.parse(localStorage.getItem('madagascar'));
		let av_ls = madagascar.airplanes;
		let bq_ls = madagascar.ships;
		let t_ls= madagascar.troops;
		change_modal('Madagascar', av_ls, bq_ls, t_ls)
	});

	$('#el-congoClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let el_congo = JSON.parse(localStorage.getItem('el-congo'));
		let av_ls = el_congo.airplanes;
		let bq_ls = el_congo.ships;
		let t_ls= el_congo.troops;
		change_modal('El Congo', av_ls, bq_ls, t_ls)
  	});

	$('#sudanClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let sudan = JSON.parse(localStorage.getItem('sudan'));
		let av_ls = sudan.airplanes;
		let bq_ls = sudan.ships;
		let t_ls= sudan.troops;
		change_modal('Sudan', av_ls, bq_ls, t_ls)
  	});

	$('#argelia-nigeriaClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let argelia_nigeria = JSON.parse(localStorage.getItem('argelia-nigeria'));
		let av_ls = argelia_nigeria.airplanes;
		let bq_ls = argelia_nigeria.ships;
		let t_ls= argelia_nigeria.troops;
		change_modal('Argelia y Nigeria', av_ls, bq_ls, t_ls)
	});
	
	$('#moscuClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let moscu = JSON.parse(localStorage.getItem('moscu'));
		let av_ls = moscu.airplanes;
		let bq_ls = moscu.ships;
		let t_ls= moscu.troops;
		change_modal('Moscu', av_ls, bq_ls, t_ls)
  	});

	$('#sueciaClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let suecia = JSON.parse(localStorage.getItem('suecia'));
		let av_ls = suecia.airplanes;
		let bq_ls = suecia.ships;
		let t_ls= suecia.troops;
		change_modal('Suecia', av_ls, bq_ls, t_ls)
  	});

	$('#polonia-yugoeslaviaClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let polonia_yugoeslavia = JSON.parse(localStorage.getItem('polonia-yugoeslavia'));
		let av_ls = polonia_yugoeslavia.airplanes;
		let bq_ls = polonia_yugoeslavia.ships;
		let t_ls= polonia_yugoeslavia.troops;
		change_modal('Polonia y Yugoeslavia', av_ls, bq_ls, t_ls)
  	});

	$('#alemaniaClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let alemania = JSON.parse(localStorage.getItem('alemania'));
		let av_ls = alemania.airplanes;
		let bq_ls = alemania.ships;
		let t_ls= alemania.troops;
		change_modal('Alemania', av_ls, bq_ls, t_ls)
  	});

	$('#espana-francia-italiaClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let espana_francia_italia = JSON.parse(localStorage.getItem('espana-francia-italia'));
		let av_ls = espana_francia_italia.airplanes;
		let bq_ls = espana_francia_italia.ships;
		let t_ls= espana_francia_italia.troops;
		change_modal('España, Francia e Italia', av_ls, bq_ls, t_ls)
  	});

	$('#inglaterraClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let inglaterra = JSON.parse(localStorage.getItem('inglaterra'));
		let av_ls = inglaterra.airplanes;
		let bq_ls = inglaterra.ships;
		let t_ls= inglaterra.troops;
		change_modal('Inglaterra', av_ls, bq_ls, t_ls)
  	});

	$('#islandiaClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let islandia = JSON.parse(localStorage.getItem('islandia'));
		let av_ls = islandia.airplanes;
		let bq_ls = islandia.ships;
		let t_ls= islandia.troops;
		change_modal('Islandia', av_ls, bq_ls, t_ls)
  	});

	$('#chile-bolivia-peru-ecuadorClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let chile_bolivia_peru_ecuador = JSON.parse(localStorage.getItem('chile-bolivia-peru-ecuador'));
		let av_ls = chile_bolivia_peru_ecuador.airplanes;
		let bq_ls = chile_bolivia_peru_ecuador.ships;
		let t_ls= chile_bolivia_peru_ecuador.troops;
		change_modal('Chile, Bolivia, Peru y Ecuador', av_ls, bq_ls, t_ls)
  	});

	$('#argentina-paraguay-uruguayClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let argentina_paraguay_uruguay = JSON.parse(localStorage.getItem('argentina-paraguay-uruguay'));
		let av_ls = argentina_paraguay_uruguay.airplanes;
		let bq_ls = argentina_paraguay_uruguay.ships;
		let t_ls= argentina_paraguay_uruguay.troops;
		change_modal('Argentina, Paraguay y Uruguay', av_ls, bq_ls, t_ls)
  	});

	  $('#brasilClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let brasil = JSON.parse(localStorage.getItem('brasil'));
		let av_ls = brasil.airplanes;
		let bq_ls = brasil.ships;
		let t_ls= brasil.troops;
		change_modal('Brasil', av_ls, bq_ls, t_ls)
  	});

	  $('#colombia-venezuelaClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let colombia_venezuela = JSON.parse(localStorage.getItem('colombia-venezuela'));
		let av_ls = colombia_venezuela.airplanes;
		let bq_ls = colombia_venezuela.ships;
		let t_ls= colombia_venezuela.troops;
		change_modal('Colombia y Venezuela', av_ls, bq_ls, t_ls)
  	});
	
	$('#mexicoClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let mexico = JSON.parse(localStorage.getItem('mexico'));
		let av_ls = mexico.airplanes;
		let bq_ls = mexico.ships;
		let t_ls= mexico.troops;
		change_modal('Mexico', av_ls, bq_ls, t_ls)
  	});

	$('#nueva-yorkClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let nueva_york = JSON.parse(localStorage.getItem('nueva-york'));
		let av_ls = nueva_york.airplanes;
		let bq_ls = nueva_york.ships;
		let t_ls= nueva_york.troops;
		change_modal('Nueva York', av_ls, bq_ls, t_ls)
  	});

	$('#californiaClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let california = JSON.parse(localStorage.getItem('california'));
		let av_ls = california.airplanes;
		let bq_ls = california.ships;
		let t_ls= california.troops;
		change_modal('California', av_ls, bq_ls, t_ls)
  	});
	  
	$('#vancouverClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let vancouver = JSON.parse(localStorage.getItem('vancouver'));
		let av_ls = vancouver.airplanes;
		let bq_ls = vancouver.ships;
		let t_ls= vancouver.troops;
		change_modal('Vancouver', av_ls, bq_ls, t_ls)
  	});
	  
	$('#ottawaClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let ottawa = JSON.parse(localStorage.getItem('ottawa'));
		let av_ls = ottawa.airplanes;
		let bq_ls = ottawa.ships;
		let t_ls= ottawa.troops;
		change_modal('Ottawa', av_ls, bq_ls, t_ls)
  	});
	  
	$('#labradorClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let labrador = JSON.parse(localStorage.getItem('labrador'));
		let av_ls = labrador.airplanes;
		let bq_ls = labrador.ships;
		let t_ls= labrador.troops;
		change_modal('Labrador', av_ls, bq_ls, t_ls)
  	});
	
	$('#alaskaClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let alaska = JSON.parse(localStorage.getItem('alaska'));
		let av_ls = alaska.airplanes;
		let bq_ls = alaska.ships;
		let t_ls= alaska.troops;
		change_modal('Alaska', av_ls, bq_ls, t_ls)
  	});
	  
	$('#mackenzieClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let mackenzie = JSON.parse(localStorage.getItem('mackenzie'));
		let av_ls = mackenzie.airplanes;
		let bq_ls = mackenzie.ships;
		let t_ls= mackenzie.troops;
		change_modal('Mackenzie', av_ls, bq_ls, t_ls)
  	});
	  
	$('#groenlandiaClick').click(function () {   //Para agregar otro territorio copiar toda la función y cambiar
		let groenlandia = JSON.parse(localStorage.getItem('groenlandia'));
		let av_ls = groenlandia.airplanes;
		let bq_ls = groenlandia.ships;
		let t_ls= groenlandia.troops;
		change_modal('Groenlandia', av_ls, bq_ls, t_ls)
  	});
	  
	  
	  
	//Attack botton clicked
  	$('#attack-troopsBtn').click(function () {
    	// close troops attack menu if is open
        $('#troops-attackMenu').removeClass('modal-open');

	});

	//Attack botton clicked
	$('#attack-airplanesBtn2').click(function () {
    	// close troops attack menu if is open
        $('#airplanes-attackMenu').removeClass('modal-open');

	});

	//Attack botton clicked
	$('#attack-shipsBtn2').click(function () {
    	// close troops attack menu if is open
        $('#ships-attackMenu').removeClass('modal-open');

	});

	
	  
	//Attack botton clicked
	$('#open-troops-attackMenu').click(function () {
    	$('.modal').removeClass('modal-open');
    	$('#troops-attackSelection').children().remove().end();
		$('#troops-attackMenu').addClass('modal-open');
		let numb = $("#troops-sent").val();
		localStorage.setItem('number_t',numb);
    	if ($(".modal-title").text() == "Egipt"){
    		$('#troops-attackSelection').append(`${`<option value=".argelia-nigeria">Argelia-Nigeria</option>`}`)
    		$('#troops-attackSelection').append(`${`<option value=".sudan">Sudan</option>`}`)
    		$('#troops-attackSelection').append(`${`<option value=".medio-oriente">Medio Oriente</option>`}`)
    		$('#troops-attackSelection').append(`${`<option value=".espana-francia-italia">España-Francia-Italia</option>`}`)
    		$('#troops-attackSelection').append(`${`<option value=".polonia-yugoeslavia">Polonia-Yugoeslavia</option>`}`)
		} else if ($(".modal-title").text() == "Medio Oriente"){
    		$('#troops-attackSelection').append(`${`<option value=".egipto">Egipto</option>`}`)
    		$('#troops-attackSelection').append(`${`<option value=".moscu">Moscu</option>`}`)
    		$('#troops-attackSelection').append(`${`<option value=".aral">Aral</option>`}`)
    		$('#troops-attackSelection').append(`${`<option value=".india">India</option>`}`)
    		$('#troops-attackSelection').append(`${`<option value=".polonia-yugoeslavia">Polonia-Yugoeslavia</option>`}`)
		};
		
	});

	//Attack botton clicked Airplanes
	$('#attack-airplanesBtn').click(function () {
    	$('.modal').removeClass('modal-open');
    	$('#airplanes-attackSelection').children().remove().end();
		$('#airplanes-attackMenu').addClass('modal-open');
		let numb = $("#airplanes-sent").val();
		localStorage.setItem('number_a',numb);
    	for (let territory of ["vladivostok", "japon", "vietnam", "siberia", "dudinka", "medio oriente", "omsk",
    	 "aral", "china", "india", "tchita", "mongolia", "alaska", "mackenzie", "vancouver", "groenlandia", 
    	 "nueva york", "california", "ottawa", "labrador", "mexico", "chile-bolivia-peru-ecuador", 
    	 "argentina-paraguay-uruguay", "brasil", "colombia-venezuela", "nueva guinea", "borneo", "sumatra", 
    	 "australia", "inglaterra", "moscu", "suecia", "islandia", "alemania", "espana-francia-italia",
    	 "polonia-yugoeslavia", "sudan", "el congo", "africa del sur", "argelia-nigeria", "madagascar",
    	 "egipto"]){
    		$('#airplanes-attackSelection').append(`${`<option value="${territory}">${territory}</option>`}`)
    	}
  	});

  	//Attack botton clicked Ships
  	$('#attack-shipBtn').click(function () {
    	$('.modal').removeClass('modal-open');
    	$('#ships-attackSelection').children().remove().end();
		$('#ships-attackMenu').addClass('modal-open');
		let numb = $("#ships-sent").val();
		localStorage.setItem('number_s',numb);
    	for (let territory of ["vladivostok", "japon", "vietnam", "siberia", "dudinka", "medio oriente", "omsk",
    	 "aral", "china", "india", "tchita", "mongolia", "alaska", "mackenzie", "vancouver", "groenlandia", 
    	 "nueva york", "california", "ottawa", "labrador", "mexico", "chile-bolivia-peru-ecuador", 
    	 "argentina-paraguay-uruguay", "brasil", "colombia-venezuela", "nueva guinea", "borneo", "sumatra", 
    	 "australia", "inglaterra", "moscu", "suecia", "islandia", "alemania", "espana-francia-italia",
    	 "polonia-yugoeslavia", "sudan", "el congo", "africa del sur", "argelia-nigeria", "madagascar",
    	 "egipto"]){
    		$('#ships-attackSelection').append(`${`<option value="${territory}">${territory}</option>`}`)
    	}
  	});
	  
  
  
  	//Territories box

  	$('.vladivostok').hover(function () {
		let vladivostok = JSON.parse(localStorage.getItem('vladivostok'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Vladivostok");
		// change username
		$("#uname").empty();
		$("#uname").append(vladivostok.army.name);
		$("#uname").css("color", vladivostok.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${vladivostok.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${vladivostok.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${vladivostok.ships}`);
    	return false;
  	});

  	$('.japon').hover(function () {
		let japon = JSON.parse(localStorage.getItem('japon'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Japon");
		// change username
		$("#uname").empty();
		$("#uname").append(japon.army.name);
		$("#uname").css("color", japon.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${japon.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${japon.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${japon.ships}`);
    	return false;
  	});

  	$('.china').hover(function () {
		let china = JSON.parse(localStorage.getItem('china'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("China");
		// change username
		$("#uname").empty();
		$("#uname").append(china.army.name);
		$("#uname").css("color", china.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${china.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${china.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${china.ships}`);
    	return false;
  	});

  	$('.siberia').hover(function () {
		let siberia = JSON.parse(localStorage.getItem('siberia'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Siberia");
		// change username
		$("#uname").empty();
		$("#uname").append(siberia.army.name);
		$("#uname").css("color", siberia.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${siberia.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${siberia.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${siberia.ships}`);
    	return false;
  	});

  	$('.tchita').hover(function () {
		let tchita = JSON.parse(localStorage.getItem('tchita'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Tchita");
		// change username
		$("#uname").empty();
		$("#uname").append(tchita.army.name);
		$("#uname").css("color", tchita.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${tchita.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${tchita.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${tchita.ships}`);
    	return false;
  	});

  	$('.mongolia').hover(function () {
		let mongolia = JSON.parse(localStorage.getItem('mongolia'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Mongolia");
		// change username
		$("#uname").empty();
		$("#uname").append(mongolia.army.name);
		$("#uname").css("color", mongolia.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${mongolia.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${mongolia.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${mongolia.ships}`);
    	return false;
  	});

  	$('.vietnam').hover(function () {
		let vietnam = JSON.parse(localStorage.getItem('vietnam'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Vietnam");
		// change username
		$("#uname").empty();
		$("#uname").append(vietnam.army.name);
		$("#uname").css("color", vietnam.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${vietnam.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${vietnam.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${vietnam.ships}`);
    	return false;
  	});

  	$('.dudinka').hover(function () {
		let dudinka = JSON.parse(localStorage.getItem('dudinka'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Dudinka");
		// change username
		$("#uname").empty();
		$("#uname").append(dudinka.army.name);
		$("#uname").css("color", dudinka.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${dudinka.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${dudinka.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${dudinka.ships}`);
    	return false;
  	});

  	$('.omsk').hover(function () {
		let omsk = JSON.parse(localStorage.getItem('omsk'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Omsk");
		// change username
		$("#uname").empty();
		$("#uname").append(omsk.army.name);
		$("#uname").css("color", omsk.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${omsk.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${omsk.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${omsk.ships}`);
    	return false;
  	});

  	$('.aral').hover(function () {
		let aral = JSON.parse(localStorage.getItem('aral'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Aral");
		// change username
		$("#uname").empty();
		$("#uname").append(aral.army.name);
		$("#uname").css("color", aral.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${aral.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${aral.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${aral.ships}`);
    	return false;
  	});

  	$('.medio-oriente').hover(function () {
		let medio_oriente = JSON.parse(localStorage.getItem('medio-oriente'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Medio Oriente");
		// change username
		$("#uname").empty();
		$("#uname").append(medio_oriente.army.name);
		$("#uname").css("color", medio_oriente.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${medio_oriente.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${medio_oriente.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${medio_oriente.ships}`);
    	return false;
  	});

  	$('.india').hover(function () {
		let india = JSON.parse(localStorage.getItem('india'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("India");
		// change username
		$("#uname").empty();
		$("#uname").append(india.army.name);
		$("#uname").css("color", india.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${india.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${india.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${india.ships}`);
    	return false;
  	});

  	$('.australia').hover(function () {
		let australia = JSON.parse(localStorage.getItem('australia'));
		console.log('holiwis')
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Australia");
		// change username
		$("#uname").empty();
		$("#uname").append(australia.army.name);
		$("#uname").css("color", australia.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${australia.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${australia.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${australia.ships}`);
    	return false;
  	});

  	$('.nueva-guinea').hover(function () {
		let nueva_guinea = JSON.parse(localStorage.getItem('nueva-guinea'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Nueva Guinea");
		// change username
		$("#uname").empty();
		$("#uname").append(nueva_guinea.army.name);
		$("#uname").css("color", nueva_guinea.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${nueva_guinea.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${nueva_guinea.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${nueva_guinea.ships}`);
    	return false;
  	});

  	$('.borneo').hover(function () {
		let borneo = JSON.parse(localStorage.getItem('borneo'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Borneo");
		// change username
		$("#uname").empty();
		$("#uname").append(borneo.army.name);
		$("#uname").css("color", borneo.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${borneo.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${borneo.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${borneo.ships}`);
    	return false;
  	});

  	$('.sumatra').hover(function () {
		let sumatra = JSON.parse(localStorage.getItem('sumatra'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Sumatra");
		// change username
		$("#uname").empty();
		$("#uname").append(sumatra.army.name);
		$("#uname").css("color", sumatra.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${sumatra.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${sumatra.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${sumatra.ships}`);
    	return false;
  	});

  	$('.moscu').hover(function () {
		let moscu = JSON.parse(localStorage.getItem('moscu'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Moscu");
		// change username
		$("#uname").empty();
		$("#uname").append(moscu.army.name);
		$("#uname").css("color", moscu.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${moscu.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${moscu.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${moscu.ships}`);
    	return false;
  	});

  	$('.polonia-yugoeslavia').hover(function () {
		let polonia_yugoeslavia = JSON.parse(localStorage.getItem('polonia-yugoeslavia'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Polonia-Yugoeslavia");
		// change username
		$("#uname").empty();
		$("#uname").append(polonia_yugoeslavia.army.name);
		$("#uname").css("color", polonia_yugoeslavia.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${polonia_yugoeslavia.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${polonia_yugoeslavia.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${polonia_yugoeslavia.ships}`);
    	return false;
  	});

  	$('.alemania').hover(function () {
		let alemania = JSON.parse(localStorage.getItem('alemania'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Alemania");
		// change username
		$("#uname").empty();
		$("#uname").append(alemania.army.name);
		$("#uname").css("color", alemania.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${alemania.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${alemania.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${alemania.ships}`);
    	return false;
  	});

  	$('.espana-francia-italia').hover(function () {
		let espana_francia_italia = JSON.parse(localStorage.getItem('espana-francia-italia'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("España-Francia-Italia");
		// change username
		$("#uname").empty();
		$("#uname").append(espana_francia_italia.army.name);
		$("#uname").css("color", espana_francia_italia.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${espana_francia_italia.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${espana_francia_italia.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${espana_francia_italia.ships}`);
    	return false;
  	});

  	$('.inglaterra').hover(function () {
		let inglaterra = JSON.parse(localStorage.getItem('inglaterra'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Inglaterra");
		// change username
		$("#uname").empty();
		$("#uname").append(inglaterra.army.name);
		$("#uname").css("color", inglaterra.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${inglaterra.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${inglaterra.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${inglaterra.ships}`);
    	return false;
  	});

  	$('.islandia').hover(function () {
		let islandia = JSON.parse(localStorage.getItem('islandia'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Islandia");
		// change username
		$("#uname").empty();
		$("#uname").append(islandia.army.name);
		$("#uname").css("color", islandia.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${islandia.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${islandia.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${islandia.ships}`);
    	return false;
  	});

  	$('.suecia').hover(function () {
		let suecia = JSON.parse(localStorage.getItem('suecia'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Suecia");
		// change username
		$("#uname").empty();
		$("#uname").append(suecia.army.name);
		$("#uname").css("color", suecia.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${suecia.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${suecia.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${suecia.ships}`);
    	return false;
  	});

  	$('.argelia-nigeria').hover(function () {
		let argelia_nigeria = JSON.parse(localStorage.getItem('argelia-nigeria'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Argelia-Nigeria");
		// change username
		$("#uname").empty();
		$("#uname").append(argelia_nigeria.army.name);
		$("#uname").css("color", argelia_nigeria.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${argelia_nigeria.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${argelia_nigeria.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${argelia_nigeria.ships}`);
    	return false;
  	});

  	$('.egipto').hover(function () {
		let egipto = JSON.parse(localStorage.getItem('egipto'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Egipto");
		// change username
		$("#uname").empty();
		$("#uname").append(egipto.army.name);
		$("#uname").css("color", egipto.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${egipto.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${egipto.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${egipto.ships}`);
    	return false;
  	});

  	$('.sudan').hover(function () {
		let sudan = JSON.parse(localStorage.getItem('sudan'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Sudan");
		// change username
		$("#uname").empty();
		$("#uname").append(sudan.army.name);
		$("#uname").css("color", sudan.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${sudan.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${sudan.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${sudan.ships}`);
    	return false;
  	});  	

  	$('.el-congo').hover(function () {
		let el_congo = JSON.parse(localStorage.getItem('el-congo'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("El Congo");
		// change username
		$("#uname").empty();
		$("#uname").append(el_congo.army.name);
		$("#uname").css("color", el_congo.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${el_congo.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${el_congo.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${el_congo.ships}`);
    	return false;
  	});

  	$('.africa-del-sur').hover(function () {
		let africa_del_sur = JSON.parse(localStorage.getItem('africa-del-sur'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Africa del Sur");
		// change username
		$("#uname").empty();
		$("#uname").append(africa_del_sur.army.name);
		$("#uname").css("color", africa_del_sur.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${africa_del_sur.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${africa_del_sur.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${africa_del_sur.ships}`);
    	return false;
  	});

  	$('.madagascar').hover(function () {
		let madagascar = JSON.parse(localStorage.getItem('madagascar'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Madagascar");
		// change username
		$("#uname").empty();
		$("#uname").append(madagascar.army.name);
		$("#uname").css("color", madagascar.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${madagascar.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${madagascar.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${madagascar.ships}`);
    	return false;
  	});

  	$('.groenlandia').hover(function () {
		let groenlandia = JSON.parse(localStorage.getItem('groenlandia'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Groenlandia");
		// change username
		$("#uname").empty();
		$("#uname").append(groenlandia.army.name);
		$("#uname").css("color", groenlandia.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${groenlandia.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${groenlandia.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${groenlandia.ships}`);
    	return false;
  	});

  	$('.mackenzie').hover(function () {
		let mackenzie = JSON.parse(localStorage.getItem('mackenzie'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Mackenzie");
		// change username
		$("#uname").empty();
		$("#uname").append(mackenzie.army.name);
		$("#uname").css("color", mackenzie.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${mackenzie.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${mackenzie.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${mackenzie.ships}`);
    	return false;
  	});


  	$('.alaska').hover(function () {
		let alaska = JSON.parse(localStorage.getItem('alaska'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Alaska");
		// change username
		$("#uname").empty();
		$("#uname").append(alaska.army.name);
		$("#uname").css("color", alaska.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${alaska.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${alaska.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${alaska.ships}`);
    	return false;
  	});

  	$('.vancouver').hover(function () {
		let vancouver = JSON.parse(localStorage.getItem('vancouver'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Vancouver");
		// change username
		$("#uname").empty();
		$("#uname").append(vancouver.army.name);
		$("#uname").css("color", vancouver.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${vancouver.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${vancouver.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${vancouver.ships}`);
    	return false;
  	});

  	$('.ottawa').hover(function () {
		let ottawa = JSON.parse(localStorage.getItem('ottawa'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Ottawa");
		// change username
		$("#uname").empty();
		$("#uname").append(ottawa.army.name);
		$("#uname").css("color", ottawa.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${ottawa.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${ottawa.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${ottawa.ships}`);
    	return false;
  	});

  	$('.labrador').hover(function () {
		let labrador = JSON.parse(localStorage.getItem('labrador'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Labrador");
		// change username
		$("#uname").empty();
		$("#uname").append(labrador.army.name);
		$("#uname").css("color", labrador.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${labrador.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${labrador.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${labrador.ships}`);
    	return false;
  	});

  	$('.california').hover(function () {
		let california = JSON.parse(localStorage.getItem('california'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("California");
		// change username
		$("#uname").empty();
		$("#uname").append(california.army.name);
		$("#uname").css("color", california.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${california.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${california.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${california.ships}`);
    	return false;
  	});

  	$('.nueva-york').hover(function () {
		let nueva_york = JSON.parse(localStorage.getItem('nueva-york'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Nueva York");
		// change username
		$("#uname").empty();
		$("#uname").append(nueva_york.army.name);
		$("#uname").css("color", nueva_york.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${nueva_york.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${nueva_york.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${nueva_york.ships}`);
    	return false;
  	});

  	$('.mexico').hover(function () {
		let mexico = JSON.parse(localStorage.getItem('mexico'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Mexico");
		// change username
		$("#uname").empty();
		$("#uname").append(mexico.army.name);
		$("#uname").css("color", mexico.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${mexico.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${mexico.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${mexico.ships}`);
    	return false;
  	});

  	$('.colombia-venezuela').hover(function () {
		let colombia_venezuela = JSON.parse(localStorage.getItem('colombia-venezuela'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Colombia-Venezuela");
		// change username
		$("#uname").empty();
		$("#uname").append(colombia_venezuela.army.name);
		$("#uname").css("color", colombia_venezuela.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${colombia_venezuela.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${colombia_venezuela.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${colombia_venezuela.ships}`);
    	return false;
  	});

  	$('.brasil').hover(function () {
		let brasil = JSON.parse(localStorage.getItem('brasil'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Brasil");
		// change username
		$("#uname").empty();
		$("#uname").append(brasil.army.name);
		$("#uname").css("color", brasil.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${brasil.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${brasil.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${brasil.ships}`);
    	return false;
  	});

  	$('.argentina-paraguay-uruguay').hover(function () {
		let argentina_paraguay_uruguay = JSON.parse(localStorage.getItem('argentina-paraguay-uruguay'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Argentina-Paraguay-Uruguay");
		// change username
		$("#uname").empty();
		$("#uname").append(argentina_paraguay_uruguay.army.name);
		$("#uname").css("color", argentina_paraguay_uruguay.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${argentina_paraguay_uruguay.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${argentina_paraguay_uruguay.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${argentina_paraguay_uruguay.ships}`);
    	return false;
  	});

  	$('.chile-bolivia-peru-ecuador').hover(function () {
		let chile_bolivia_peru_ecuador = JSON.parse(localStorage.getItem('chile-bolivia-peru-ecuador'));
		// show territory box
		$('.territory-box').addClass('territory-box-show');
		// change territory name
		$("#territory-name").empty();
		$("#territory-name").append("Chile-Bolivia-Peru-Ecuador");
		// change username
		$("#uname").empty();
		$("#uname").append(chile_bolivia_peru_ecuador.army.name);
		$("#uname").css("color", chile_bolivia_peru_ecuador.army.color);
		// change troops number
		$("#troops-territory").empty();
		$("#troops-territory").append(`Troops: ${chile_bolivia_peru_ecuador.troops}`);
		// change airplanes number
		$("#airplanes-territory").empty();
		$("#airplanes-territory").append(`Airplanes: ${chile_bolivia_peru_ecuador.airplanes}`);
		// change ships number
		$("#ships-territory").empty();
		$("#ships-territory").append(`Ships: ${chile_bolivia_peru_ecuador.ships}`);
    	return false;
	});
	
	$('#send_moveBtn').click(function () {
		load_map();
	  });
});



