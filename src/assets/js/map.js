//const { json } = require("sequelize/types");

//Generate range function: https://dev.to/ycmjason/how-to-create-range-in-javascript-539i
function range(end) {
    var ans = [];
    for (let i = 1; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}

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
	// Usernames and territories
	let user1 = JSON.parse(localStorage.getItem('user1'));
	let user2 = JSON.parse(localStorage.getItem('user2'));
	let user3 = JSON.parse(localStorage.getItem('user3'));
	let user4 = JSON.parse(localStorage.getItem('user4'));
	let user5 = JSON.parse(localStorage.getItem('user5'));
	$("#uname1").empty();
	$("#uname1").append(user1.name);
	$("#uname1").css('color', user1.color);
	$("#territoriesu1").empty();
	$("#territoriesu1").append(`Territories: ${user1.territories}`);
	$("#uname2").empty();
	$("#uname2").append(user2.name);
	$("#uname2").css('color', user2.color);
	$("#territoriesu2").empty();
	$("#territoriesu2").append(`Territories: ${user2.territories}`);
	$("#uname3").empty();
	$("#uname3").append(user3.name);
	$("#uname3").css('color', user3.color);
	$("#territoriesu3").empty();
	$("#territoriesu3").append(`Territories: ${user3.territories}`);
	$("#uname4").empty();
	$("#uname4").append(user4.name);
	$("#uname4").css('color', user4.color);
	$("#territoriesu4").empty();
	$("#territoriesu4").append(`Territories: ${user4.territories}`);
	$("#uname5").empty();
	$("#uname5").append(user5.name);
	$("#uname5").css('color', user5.color);
	$("#territoriesu5").empty();
	$("#territoriesu5").append(`Territories: ${user5.territories}`);
}

window.onload = load_map();


function send_troops(){
	let at_ls = localStorage.getItem('number_t');
	
	if (at_ls == 'null'){
		alert(`No tienes suficientes tropas ${at_ls}`);
	}

	else {

		if ($('.modal-title').text() == 'Vladivostok'){
			let vladivostok = JSON.parse(localStorage.getItem('vladivostok'));
			vladivostok.troops -= at_ls;
			localStorage.setItem('vladivostok', JSON.stringify(vladivostok));
		}
			else if ($('.modal-title').text() == 'Japon'){
			let japon = JSON.parse(localStorage.getItem('japon'));
			japon.troops -= at_ls;
			localStorage.setItem('japon', JSON.stringify(japon));
			}
			else if ($('.modal-title').text() == 'Vietnam'){
			let vietnam = JSON.parse(localStorage.getItem('vietnam'));
			vietnam.troops -= at_ls;
			localStorage.setItem('vietnam', JSON.stringify(vietnam));
			}
			else if ($('.modal-title').text() == 'Siberia'){
			let siberia = JSON.parse(localStorage.getItem('siberia'));
			siberia.troops -= at_ls;
			localStorage.setItem('siberia', JSON.stringify(siberia));
			}
			else if ($('.modal-title').text() == 'Dudinka'){
			let dudinka = JSON.parse(localStorage.getItem('dudinka'));
			dudinka.troops -= at_ls;
			localStorage.setItem('dudinka', JSON.stringify(dudinka));
			}
			else if ($('.modal-title').text() == 'Medio Oriente'){
			let medio_oriente = JSON.parse(localStorage.getItem('medio-oriente'));
			medio_oriente.troops -= at_ls;
			localStorage.setItem('medio-oriente', JSON.stringify(medio_oriente));
			}
			else if ($('.modal-title').text() == 'Omsk'){
			let omsk = JSON.parse(localStorage.getItem('omsk'));
			omsk.troops -= at_ls;
			localStorage.setItem('omsk', JSON.stringify(omsk));
			}
			else if ($('.modal-title').text() == 'Aral'){
			let aral = JSON.parse(localStorage.getItem('aral'));
			aral.troops -= at_ls;
			localStorage.setItem('aral', JSON.stringify(aral));
			}
			else if ($('.modal-title').text() == 'China'){
			let china = JSON.parse(localStorage.getItem('china'));
			china.troops -= at_ls;
			localStorage.setItem('china', JSON.stringify(china));
			}
			else if ($('.modal-title').text() == 'India'){
			let india = JSON.parse(localStorage.getItem('india'));
			india.troops -= at_ls;
			localStorage.setItem('india', JSON.stringify(india));
			}
			else if ($('.modal-title').text() == 'Tchita'){
			let tchita = JSON.parse(localStorage.getItem('tchita'));
			tchita.troops -= at_ls;
			localStorage.setItem('tchita', JSON.stringify(tchita));
			}
			else if ($('.modal-title').text() == 'Mongolia'){
			let mongolia = JSON.parse(localStorage.getItem('mongolia'));
			mongolia.troops -= at_ls;
			localStorage.setItem('mongolia', JSON.stringify(mongolia));
			}
			else if ($('.modal-title').text() == 'Alaska'){
			let alaska = JSON.parse(localStorage.getItem('alaska'));
			alaska.troops -= at_ls;
			localStorage.setItem('alaska', JSON.stringify(alaska));
			}
			else if ($('.modal-title').text() == 'Mackenzie'){
			let mackenzie = JSON.parse(localStorage.getItem('mackenzie'));
			mackenzie.troops -= at_ls;
			localStorage.setItem('mackenzie', JSON.stringify(mackenzie));
			}
			else if ($('.modal-title').text() == 'Vancouver'){
			let vancouver = JSON.parse(localStorage.getItem('vancouver'));
			vancouver.troops -= at_ls;
			localStorage.setItem('vancouver', JSON.stringify(vancouver));
			}
			else if ($('.modal-title').text() == 'Groenlandia'){
			let groenlandia = JSON.parse(localStorage.getItem('groenlandia'));
			groenlandia.troops -= at_ls;
			localStorage.setItem('groenlandia', JSON.stringify(groenlandia));
			}
			else if ($('.modal-title').text() == 'Nueva York'){
			let nueva_york = JSON.parse(localStorage.getItem('nueva-york'));
			nueva_york.troops -= at_ls;
			localStorage.setItem('nueva-york', JSON.stringify(nueva_york));
			}
			else if ($('.modal-title').text() == 'California'){
			let california = JSON.parse(localStorage.getItem('california'));
			california.troops -= at_ls;
			localStorage.setItem('california', JSON.stringify(california));
			}
			else if ($('.modal-title').text() == 'Ottawa'){
			let ottawa = JSON.parse(localStorage.getItem('ottawa'));
			ottawa.troops -= at_ls;
			localStorage.setItem('ottawa', JSON.stringify(ottawa));
			}
			else if ($('.modal-title').text() == 'Labrador'){
			let labrador = JSON.parse(localStorage.getItem('labrador'));
			labrador.troops -= at_ls;
			localStorage.setItem('labrador', JSON.stringify(labrador));
			}
			else if ($('.modal-title').text() == 'Mexico'){
			let mexico = JSON.parse(localStorage.getItem('mexico'));
			mexico.troops -= at_ls;
			localStorage.setItem('mexico', JSON.stringify(mexico));
			}
			else if ($('.modal-title').text() == 'Chile, Bolivia, Peru y Ecuador'){
			let chile_bolivia_peru_ecuador = JSON.parse(localStorage.getItem('chile-bolivia-peru-ecuador'));
			chile_bolivia_peru_ecuador.troops -= at_ls;
			localStorage.setItem('chile-bolivia-peru-ecuador', JSON.stringify(chile_bolivia_peru_ecuador));
			}
			else if ($('.modal-title').text() == 'Argentina, Paraguay y Uruguay'){
			let argentina_paraguay_uruguay = JSON.parse(localStorage.getItem('argentina-paraguay-uruguay'));
			argentina_paraguay_uruguay.troops -= at_ls;
			localStorage.setItem('argentina-paraguay-uruguay', JSON.stringify(argentina_paraguay_uruguay));
			}
			else if ($('.modal-title').text() == 'Brasil'){
			let brasil = JSON.parse(localStorage.getItem('brasil'));
			brasil.troops -= at_ls;
			localStorage.setItem('brasil', JSON.stringify(brasil));
			}
			else if ($('.modal-title').text() == 'Colombia y Venezuela'){
			let colombia_venezuela = JSON.parse(localStorage.getItem('colombia-venezuela'));
			colombia_venezuela.troops -= at_ls;
			localStorage.setItem('colombia-venezuela', JSON.stringify(colombia_venezuela));
			}
			else if ($('.modal-title').text() == 'Nueva Guinea'){
			let nueva_guinea = JSON.parse(localStorage.getItem('nueva-guinea'));
			nueva_guinea.troops -= at_ls;
			localStorage.setItem('nueva-guinea', JSON.stringify(nueva_guinea));
			}
			else if ($('.modal-title').text() == 'Borneo'){
			let borneo = JSON.parse(localStorage.getItem('borneo'));
			borneo.troops -= at_ls;
			localStorage.setItem('borneo', JSON.stringify(borneo));
			}
			else if ($('.modal-title').text() == 'Sumatra'){
			let sumatra = JSON.parse(localStorage.getItem('sumatra'));
			sumatra.troops -= at_ls;
			localStorage.setItem('sumatra', JSON.stringify(sumatra));
			}
			else if ($('.modal-title').text() == 'Australia'){
			let australia = JSON.parse(localStorage.getItem('australia'));
			australia.troops -= at_ls;
			localStorage.setItem('australia', JSON.stringify(australia));
			}
			else if ($('.modal-title').text() == 'Inglaterra'){
			let inglaterra = JSON.parse(localStorage.getItem('inglaterra'));
			inglaterra.troops -= at_ls;
			localStorage.setItem('inglaterra', JSON.stringify(inglaterra));
			}
			else if ($('.modal-title').text() == 'Moscu'){
			let moscu = JSON.parse(localStorage.getItem('moscu'));
			moscu.troops -= at_ls;
			localStorage.setItem('moscu', JSON.stringify(moscu));
			}
			else if ($('.modal-title').text() == 'Suecia'){
			let suecia = JSON.parse(localStorage.getItem('suecia'));
			suecia.troops -= at_ls;
			localStorage.setItem('suecia', JSON.stringify(suecia));
			}
			else if ($('.modal-title').text() == 'Islandia'){
			let islandia = JSON.parse(localStorage.getItem('islandia'));
			islandia.troops -= at_ls;
			localStorage.setItem('islandia', JSON.stringify(islandia));
			}
			else if ($('.modal-title').text() == 'Alemania'){
			let alemania = JSON.parse(localStorage.getItem('alemania'));
			alemania.troops -= at_ls;
			localStorage.setItem('alemania', JSON.stringify(alemania));
			}
			else if ($('.modal-title').text() == 'España, francia e Italia'){
			let espana_francia_italia = JSON.parse(localStorage.getItem('espana-francia-italia'));
			espana_francia_italia.troops -= at_ls;
			localStorage.setItem('espana-francia-italia', JSON.stringify(espana_francia_italia));
			}
			else if ($('.modal-title').text() == 'Polonia y Yugoeslavia'){
			let polonia_yugoeslavia = JSON.parse(localStorage.getItem('polonia-yugoeslavia'));
			polonia_yugoeslavia.troops -= at_ls;
			localStorage.setItem('polonia-yugoeslavia', JSON.stringify(polonia_yugoeslavia));
			}
			else if ($('.modal-title').text() == 'Sudan'){
			let sudan = JSON.parse(localStorage.getItem('sudan'));
			sudan.troops -= at_ls;
			localStorage.setItem('sudan', JSON.stringify(sudan));
			}
			else if ($('.modal-title').text() == 'El Congo'){
			let el_congo = JSON.parse(localStorage.getItem('el-congo'));
			el_congo.troops -= at_ls;
			localStorage.setItem('el-congo', JSON.stringify(el_congo));
			}
			else if ($('.modal-title').text() == 'Africa del Sur'){
			let africa_del_sur = JSON.parse(localStorage.getItem('africa-del-sur'));
			africa_del_sur.troops -= at_ls;
			localStorage.setItem('africa-del-sur', JSON.stringify(africa_del_sur));
			}
			else if ($('.modal-title').text() == 'Argelia y Nigeria'){
			let argelia_nigeria = JSON.parse(localStorage.getItem('argelia-nigeria'));
			argelia_nigeria.troops -= at_ls;
			localStorage.setItem('argelia-nigeria', JSON.stringify(argelia_nigeria));
			}
			else if ($('.modal-title').text() == 'Madagascar'){
			let madagascar = JSON.parse(localStorage.getItem('madagascar'));
			madagascar.troops -= at_ls;
			localStorage.setItem('madagascar', JSON.stringify(madagascar));
			}
			else if ($('.modal-title').text() == 'Egipto'){
			let egipto = JSON.parse(localStorage.getItem('egipto'));
			egipto.troops -= at_ls;
			localStorage.setItem('egipto', JSON.stringify(egipto));
			}
		}
	}

// ATTACK elementos de localStorage del enemigo cuando es atacado

$('#attack-troopsBtn').click(function () {
	send_troops();
	at_ls = localStorage.getItem('number_t');
	if (at_ls !== 'null'){
		let attacked_territory = $("#troops-attackSelection").val();
		let jugada = JSON.parse(localStorage.getItem('jugada'));
		let attack = {
			attack_territory: $('.modal-title').text(), 
			attacked_territory: attacked_territory,  
			troops: localStorage.getItem('number_t')
		};
		jugada.troop_attack.push(attack);
		localStorage.setItem('jugada', JSON.stringify(jugada));

		
	}
  });

var boton_at_av = document.getElementById("attack-airplanesBtn2");

boton_at_av.addEventListener("click", function(){

	aa_ls = localStorage.getItem('number_a');

	if (aa_ls == 'null'){
		alert("No tienes suficientes aviones");
	}

	else {
		if ($('.modal-title').text() == 'Vladivostok'){
			let vladivostok = JSON.parse(localStorage.getItem('vladivostok'));
			vladivostok.airplanes -= aa_ls;
			localStorage.setItem('vladivostok', JSON.stringify(vladivostok));
			}
			else if ($('.modal-title').text() == 'Japon'){
			let japon = JSON.parse(localStorage.getItem('japon'));
			japon.airplanes -= aa_ls;
			localStorage.setItem('japon', JSON.stringify(japon));
			}
			else if ($('.modal-title').text() == 'Vietnam'){
			let vietnam = JSON.parse(localStorage.getItem('vietnam'));
			vietnam.airplanes -= aa_ls;
			localStorage.setItem('vietnam', JSON.stringify(vietnam));
			}
			else if ($('.modal-title').text() == 'Siberia'){
			let siberia = JSON.parse(localStorage.getItem('siberia'));
			siberia.airplanes -= aa_ls;
			localStorage.setItem('siberia', JSON.stringify(siberia));
			}
			else if ($('.modal-title').text() == 'Dudinka'){
			let dudinka = JSON.parse(localStorage.getItem('dudinka'));
			dudinka.airplanes -= aa_ls;
			localStorage.setItem('dudinka', JSON.stringify(dudinka));
			}
			else if ($('.modal-title').text() == 'Medio Oriente'){
			let medio_oriente = JSON.parse(localStorage.getItem('medio-oriente'));
			medio_oriente.airplanes -= aa_ls;
			localStorage.setItem('medio-oriente', JSON.stringify(medio_oriente));
			}
			else if ($('.modal-title').text() == 'Omsk'){
			let omsk = JSON.parse(localStorage.getItem('omsk'));
			omsk.airplanes -= aa_ls;
			localStorage.setItem('omsk', JSON.stringify(omsk));
			}
			else if ($('.modal-title').text() == 'Aral'){
			let aral = JSON.parse(localStorage.getItem('aral'));
			aral.airplanes -= aa_ls;
			localStorage.setItem('aral', JSON.stringify(aral));
			}
			else if ($('.modal-title').text() == 'China'){
			let china = JSON.parse(localStorage.getItem('china'));
			china.airplanes -= aa_ls;
			localStorage.setItem('china', JSON.stringify(china));
			}
			else if ($('.modal-title').text() == 'India'){
			let india = JSON.parse(localStorage.getItem('india'));
			india.airplanes -= aa_ls;
			localStorage.setItem('india', JSON.stringify(india));
			}
			else if ($('.modal-title').text() == 'Tchita'){
			let tchita = JSON.parse(localStorage.getItem('tchita'));
			tchita.airplanes -= aa_ls;
			localStorage.setItem('tchita', JSON.stringify(tchita));
			}
			else if ($('.modal-title').text() == 'Mongolia'){
			let mongolia = JSON.parse(localStorage.getItem('mongolia'));
			mongolia.airplanes -= aa_ls;
			localStorage.setItem('mongolia', JSON.stringify(mongolia));
			}
			else if ($('.modal-title').text() == 'Alaska'){
			let alaska = JSON.parse(localStorage.getItem('alaska'));
			alaska.airplanes -= aa_ls;
			localStorage.setItem('alaska', JSON.stringify(alaska));
			}
			else if ($('.modal-title').text() == 'Mackenzie'){
			let mackenzie = JSON.parse(localStorage.getItem('mackenzie'));
			mackenzie.airplanes -= aa_ls;
			localStorage.setItem('mackenzie', JSON.stringify(mackenzie));
			}
			else if ($('.modal-title').text() == 'Vancouver'){
			let vancouver = JSON.parse(localStorage.getItem('vancouver'));
			vancouver.airplanes -= aa_ls;
			localStorage.setItem('vancouver', JSON.stringify(vancouver));
			}
			else if ($('.modal-title').text() == 'Groenlandia'){
			let groenlandia = JSON.parse(localStorage.getItem('groenlandia'));
			groenlandia.airplanes -= aa_ls;
			localStorage.setItem('groenlandia', JSON.stringify(groenlandia));
			}
			else if ($('.modal-title').text() == 'Nueva York'){
			let nueva_york = JSON.parse(localStorage.getItem('nueva-york'));
			nueva_york.airplanes -= aa_ls;
			localStorage.setItem('nueva-york', JSON.stringify(nueva_york));
			}
			else if ($('.modal-title').text() == 'California'){
			let california = JSON.parse(localStorage.getItem('california'));
			california.airplanes -= aa_ls;
			localStorage.setItem('california', JSON.stringify(california));
			}
			else if ($('.modal-title').text() == 'Ottawa'){
			let ottawa = JSON.parse(localStorage.getItem('ottawa'));
			ottawa.airplanes -= aa_ls;
			localStorage.setItem('ottawa', JSON.stringify(ottawa));
			}
			else if ($('.modal-title').text() == 'Labrador'){
			let labrador = JSON.parse(localStorage.getItem('labrador'));
			labrador.airplanes -= aa_ls;
			localStorage.setItem('labrador', JSON.stringify(labrador));
			}
			else if ($('.modal-title').text() == 'Mexico'){
			let mexico = JSON.parse(localStorage.getItem('mexico'));
			mexico.airplanes -= aa_ls;
			localStorage.setItem('mexico', JSON.stringify(mexico));
			}
			else if ($('.modal-title').text() == 'Chile, Bolivia, Peru y Ecuador'){
			let chile_bolivia_peru_ecuador = JSON.parse(localStorage.getItem('chile-bolivia-peru-ecuador'));
			chile_bolivia_peru_ecuador.airplanes -= aa_ls;
			localStorage.setItem('chile-bolivia-peru-ecuador', JSON.stringify(chile_bolivia_peru_ecuador));
			}
			else if ($('.modal-title').text() == 'Argentina, Paraguay y Uruguay'){
			let argentina_paraguay_uruguay = JSON.parse(localStorage.getItem('argentina-paraguay-uruguay'));
			argentina_paraguay_uruguay.airplanes -= aa_ls;
			localStorage.setItem('argentina-paraguay-uruguay', JSON.stringify(argentina_paraguay_uruguay));
			}
			else if ($('.modal-title').text() == 'Brasil'){
			let brasil = JSON.parse(localStorage.getItem('brasil'));
			brasil.airplanes -= aa_ls;
			localStorage.setItem('brasil', JSON.stringify(brasil));
			}
			else if ($('.modal-title').text() == 'Colombia y Venezuela'){
			let colombia_venezuela = JSON.parse(localStorage.getItem('colombia-venezuela'));
			colombia_venezuela.airplanes -= aa_ls;
			localStorage.setItem('colombia-venezuela', JSON.stringify(colombia_venezuela));
			}
			else if ($('.modal-title').text() == 'Nueva Guinea'){
			let nueva_guinea = JSON.parse(localStorage.getItem('nueva-guinea'));
			nueva_guinea.airplanes -= aa_ls;
			localStorage.setItem('nueva-guinea', JSON.stringify(nueva_guinea));
			}
			else if ($('.modal-title').text() == 'Borneo'){
			let borneo = JSON.parse(localStorage.getItem('borneo'));
			borneo.airplanes -= aa_ls;
			localStorage.setItem('borneo', JSON.stringify(borneo));
			}
			else if ($('.modal-title').text() == 'Sumatra'){
			let sumatra = JSON.parse(localStorage.getItem('sumatra'));
			sumatra.airplanes -= aa_ls;
			localStorage.setItem('sumatra', JSON.stringify(sumatra));
			}
			else if ($('.modal-title').text() == 'Australia'){
			let australia = JSON.parse(localStorage.getItem('australia'));
			australia.airplanes -= aa_ls;
			localStorage.setItem('australia', JSON.stringify(australia));
			}
			else if ($('.modal-title').text() == 'Inglaterra'){
			let inglaterra = JSON.parse(localStorage.getItem('inglaterra'));
			inglaterra.airplanes -= aa_ls;
			localStorage.setItem('inglaterra', JSON.stringify(inglaterra));
			}
			else if ($('.modal-title').text() == 'Moscu'){
			let moscu = JSON.parse(localStorage.getItem('moscu'));
			moscu.airplanes -= aa_ls;
			localStorage.setItem('moscu', JSON.stringify(moscu));
			}
			else if ($('.modal-title').text() == 'Suecia'){
			let suecia = JSON.parse(localStorage.getItem('suecia'));
			suecia.airplanes -= aa_ls;
			localStorage.setItem('suecia', JSON.stringify(suecia));
			}
			else if ($('.modal-title').text() == 'Islandia'){
			let islandia = JSON.parse(localStorage.getItem('islandia'));
			islandia.airplanes -= aa_ls;
			localStorage.setItem('islandia', JSON.stringify(islandia));
			}
			else if ($('.modal-title').text() == 'Alemania'){
			let alemania = JSON.parse(localStorage.getItem('alemania'));
			alemania.airplanes -= aa_ls;
			localStorage.setItem('alemania', JSON.stringify(alemania));
			}
			else if ($('.modal-title').text() == 'España, francia e Italia'){
			let espana_francia_italia = JSON.parse(localStorage.getItem('espana-francia-italia'));
			espana_francia_italia.airplanes -= aa_ls;
			localStorage.setItem('espana-francia-italia', JSON.stringify(espana_francia_italia));
			}
			else if ($('.modal-title').text() == 'Polonia y Yugoeslavia'){
			let polonia_yugoeslavia = JSON.parse(localStorage.getItem('polonia-yugoeslavia'));
			polonia_yugoeslavia.airplanes -= aa_ls;
			localStorage.setItem('polonia-yugoeslavia', JSON.stringify(polonia_yugoeslavia));
			}
			else if ($('.modal-title').text() == 'Sudan'){
			let sudan = JSON.parse(localStorage.getItem('sudan'));
			sudan.airplanes -= aa_ls;
			localStorage.setItem('sudan', JSON.stringify(sudan));
			}
			else if ($('.modal-title').text() == 'El Congo'){
			let el_congo = JSON.parse(localStorage.getItem('el-congo'));
			el_congo.airplanes -= aa_ls;
			localStorage.setItem('el-congo', JSON.stringify(el_congo));
			}
			else if ($('.modal-title').text() == 'Africa del Sur'){
			let africa_del_sur = JSON.parse(localStorage.getItem('africa-del-sur'));
			africa_del_sur.airplanes -= aa_ls;
			localStorage.setItem('africa-del-sur', JSON.stringify(africa_del_sur));
			}
			else if ($('.modal-title').text() == 'Argelia y Nigeria'){
			let argelia_nigeria = JSON.parse(localStorage.getItem('argelia-nigeria'));
			argelia_nigeria.airplanes -= aa_ls;
			localStorage.setItem('argelia-nigeria', JSON.stringify(argelia_nigeria));
			}
			else if ($('.modal-title').text() == 'Madagascar'){
			let madagascar = JSON.parse(localStorage.getItem('madagascar'));
			madagascar.airplanes -= aa_ls;
			localStorage.setItem('madagascar', JSON.stringify(madagascar));
			}
			else if ($('.modal-title').text() == 'Egipto'){
			let egipto = JSON.parse(localStorage.getItem('egipto'));
			egipto.airplanes -= aa_ls;
			localStorage.setItem('egipto', JSON.stringify(egipto));
			}
		let attacked_territory = $("#airplanes-attackSelection").val();
		let jugada = JSON.parse(localStorage.getItem('jugada'));
		let attack = {
			attack_territory: $('.modal-title').text(), 
			attacked_territory: attacked_territory,  
			troops: aa_ls
		};
		jugada.airplane_attack.push(attack);
		localStorage.setItem('jugada', JSON.stringify(jugada));
	}
    
});

var boton_at_b = document.getElementById("attack-shipsBtn2");

boton_at_b.addEventListener("click", function(){

	b_ls = localStorage.getItem('number_s');

	if (b_ls == 'null'){
		alert("No tienes suficientes buques");
	}

	else {
		if ($('.modal-title').text() == 'Vladivostok'){
			let vladivostok = JSON.parse(localStorage.getItem('vladivostok'));
			vladivostok.ships -= b_ls;
			localStorage.setItem('vladivostok', JSON.stringify(vladivostok));
			}
			else if ($('.modal-title').text() == 'Japon'){
			let japon = JSON.parse(localStorage.getItem('japon'));
			japon.ships -= b_ls;
			localStorage.setItem('japon', JSON.stringify(japon));
			}
			else if ($('.modal-title').text() == 'Vietnam'){
			let vietnam = JSON.parse(localStorage.getItem('vietnam'));
			vietnam.ships -= b_ls;
			localStorage.setItem('vietnam', JSON.stringify(vietnam));
			}
			else if ($('.modal-title').text() == 'Siberia'){
			let siberia = JSON.parse(localStorage.getItem('siberia'));
			siberia.ships -= b_ls;
			localStorage.setItem('siberia', JSON.stringify(siberia));
			}
			else if ($('.modal-title').text() == 'Dudinka'){
			let dudinka = JSON.parse(localStorage.getItem('dudinka'));
			dudinka.ships -= b_ls;
			localStorage.setItem('dudinka', JSON.stringify(dudinka));
			}
			else if ($('.modal-title').text() == 'Medio Oriente'){
			let medio_oriente = JSON.parse(localStorage.getItem('medio-oriente'));
			medio_oriente.ships -= b_ls;
			localStorage.setItem('medio-oriente', JSON.stringify(medio_oriente));
			}
			else if ($('.modal-title').text() == 'Omsk'){
			let omsk = JSON.parse(localStorage.getItem('omsk'));
			omsk.ships -= b_ls;
			localStorage.setItem('omsk', JSON.stringify(omsk));
			}
			else if ($('.modal-title').text() == 'Aral'){
			let aral = JSON.parse(localStorage.getItem('aral'));
			aral.ships -= b_ls;
			localStorage.setItem('aral', JSON.stringify(aral));
			}
			else if ($('.modal-title').text() == 'China'){
			let china = JSON.parse(localStorage.getItem('china'));
			china.ships -= b_ls;
			localStorage.setItem('china', JSON.stringify(china));
			}
			else if ($('.modal-title').text() == 'India'){
			let india = JSON.parse(localStorage.getItem('india'));
			india.ships -= b_ls;
			localStorage.setItem('india', JSON.stringify(india));
			}
			else if ($('.modal-title').text() == 'Tchita'){
			let tchita = JSON.parse(localStorage.getItem('tchita'));
			tchita.ships -= b_ls;
			localStorage.setItem('tchita', JSON.stringify(tchita));
			}
			else if ($('.modal-title').text() == 'Mongolia'){
			let mongolia = JSON.parse(localStorage.getItem('mongolia'));
			mongolia.ships -= b_ls;
			localStorage.setItem('mongolia', JSON.stringify(mongolia));
			}
			else if ($('.modal-title').text() == 'Alaska'){
			let alaska = JSON.parse(localStorage.getItem('alaska'));
			alaska.ships -= b_ls;
			localStorage.setItem('alaska', JSON.stringify(alaska));
			}
			else if ($('.modal-title').text() == 'Mackenzie'){
			let mackenzie = JSON.parse(localStorage.getItem('mackenzie'));
			mackenzie.ships -= b_ls;
			localStorage.setItem('mackenzie', JSON.stringify(mackenzie));
			}
			else if ($('.modal-title').text() == 'Vancouver'){
			let vancouver = JSON.parse(localStorage.getItem('vancouver'));
			vancouver.ships -= b_ls;
			localStorage.setItem('vancouver', JSON.stringify(vancouver));
			}
			else if ($('.modal-title').text() == 'Groenlandia'){
			let groenlandia = JSON.parse(localStorage.getItem('groenlandia'));
			groenlandia.ships -= b_ls;
			localStorage.setItem('groenlandia', JSON.stringify(groenlandia));
			}
			else if ($('.modal-title').text() == 'Nueva York'){
			let nueva_york = JSON.parse(localStorage.getItem('nueva-york'));
			nueva_york.ships -= b_ls;
			localStorage.setItem('nueva-york', JSON.stringify(nueva_york));
			}
			else if ($('.modal-title').text() == 'California'){
			let california = JSON.parse(localStorage.getItem('california'));
			california.ships -= b_ls;
			localStorage.setItem('california', JSON.stringify(california));
			}
			else if ($('.modal-title').text() == 'Ottawa'){
			let ottawa = JSON.parse(localStorage.getItem('ottawa'));
			ottawa.ships -= b_ls;
			localStorage.setItem('ottawa', JSON.stringify(ottawa));
			}
			else if ($('.modal-title').text() == 'Labrador'){
			let labrador = JSON.parse(localStorage.getItem('labrador'));
			labrador.ships -= b_ls;
			localStorage.setItem('labrador', JSON.stringify(labrador));
			}
			else if ($('.modal-title').text() == 'Mexico'){
			let mexico = JSON.parse(localStorage.getItem('mexico'));
			mexico.ships -= b_ls;
			localStorage.setItem('mexico', JSON.stringify(mexico));
			}
			else if ($('.modal-title').text() == 'Chile, Bolivia, Peru y Ecuador'){
			let chile_bolivia_peru_ecuador = JSON.parse(localStorage.getItem('chile-bolivia-peru-ecuador'));
			chile_bolivia_peru_ecuador.ships -= b_ls;
			localStorage.setItem('chile-bolivia-peru-ecuador', JSON.stringify(chile_bolivia_peru_ecuador));
			}
			else if ($('.modal-title').text() == 'Argentina, Paraguay y Uruguay'){
			let argentina_paraguay_uruguay = JSON.parse(localStorage.getItem('argentina-paraguay-uruguay'));
			argentina_paraguay_uruguay.ships -= b_ls;
			localStorage.setItem('argentina-paraguay-uruguay', JSON.stringify(argentina_paraguay_uruguay));
			}
			else if ($('.modal-title').text() == 'Brasil'){
			let brasil = JSON.parse(localStorage.getItem('brasil'));
			brasil.ships -= b_ls;
			localStorage.setItem('brasil', JSON.stringify(brasil));
			}
			else if ($('.modal-title').text() == 'Colombia y Venezuela'){
			let colombia_venezuela = JSON.parse(localStorage.getItem('colombia-venezuela'));
			colombia_venezuela.ships -= b_ls;
			localStorage.setItem('colombia-venezuela', JSON.stringify(colombia_venezuela));
			}
			else if ($('.modal-title').text() == 'Nueva Guinea'){
			let nueva_guinea = JSON.parse(localStorage.getItem('nueva-guinea'));
			nueva_guinea.ships -= b_ls;
			localStorage.setItem('nueva-guinea', JSON.stringify(nueva_guinea));
			}
			else if ($('.modal-title').text() == 'Borneo'){
			let borneo = JSON.parse(localStorage.getItem('borneo'));
			borneo.ships -= b_ls;
			localStorage.setItem('borneo', JSON.stringify(borneo));
			}
			else if ($('.modal-title').text() == 'Sumatra'){
			let sumatra = JSON.parse(localStorage.getItem('sumatra'));
			sumatra.ships -= b_ls;
			localStorage.setItem('sumatra', JSON.stringify(sumatra));
			}
			else if ($('.modal-title').text() == 'Australia'){
			let australia = JSON.parse(localStorage.getItem('australia'));
			australia.ships -= b_ls;
			localStorage.setItem('australia', JSON.stringify(australia));
			}
			else if ($('.modal-title').text() == 'Inglaterra'){
			let inglaterra = JSON.parse(localStorage.getItem('inglaterra'));
			inglaterra.ships -= b_ls;
			localStorage.setItem('inglaterra', JSON.stringify(inglaterra));
			}
			else if ($('.modal-title').text() == 'Moscu'){
			let moscu = JSON.parse(localStorage.getItem('moscu'));
			moscu.ships -= b_ls;
			localStorage.setItem('moscu', JSON.stringify(moscu));
			}
			else if ($('.modal-title').text() == 'Suecia'){
			let suecia = JSON.parse(localStorage.getItem('suecia'));
			suecia.ships -= b_ls;
			localStorage.setItem('suecia', JSON.stringify(suecia));
			}
			else if ($('.modal-title').text() == 'Islandia'){
			let islandia = JSON.parse(localStorage.getItem('islandia'));
			islandia.ships -= b_ls;
			localStorage.setItem('islandia', JSON.stringify(islandia));
			}
			else if ($('.modal-title').text() == 'Alemania'){
			let alemania = JSON.parse(localStorage.getItem('alemania'));
			alemania.ships -= b_ls;
			localStorage.setItem('alemania', JSON.stringify(alemania));
			}
			else if ($('.modal-title').text() == 'España, francia e Italia'){
			let espana_francia_italia = JSON.parse(localStorage.getItem('espana-francia-italia'));
			espana_francia_italia.ships -= b_ls;
			localStorage.setItem('espana,-francia-italia', JSON.stringify(espana_francia_italia));
			}
			else if ($('.modal-title').text() == 'Polonia y Yugoeslavia'){
			let polonia_yugoeslavia = JSON.parse(localStorage.getItem('polonia-yugoeslavia'));
			polonia_yugoeslavia.ships -= b_ls;
			localStorage.setItem('polonia-yugoeslavia', JSON.stringify(polonia_yugoeslavia));
			}
			else if ($('.modal-title').text() == 'Sudan'){
			let sudan = JSON.parse(localStorage.getItem('sudan'));
			sudan.ships -= b_ls;
			localStorage.setItem('sudan', JSON.stringify(sudan));
			}
			else if ($('.modal-title').text() == 'El Congo'){
			let el_congo = JSON.parse(localStorage.getItem('el-congo'));
			el_congo.ships -= b_ls;
			localStorage.setItem('el-congo', JSON.stringify(el_congo));
			}
			else if ($('.modal-title').text() == 'Africa del Sur'){
			let africa_del_sur = JSON.parse(localStorage.getItem('africa-del-sur'));
			africa_del_sur.ships -= b_ls;
			localStorage.setItem('africa-del-sur', JSON.stringify(africa_del_sur));
			}
			else if ($('.modal-title').text() == 'Argelia y Nigeria'){
			let argelia_nigeria = JSON.parse(localStorage.getItem('argelia-nigeria'));
			argelia_nigeria.ships -= b_ls;
			localStorage.setItem('argelia-nigeria', JSON.stringify(argelia_nigeria));
			}
			else if ($('.modal-title').text() == 'Madagascar'){
			let madagascar = JSON.parse(localStorage.getItem('madagascar'));
			madagascar.ships -= b_ls;
			localStorage.setItem('madagascar', JSON.stringify(madagascar));
			}
			else if ($('.modal-title').text() == 'Egipto'){
			let egipto = JSON.parse(localStorage.getItem('egipto'));
			egipto.ships -= b_ls;
			localStorage.setItem('egipto', JSON.stringify(egipto));
		}
    
		let attacked_territory = $("#ships-attackSelection").val();
		let jugada = JSON.parse(localStorage.getItem('jugada'));
		let attack = {
			attack_territory: $('.modal-title').text(), 
			attacked_territory: attacked_territory,  
			troops: b_ls
		};
		jugada.ship_attack.push(attack);
		localStorage.setItem('jugada', JSON.stringify(jugada));
	}
});


// Jquery functionality
$(function () {
	// open modal when a territory is clicked
	function open_modal() {
		if ($(".modal-title").text() == 'Make Your Move') {
			null;
		}
		else {
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
		}
	  };

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
		for (let i of range(parseInt(t_ls)-1)){         //Agregar en range(_) la cantidad de tropas del territorio  
			$('#troops-sent').append(`${`<option value="${i}">${i}</option>`}`)
		}
		for (let i of range(parseInt(av_ls))){         //Agregar en range(_) la cantidad de aviones del territorio  
			$('#airplanes-sent').append(`${`<option value="${i}">${i}</option>`}`)
		}
		for (let i of range(parseInt(bq_ls))){         //Agregar en range(_) la cantidad de barcos del territorio  
			$('#ships-sent').append(`${`<option value="${i}">${i}</option>`}`)
		}	
  	};

  	$('#vladivostokClick').click(function () {
		let vladivostok = JSON.parse(localStorage.getItem('vladivostok'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (vladivostok.army.name == current_user.username) {
			let av_ls = vladivostok.airplanes;
			let bq_ls = vladivostok.ships;
			let t_ls = vladivostok.troops;
			change_modal('Vladivostok', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#japonClick').click(function () {
		let japon = JSON.parse(localStorage.getItem('japon'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (japon.army.name == current_user.username) {
			let av_ls = japon.airplanes;
			let bq_ls = japon.ships;
			let t_ls = japon.troops;
			change_modal('Japon', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#vietnamClick').click(function () {
		let vietnam = JSON.parse(localStorage.getItem('vietnam'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (vietnam.army.name == current_user.username) {
			let av_ls = vietnam.airplanes;
			let bq_ls = vietnam.ships;
			let t_ls = vietnam.troops;
			change_modal('Vietnam', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#siberiaClick').click(function () {
		let siberia = JSON.parse(localStorage.getItem('siberia'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (siberia.army.name == current_user.username) {
			let av_ls = siberia.airplanes;
			let bq_ls = siberia.ships;
			let t_ls = siberia.troops;
			change_modal('Siberia', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#dudinkaClick').click(function () {
		let dudinka = JSON.parse(localStorage.getItem('dudinka'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (dudinka.army.name == current_user.username) {
			let av_ls = dudinka.airplanes;
			let bq_ls = dudinka.ships;
			let t_ls = dudinka.troops;
			change_modal('Dudinka', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#medio-orienteClick').click(function () {
		let medio_oriente = JSON.parse(localStorage.getItem('medio-oriente'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (medio_oriente.army.name == current_user.username) {
			let av_ls = medio_oriente.airplanes;
			let bq_ls = medio_oriente.ships;
			let t_ls = medio_oriente.troops;
			change_modal('Medio Oriente', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#omskClick').click(function () {
		let omsk = JSON.parse(localStorage.getItem('omsk'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (omsk.army.name == current_user.username) {
			let av_ls = omsk.airplanes;
			let bq_ls = omsk.ships;
			let t_ls = omsk.troops;
			change_modal('Omsk', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#aralClick').click(function () {
		let aral = JSON.parse(localStorage.getItem('aral'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (aral.army.name == current_user.username) {
			let av_ls = aral.airplanes;
			let bq_ls = aral.ships;
			let t_ls = aral.troops;
			change_modal('Aral', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#chinaClick').click(function () {
		let china = JSON.parse(localStorage.getItem('china'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (china.army.name == current_user.username) {
			let av_ls = china.airplanes;
			let bq_ls = china.ships;
			let t_ls = china.troops;
			change_modal('China', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#indiaClick').click(function () {
		let india = JSON.parse(localStorage.getItem('india'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (india.army.name == current_user.username) {
			let av_ls = india.airplanes;
			let bq_ls = india.ships;
			let t_ls = india.troops;
			change_modal('India', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#tchitaClick').click(function () {
		let tchita = JSON.parse(localStorage.getItem('tchita'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (tchita.army.name == current_user.username) {
			let av_ls = tchita.airplanes;
			let bq_ls = tchita.ships;
			let t_ls = tchita.troops;
			change_modal('Tchita', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#mongoliaClick').click(function () {
		let mongolia = JSON.parse(localStorage.getItem('mongolia'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (mongolia.army.name == current_user.username) {
			let av_ls = mongolia.airplanes;
			let bq_ls = mongolia.ships;
			let t_ls = mongolia.troops;
			change_modal('Mongolia', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#alaskaClick').click(function () {
		let alaska = JSON.parse(localStorage.getItem('alaska'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (alaska.army.name == current_user.username) {
			let av_ls = alaska.airplanes;
			let bq_ls = alaska.ships;
			let t_ls = alaska.troops;
			change_modal('Alaska', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#mackenzieClick').click(function () {
		let mackenzie = JSON.parse(localStorage.getItem('mackenzie'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (mackenzie.army.name == current_user.username) {
			let av_ls = mackenzie.airplanes;
			let bq_ls = mackenzie.ships;
			let t_ls = mackenzie.troops;
			change_modal('Mackenzie', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#vancouverClick').click(function () {
		let vancouver = JSON.parse(localStorage.getItem('vancouver'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (vancouver.army.name == current_user.username) {
			let av_ls = vancouver.airplanes;
			let bq_ls = vancouver.ships;
			let t_ls = vancouver.troops;
			change_modal('Vancouver', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#groenlandiaClick').click(function () {
		let groenlandia = JSON.parse(localStorage.getItem('groenlandia'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (groenlandia.army.name == current_user.username) {
			let av_ls = groenlandia.airplanes;
			let bq_ls = groenlandia.ships;
			let t_ls = groenlandia.troops;
			change_modal('Groenlandia', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#nueva-yorkClick').click(function () {
		let nueva_york = JSON.parse(localStorage.getItem('nueva-york'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (nueva_york.army.name == current_user.username) {
			let av_ls = nueva_york.airplanes;
			let bq_ls = nueva_york.ships;
			let t_ls = nueva_york.troops;
			change_modal('Nueva York', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#californiaClick').click(function () {
		let california = JSON.parse(localStorage.getItem('california'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (california.army.name == current_user.username) {
			let av_ls = california.airplanes;
			let bq_ls = california.ships;
			let t_ls = california.troops;
			change_modal('California', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#ottawaClick').click(function () {
		let ottawa = JSON.parse(localStorage.getItem('ottawa'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (ottawa.army.name == current_user.username) {
			let av_ls = ottawa.airplanes;
			let bq_ls = ottawa.ships;
			let t_ls = ottawa.troops;
			change_modal('Ottawa', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#labradorClick').click(function () {
		let labrador = JSON.parse(localStorage.getItem('labrador'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (labrador.army.name == current_user.username) {
			let av_ls = labrador.airplanes;
			let bq_ls = labrador.ships;
			let t_ls = labrador.troops;
			change_modal('Labrador', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#mexicoClick').click(function () {
		let mexico = JSON.parse(localStorage.getItem('mexico'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (mexico.army.name == current_user.username) {
			let av_ls = mexico.airplanes;
			let bq_ls = mexico.ships;
			let t_ls = mexico.troops;
			change_modal('Mexico', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#chile-bolivia-peru-ecuadorClick').click(function () {
		let chile_bolivia_peru_ecuador = JSON.parse(localStorage.getItem('chile-bolivia-peru-ecuador'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (chile_bolivia_peru_ecuador.army.name == current_user.username) {
			let av_ls = chile_bolivia_peru_ecuador.airplanes;
			let bq_ls = chile_bolivia_peru_ecuador.ships;
			let t_ls = chile_bolivia_peru_ecuador.troops;
			change_modal('Chile, Bolivia, Peru y Ecuador', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#argentina-paraguay-uruguayClick').click(function () {
		let argentina_paraguay_uruguay = JSON.parse(localStorage.getItem('argentina-paraguay-uruguay'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (argentina_paraguay_uruguay.army.name == current_user.username) {
			let av_ls = argentina_paraguay_uruguay.airplanes;
			let bq_ls = argentina_paraguay_uruguay.ships;
			let t_ls = argentina_paraguay_uruguay.troops;
			change_modal('Argentina, Paraguay y Uruguay', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#brasilClick').click(function () {
		let brasil = JSON.parse(localStorage.getItem('brasil'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (brasil.army.name == current_user.username) {
			let av_ls = brasil.airplanes;
			let bq_ls = brasil.ships;
			let t_ls = brasil.troops;
			change_modal('Brasil', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#colombia-venezuelaClick').click(function () {
		let colombia_venezuela = JSON.parse(localStorage.getItem('colombia-venezuela'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (colombia_venezuela.army.name == current_user.username) {
			let av_ls = colombia_venezuela.airplanes;
			let bq_ls = colombia_venezuela.ships;
			let t_ls = colombia_venezuela.troops;
			change_modal('Colombia y Venezuela', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#nueva-guineaClick').click(function () {
		let nueva_guinea = JSON.parse(localStorage.getItem('nueva-guinea'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (nueva_guinea.army.name == current_user.username) {
			let av_ls = nueva_guinea.airplanes;
			let bq_ls = nueva_guinea.ships;
			let t_ls = nueva_guinea.troops;
			change_modal('Nueva Guinea', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#borneoClick').click(function () {
		let borneo = JSON.parse(localStorage.getItem('borneo'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (borneo.army.name == current_user.username) {
			let av_ls = borneo.airplanes;
			let bq_ls = borneo.ships;
			let t_ls = borneo.troops;
			change_modal('Borneo', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#sumatraClick').click(function () {
		let sumatra = JSON.parse(localStorage.getItem('sumatra'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (sumatra.army.name == current_user.username) {
			let av_ls = sumatra.airplanes;
			let bq_ls = sumatra.ships;
			let t_ls = sumatra.troops;
			change_modal('Sumatra', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#australiaClick').click(function () {
		let australia = JSON.parse(localStorage.getItem('australia'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (australia.army.name == current_user.username) {
			let av_ls = australia.airplanes;
			let bq_ls = australia.ships;
			let t_ls = australia.troops;
			change_modal('Australia', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#inglaterraClick').click(function () {
		let inglaterra = JSON.parse(localStorage.getItem('inglaterra'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (inglaterra.army.name == current_user.username) {
			let av_ls = inglaterra.airplanes;
			let bq_ls = inglaterra.ships;
			let t_ls = inglaterra.troops;
			change_modal('Inglaterra', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#moscuClick').click(function () {
		let moscu = JSON.parse(localStorage.getItem('moscu'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (moscu.army.name == current_user.username) {
			let av_ls = moscu.airplanes;
			let bq_ls = moscu.ships;
			let t_ls = moscu.troops;
			change_modal('Moscu', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#sueciaClick').click(function () {
		let suecia = JSON.parse(localStorage.getItem('suecia'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (suecia.army.name == current_user.username) {
			let av_ls = suecia.airplanes;
			let bq_ls = suecia.ships;
			let t_ls = suecia.troops;
			change_modal('Suecia', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#islandiaClick').click(function () {
		let islandia = JSON.parse(localStorage.getItem('islandia'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (islandia.army.name == current_user.username) {
			let av_ls = islandia.airplanes;
			let bq_ls = islandia.ships;
			let t_ls = islandia.troops;
			change_modal('Islandia', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#alemaniaClick').click(function () {
		let alemania = JSON.parse(localStorage.getItem('alemania'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (alemania.army.name == current_user.username) {
			let av_ls = alemania.airplanes;
			let bq_ls = alemania.ships;
			let t_ls = alemania.troops;
			change_modal('Alemania', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#espana-francia-italiaClick').click(function () {
		let espana_francia_italia = JSON.parse(localStorage.getItem('espana-francia-italia'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (espana_francia_italia.army.name == current_user.username) {
			let av_ls = espana_francia_italia.airplanes;
			let bq_ls = espana_francia_italia.ships;
			let t_ls = espana_francia_italia.troops;
			change_modal('España, Francia e Italia', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#polonia-yugoeslaviaClick').click(function () {
		let polonia_yugoeslavia = JSON.parse(localStorage.getItem('polonia-yugoeslavia'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (polonia_yugoeslavia.army.name == current_user.username) {
			let av_ls = polonia_yugoeslavia.airplanes;
			let bq_ls = polonia_yugoeslavia.ships;
			let t_ls = polonia_yugoeslavia.troops;
			change_modal('Polonia y Yugoeslavia', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#sudanClick').click(function () {
		let sudan = JSON.parse(localStorage.getItem('sudan'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (sudan.army.name == current_user.username) {
			let av_ls = sudan.airplanes;
			let bq_ls = sudan.ships;
			let t_ls = sudan.troops;
			change_modal('Sudan', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#el-congoClick').click(function () {
		let el_congo = JSON.parse(localStorage.getItem('el-congo'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (el_congo.army.name == current_user.username) {
			let av_ls = el_congo.airplanes;
			let bq_ls = el_congo.ships;
			let t_ls = el_congo.troops;
			change_modal('El Congo', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#africa-del-surClick').click(function () {
		let africa_del_sur = JSON.parse(localStorage.getItem('africa-del-sur'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (africa_del_sur.army.name == current_user.username) {
			let av_ls = africa_del_sur.airplanes;
			let bq_ls = africa_del_sur.ships;
			let t_ls = africa_del_sur.troops;
			change_modal('Africa del Sur', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#argelia-nigeriaClick').click(function () {
		let argelia_nigeria = JSON.parse(localStorage.getItem('argelia-nigeria'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (argelia_nigeria.army.name == current_user.username) {
			let av_ls = argelia_nigeria.airplanes;
			let bq_ls = argelia_nigeria.ships;
			let t_ls = argelia_nigeria.troops;
			change_modal('Argelia y Nigeria', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#madagascarClick').click(function () {
		let madagascar = JSON.parse(localStorage.getItem('madagascar'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (madagascar.army.name == current_user.username) {
			let av_ls = madagascar.airplanes;
			let bq_ls = madagascar.ships;
			let t_ls = madagascar.troops;
			change_modal('Madagascar', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
	});
	$('#egiptoClick').click(function () {
		let egipto = JSON.parse(localStorage.getItem('egipto'));
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (egipto.army.name == current_user.username) {
			let av_ls = egipto.airplanes;
			let bq_ls = egipto.ships;
			let t_ls = egipto.troops;
			change_modal('Egipto', av_ls, bq_ls, t_ls);
		}
		else {
			change_modal('Make Your Move', 0, 0, 0);
		}
		open_modal();
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

	
	  
	//Resources botton clicked
	$('#search-resourcesBtn').click(function () {
    	$('.modal').removeClass('modal-open');
		let numb = $("#troops-sent").val();
		localStorage.setItem('number_t', numb);
		send_troops();
		if (numb !== null) {
			let jugada = JSON.parse(localStorage.getItem('jugada'));
			let collect = {
				territory: $('.modal-title').text(), 
				troops: numb
			};
			jugada.collect_resources.push(collect);
			localStorage.setItem('jugada', JSON.stringify(jugada));
		}
	});

	//Attack botton clicked
	$('#open-troops-attackMenu').click(function () {
    	$('.modal').removeClass('modal-open');
    	$('#troops-attackSelection').children().remove().end();
		$('#troops-attackMenu').addClass('modal-open');
		let numb = $("#troops-sent").val();
		localStorage.setItem('number_t',numb);
    	if ($(".modal-title").text() == "Egipto"){
    		$('#troops-attackSelection').append(`${`<option value="40">Argelia y Nigeria</option>`}`)
    		$('#troops-attackSelection').append(`${`<option value="37">Sudan</option>`}`)
    		$('#troops-attackSelection').append(`${`<option value="6">Medio Oriente</option>`}`)
    		$('#troops-attackSelection').append(`${`<option value="35">España, Francia e Italia</option>`}`)
    		$('#troops-attackSelection').append(`${`<option value="36">Polonia y Yugoeslavia</option>`}`)
		}
		else if ($(".modal-title").text() == "Medio Oriente"){
    		$('#troops-attackSelection').append(`${`<option value="42">Egipto</option>`}`)
    		$('#troops-attackSelection').append(`${`<option value="31">Moscu</option>`}`)
    		$('#troops-attackSelection').append(`${`<option value="8">Aral</option>`}`)
    		$('#troops-attackSelection').append(`${`<option value="10">India</option>`}`)
    		$('#troops-attackSelection').append(`${`<option value="36">Polonia y Yugoeslavia</option>`}`)
		}
		else if ($(".modal-title").text() == "Chile, Bolivia, Peru y Ecuador"){
    		$('#troops-attackSelection').append(`${`<option value="23">Argentina, Paraguay y Uruguay</option>`}`)
    		$('#troops-attackSelection').append(`${`<option value="24">Brasil</option>`}`)
    		$('#troops-attackSelection').append(`${`<option value="25">Colombia y Venezuela</option>`}`)
    		$('#troops-attackSelection').append(`${`<option value="26">Nueva Guinea</option>`}`)
		}
		else if ($(".modal-title").text() == "Argentina, Paraguay y Uruguay"){
    		$('#troops-attackSelection').append(`${`<option value="22">Chile, Bolivia, Peru y Ecuador</option>`}`)
    		$('#troops-attackSelection').append(`${`<option value="24">Brasil</option>`}`)
		}
		else if ($('.modal-title').text() == 'Brasil'){
			$('#troops-attackSelection').append(`${`<option value='22'>Chile, Bolivia, Peru y Ecuador</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='23'>Argentina, Paraguay y Uruguay</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='25'>Colombia y Venezuela</option>`}`)
			}
		else if ($('.modal-title').text() == 'Colombia y Venezuela'){
			$('#troops-attackSelection').append(`${`<option value='22'>Chile, Bolivia, Peru y Ecuador</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='24'>Brasil</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='21'>Mexico</option>`}`)
			}
		else if ($('.modal-title').text() == 'Mexico'){
			$('#troops-attackSelection').append(`${`<option value='25'>Colombia y Venezuela</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='18'>California</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='17'>Nueva York</option>`}`)
			}
		else if ($('.modal-title').text() == 'California'){
			$('#troops-attackSelection').append(`${`<option value='21'>Mexico</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='17'>Nueva York</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='15'>Vancouver</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='19'>Ottawa</option>`}`)
			}
		else if ($('.modal-title').text() == 'Nueva York'){
			$('#troops-attackSelection').append(`${`<option value='21'>Mexico</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='18'>California</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='20'>Labrador</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='19'>Ottawa</option>`}`)
			}
		else if ($('.modal-title').text() == 'Vancouver'){
			$('#troops-attackSelection').append(`${`<option value='18'>California</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='13'>Alaska</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='19'>Ottawa</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='14'>Mackenzie</option>`}`)
			}
		else if ($('.modal-title').text() == 'Ottawa'){
			$('#troops-attackSelection').append(`${`<option value='18'>California</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='15'>Vancouver</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='20'>Labrador</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='14'>Mackenzie</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='17'>Nueva York</option>`}`)
			}
		else if ($('.modal-title').text() == 'Labrador'){
			$('#troops-attackSelection').append(`${`<option value='19'>Ottawa</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='17'>Nueva York</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='16'>Groenlandia</option>`}`)
			}
		else if ($('.modal-title').text() == 'Alaska'){
			$('#troops-attackSelection').append(`${`<option value='1'>Vladivostok</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='15'>Vancouver</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='14'>Mackenzie</option>`}`)
			}
		else if ($('.modal-title').text() == 'Mackenzie'){
			$('#troops-attackSelection').append(`${`<option value='13'>Alaska</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='15'>Vancouver</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='19'>Ottawa</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='16'>Groenlandia</option>`}`)
			}
		else if ($('.modal-title').text() == 'Groenlandia'){
			$('#troops-attackSelection').append(`${`<option value='14'>Mackenzie</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='20'>Labrador</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='33'>Islandia</option>`}`)
			}
		else if ($('.modal-title').text() == 'Inglaterra'){
			$('#troops-attackSelection').append(`${`<option value='33'>Islandia</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='35'>España, Francia e Italia</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='34'>Alemania</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='32'>Suecia</option>`}`)
		}
		else if ($('.modal-title').text() == 'Islandia'){
			$('#troops-attackSelection').append(`${`<option value='30'>Inglaterra</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='16'>Groenlandia</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='32'>Suecia</option>`}`)
		}
		else if ($('.modal-title').text() == 'España, Francia e Italia'){
			$('#troops-attackSelection').append(`${`<option value='30'>Inglaterra</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='34'>Alemania</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='36'>Polonia y Yugoeslavia</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='40'>Argelia y Nigeria</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='42'>Egipto</option>`}`)
		}
		else if ($('.modal-title').text() == 'Alemania'){
			$('#troops-attackSelection').append(`${`<option value='30'>Inglaterra</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='35'>España, Francia e Italia</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='36'>Polonia y Yugoeslavia</option>`}`)
		}
		else if ($('.modal-title').text() == 'Polonia y Yugoeslavia'){
			$('#troops-attackSelection').append(`${`<option value='34'>Alemania</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='35'>España, Francia e Italia</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='31'>Moscu</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='6'>Medio Oriente</option>`}`)
		}
		else if ($('.modal-title').text() == 'Suecia'){
			$('#troops-attackSelection').append(`${`<option value='33'>Islandia</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='30'>Inglaterra</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='31'>Moscu</option>`}`)
		}
		else if ($('.modal-title').text() == 'Moscu'){
			$('#troops-attackSelection').append(`${`<option value='32'>Suecia</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='36'>Polonia y Yugoeslavia</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='6'>Medio Oriente</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='8'>Aral</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='7'>Omsk</option>`}`)
		}
		else if ($('.modal-title').text() == 'Africa del Sur'){
			$('#troops-attackSelection').append(`${`<option value='41'>Madagascar</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='38'>El Congo</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='37'>Sudan</option>`}`)
		}
		else if ($('.modal-title').text() == 'Madagascar'){
			$('#troops-attackSelection').append(`${`<option value='39'>Africa del Sur</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='37'>Sudan</option>`}`)
		}
		else if ($('.modal-title').text() == 'El Congo'){
			$('#troops-attackSelection').append(`${`<option value='39'>Africa del Sur</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='37'>Sudan</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='40'>Argelia y Nigeria</option>`}`)
		}
		else if ($('.modal-title').text() == 'Sudan'){
			$('#troops-attackSelection').append(`${`<option value='39'>Africa del Sur</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='38'>El Congo</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='40'>Argelia y Nigeria</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='41'>Madagascar</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='42'>Egipto</option>`}`)
		}
		else if ($('.modal-title').text() == 'Argelia y Nigeria'){
			$('#troops-attackSelection').append(`${`<option value='24'>Brasil</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='37'>Sudan</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='38'>El Congo</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='42'>Egipto</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='35'>España, Francia e Italia</option>`}`)
		}
		else if ($('.modal-title').text() == 'Australia'){
			$('#troops-attackSelection').append(`${`<option value='28'>Sumatra</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='27'>Borneo</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='26'>Nueva Guinea</option>`}`)
		}
		else if ($('.modal-title').text() == 'Sumatra'){
			$('#troops-attackSelection').append(`${`<option value='29'>Australia</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='10'>India</option>`}`)
		}
		else if ($('.modal-title').text() == 'Borneo'){
			$('#troops-attackSelection').append(`${`<option value='29'>Australia</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='3'>Vietnam</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='26'>Nueva Guinea</option>`}`)
		}
		else if ($('.modal-title').text() == 'Nueva Guinea'){
			$('#troops-attackSelection').append(`${`<option value='29'>Australia</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='27'>Borneo</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='22'>Chile, Bolivia, Peru y Ecuador</option>`}`)
		}
		else if ($('.modal-title').text() == 'Vietnam'){
			$('#troops-attackSelection').append(`${`<option value='27'>Borneo</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='10'>India</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='9'>China</option>`}`)
		}
		else if ($('.modal-title').text() == 'India'){
			$('#troops-attackSelection').append(`${`<option value='3'>Vietnam</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='28'>Sumatra</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='6'>Medio Oriente</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='8'>Aral</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='9'>China</option>`}`)
		}
		else if ($('.modal-title').text() == 'Aral'){
			$('#troops-attackSelection').append(`${`<option value='6'>Medio Oriente</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='10'>India</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='9'>China</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='7'>Omsk</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='31'>Moscu</option>`}`)
		}
		else if ($('.modal-title').text() == 'China'){
			$('#troops-attackSelection').append(`${`<option value='3'>Vietnam</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='10'>India</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='8'>Aral</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='7'>Omsk</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='12'>Mongolia</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='1'>Vladivostok</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='11'>Tchita</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='2'>Japon</option>`}`)
		}
		else if ($('.modal-title').text() == 'Japon'){
			$('#troops-attackSelection').append(`${`<option value='9'>China</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='1'>Vladivostok</option>`}`)
		}
		else if ($('.modal-title').text() == 'Omsk'){
			$('#troops-attackSelection').append(`${`<option value='31'>Moscu</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='8'>Aral</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='9'>China</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='5'>Dudinka</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='12'>Mongolia</option>`}`)
		}
		else if ($('.modal-title').text() == 'Dudinka'){
			$('#troops-attackSelection').append(`${`<option value='7'>Omsk</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='12'>Mongolia</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='11'>Tchita</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='4'>Siberia</option>`}`)
		}
		else if ($('.modal-title').text() == 'Mongolia'){
			$('#troops-attackSelection').append(`${`<option value='9'>China</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='7'>Omsk</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='5'>Dudinka</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='11'>Tchita</option>`}`)
		}
		else if ($('.modal-title').text() == 'Tchita'){
			$('#troops-attackSelection').append(`${`<option value='9'>China</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='12'>Mongolia</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='5'>Dudinka</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='4'>Siberia</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='1'>Vladivostok</option>`}`)
		}
		else if ($('.modal-title').text() == 'Siberia'){
			$('#troops-attackSelection').append(`${`<option value='5'>Dudinka</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='11'>Tchita</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='1'>Vladivostok</option>`}`)
		}
		else if ($('.modal-title').text() == 'Vladivostok'){
			$('#troops-attackSelection').append(`${`<option value='4'>Siberia</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='11'>Tchita</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='9'>China</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='2'>Japon</option>`}`)
			$('#troops-attackSelection').append(`${`<option value='13'>Alaska</option>`}`)
		}

	});

	//Attack botton clicked Airplanes
	$('#attack-airplanesBtn').click(function () {
    	$('.modal').removeClass('modal-open');
    	$('#airplanes-attackSelection').children().remove().end();
		$('#airplanes-attackMenu').addClass('modal-open');
		let numb = $("#airplanes-sent").val();
		localStorage.setItem('number_a',numb);
    	for (let territory of  ['Vladivostok', 'Japon', 'Vietnam', 'Siberia', 'Dudinka', 'Medio Oriente', 'Omsk', 'Aral', 
		'China', 'India', 'Tchita', 'Mongolia', 'Alaska', 'Mackenzie', 'Vancouver', 'Groenlandia', 'Nueva York', 'California', 
		'Ottawa', 'Labrador', 'Mexico', 'Chile, Bolivia, Peru y Ecuador', 'Argentina, Paraguay y Uruguay', 'Brasil', 
		'Colombia y Venezuela', 'Nueva Guinea', 'Borneo', 'Sumatra', 'Australia', 'Sudan', 'El Congo', 'Africa del Sur', 'Argelia y Nigeria', 
		'Madagascar', 'Egipto']){
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
		for (let territory of ['Vladivostok', 'Japon', 'Vietnam', 'Siberia', 'Dudinka', 'Medio Oriente', 'Omsk', 'Aral', 
		'China', 'India', 'Alaska', 'Mackenzie', 'Vancouver', 'Groenlandia', 'Nueva York', 'California', 
		'Ottawa', 'Labrador', 'Mexico', 'Chile, Bolivia, Peru y Ecuador', 'Argentina, Paraguay y Uruguay', 'Brasil', 
		'Colombia y Venezuela', 'Nueva Guinea', 'Borneo', 'Sumatra', 'Australia', 'Inglaterra', 'Moscu', 'Suecia', 'Islandia', 
		'Alemania', 'España, Francia e Italia', 'Polonia y Yugoeslavia', 'Sudan', 'El Congo', 'Africa del Sur', 'Argelia y Nigeria', 
		'Madagascar', 'Egipto']){
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



	async function fetch_move_t ()	{

		let jugada = JSON.parse(localStorage.getItem("jugada"));
		let id_territories = {'Vladivostok': 1, 'Japon': 2, 'Vietnam': 3, 'Siberia': 4, 'Dudinka': 5, 
		'Medio Oriente': 6, 'Omsk': 7, 'Aral': 8, 'China': 9, 'India': 10, 'Tchita': 11, 'Mongolia': 12, 
		'Alaska': 13, 'Mackenzie': 14, 'Vancouver': 15, 'Groenlandia': 16, 'Nueva York': 17, 'California': 18, 
		'Ottawa': 19, 'Labrador': 20, 'Mexico': 21, 'Chile, Bolivia, Peru y Ecuador': 22, 
		'Argentina, Paraguay y Uruguay': 23, 'Brasil': 24, 'Colombia y Venezuela': 25, 'Nueva Guinea': 26, 
		'Borneo': 27, 'Sumatra': 28, 'Australia': 29, 'Inglaterra': 30, 'Moscu': 31, 'Suecia': 32, 'Islandia': 33, 
		'Alemania': 34, 'España, Francia e Italia': 35, 'Polonia y Yugoeslavia': 36, 'Sudan': 37, 'El Congo': 38, 
		'Africa del Sur': 39, 'Argelia y Nigeria': 40, 'Madagascar': 41, 'Egipto': 42};
		let ataque = jugada.troop_attack.shift();
		localStorage.setItem('jugada', JSON.stringify(jugada));
		console.log(ataque);
		let id_terr_ataca = id_territories[ataque.attack_territory];
		let query = {
			"territory_attacked": ataque.attacked_territory,
			"troops": ataque.troops};
		let ruta = `https://infinite-escarpment-66062.herokuapp.com/territories/attack_t/${id_terr_ataca}`;
		let options = {
			method: 'PATCH',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(query)
			};
		let rawResponse = await fetch(ruta,options)

		.then(function(){
			let jugada = JSON.parse(localStorage.getItem("jugada"));
			if (jugada.troop_attack.length !== 0) {
				fetch_move_t()
			}
		})
	}

	async function fetch_move_a ()	{

		let jugada = JSON.parse(localStorage.getItem("jugada"));
		let id_territories = {'Vladivostok': 1, 'Japon': 2, 'Vietnam': 3, 'Siberia': 4, 'Dudinka': 5, 
		'Medio Oriente': 6, 'Omsk': 7, 'Aral': 8, 'China': 9, 'India': 10, 'Tchita': 11, 'Mongolia': 12, 
		'Alaska': 13, 'Mackenzie': 14, 'Vancouver': 15, 'Groenlandia': 16, 'Nueva York': 17, 'California': 18, 
		'Ottawa': 19, 'Labrador': 20, 'Mexico': 21, 'Chile, Bolivia, Peru y Ecuador': 22, 
		'Argentina, Paraguay y Uruguay': 23, 'Brasil': 24, 'Colombia y Venezuela': 25, 'Nueva Guinea': 26, 
		'Borneo': 27, 'Sumatra': 28, 'Australia': 29, 'Inglaterra': 30, 'Moscu': 31, 'Suecia': 32, 'Islandia': 33, 
		'Alemania': 34, 'España, Francia e Italia': 35, 'Polonia y Yugoeslavia': 36, 'Sudan': 37, 'El Congo': 38, 
		'Africa del Sur': 39, 'Argelia y Nigeria': 40, 'Madagascar': 41, 'Egipto': 42};
		let ataque = jugada.airplane_attack.shift();
		localStorage.setItem('jugada', JSON.stringify(jugada));
		console.log(ataque);
		let id_terr_ataca = id_territories[ataque.attack_territory];
		let query = {
			"territory_attacked": id_territories[ataque.attacked_territory],
			"airplanes": ataque.troops};
		let ruta = `https://infinite-escarpment-66062.herokuapp.com/territories/attack_a/${id_terr_ataca}`;
		let options = {
			method: 'PATCH',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(query)
			};
		let rawResponse = await fetch(ruta,options)

		.then(function(){
			let jugada = JSON.parse(localStorage.getItem("jugada"));
			if (jugada.airplane_attack.length !== 0) {
				fetch_move_a()
			}
		})
	}

	async function fetch_move_s ()	{

		let jugada = JSON.parse(localStorage.getItem("jugada"));
		let id_territories = {'Vladivostok': 1, 'Japon': 2, 'Vietnam': 3, 'Siberia': 4, 'Dudinka': 5, 
		'Medio Oriente': 6, 'Omsk': 7, 'Aral': 8, 'China': 9, 'India': 10, 'Tchita': 11, 'Mongolia': 12, 
		'Alaska': 13, 'Mackenzie': 14, 'Vancouver': 15, 'Groenlandia': 16, 'Nueva York': 17, 'California': 18, 
		'Ottawa': 19, 'Labrador': 20, 'Mexico': 21, 'Chile, Bolivia, Peru y Ecuador': 22, 
		'Argentina, Paraguay y Uruguay': 23, 'Brasil': 24, 'Colombia y Venezuela': 25, 'Nueva Guinea': 26, 
		'Borneo': 27, 'Sumatra': 28, 'Australia': 29, 'Inglaterra': 30, 'Moscu': 31, 'Suecia': 32, 'Islandia': 33, 
		'Alemania': 34, 'España, Francia e Italia': 35, 'Polonia y Yugoeslavia': 36, 'Sudan': 37, 'El Congo': 38, 
		'Africa del Sur': 39, 'Argelia y Nigeria': 40, 'Madagascar': 41, 'Egipto': 42};
		let ataque = jugada.ship_attack.shift();
		localStorage.setItem('jugada', JSON.stringify(jugada));
		let id_terr_ataca = id_territories[ataque.attack_territory];
		let query = {
			"territory_attacked": id_territories[ataque.attacked_territory],
			"ships": ataque.troops};
		let ruta = `https://infinite-escarpment-66062.herokuapp.com/territories/attack_s/${id_terr_ataca}`;
		let options = {
			method: 'PATCH',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(query)
			};
		let rawResponse = await fetch(ruta,options)

		.then(function(){
			let jugada = JSON.parse(localStorage.getItem("jugada"));
			if (jugada.ship_attack.length !== 0) {
				fetch_move_s()
			}
		})
	}

	async function fetch_colect ()	{

		let jugada = JSON.parse(localStorage.getItem("jugada"));
		let id_territories = {'Vladivostok': 1, 'Japon': 2, 'Vietnam': 3, 'Siberia': 4, 'Dudinka': 5, 
		'Medio Oriente': 6, 'Omsk': 7, 'Aral': 8, 'China': 9, 'India': 10, 'Tchita': 11, 'Mongolia': 12, 
		'Alaska': 13, 'Mackenzie': 14, 'Vancouver': 15, 'Groenlandia': 16, 'Nueva York': 17, 'California': 18, 
		'Ottawa': 19, 'Labrador': 20, 'Mexico': 21, 'Chile, Bolivia, Peru y Ecuador': 22, 
		'Argentina, Paraguay y Uruguay': 23, 'Brasil': 24, 'Colombia y Venezuela': 25, 'Nueva Guinea': 26, 
		'Borneo': 27, 'Sumatra': 28, 'Australia': 29, 'Inglaterra': 30, 'Moscu': 31, 'Suecia': 32, 'Islandia': 33, 
		'Alemania': 34, 'España, Francia e Italia': 35, 'Polonia y Yugoeslavia': 36, 'Sudan': 37, 'El Congo': 38, 
		'Africa del Sur': 39, 'Argelia y Nigeria': 40, 'Madagascar': 41, 'Egipto': 42};
		let collect = jugada.collect_resources.shift();
		localStorage.setItem('jugada', JSON.stringify(jugada));
		let id_terr_colecta = id_territories[collect.territory];
		let query = {
			"colectors": collect.troops};
		let ruta = `https://infinite-escarpment-66062.herokuapp.com/territories/colect/${id_terr_colecta}`;
		let options = {
			method: 'PATCH',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(query)
			};
		let rawResponse = await fetch(ruta,options)
		.then(function(){
			let jugada = JSON.parse(localStorage.getItem("jugada"));
			if (jugada.collect_resources.length !== 0) {
				fetch_colect()
			}
		})
	}


	async function fetch_getGame() {  //CONSEGUIR GAME ID de DB
		let current_user = JSON.parse(localStorage.getItem("current_user"));
		const rawResponse = await fetch(`https://infinite-escarpment-66062.herokuapp.com/games/${current_user.game}`, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
		}})
		.then(res => res.json())
		.then(res => {return res.id}); 
		//console.log(rawResponse);
		return rawResponse;
	}

	async function fetch_getAllPlayers() {  //CONSEGUIR TODO LOS PLAYERS ID DEL GAME
		let current_user = JSON.parse(localStorage.getItem("current_user"));
		const rawResponse = await fetch(`https://infinite-escarpment-66062.herokuapp.com/games/${current_user.game}`, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
		}})
		.then(res => res.json())
		.then(res => {return [res.player1,res.player2,res.player3,res.player4,res.player5]}); 
		//console.log(rawResponse);
		return rawResponse;
	}

	async function fetch_getPlayed(id) { //CONSEGUIR USUARIO ACTUAL
	
		const rawResponse = await fetch(`https://infinite-escarpment-66062.herokuapp.com/rounds/played/${id}`, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
		}})
		.then(res => res.json())
		.then(res => {return res});
		//console.log(rawResponse);
		return rawResponse;
	}

	

	async function fetch_act_rounds_t ()	{ //ACTUALIZAR VARIABLE PLAYED POR TRUE
		let current_user = JSON.parse(localStorage.getItem("current_user"));
		let query = {
			"played": true};
		let ruta = `https://infinite-escarpment-66062.herokuapp.com/rounds/played/${current_user.player}`;
		let options = {
			method: 'PATCH',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(query)
			};
		let rawResponse = await fetch(ruta,options)
		.then(function(){
				alert("Move Sent")	
			}
		);
	}

	async function fetch_act_rounds_f (id)	{ //ACTUALIZAR VARIABLE PLAYED POR FALSE
		
		let query = {
			"played": false};
		let ruta = `https://infinite-escarpment-66062.herokuapp.com/rounds/played/${id}`;
		let options = {
			method: 'PATCH',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(query)
			};
		let rawResponse = await fetch(ruta,options)
		.then(function(){
				null
			}
		);
	}

	async function fetch_map() { //CONSEGUIR MAP 
		const rawResponse = await fetch('https://infinite-escarpment-66062.herokuapp.com/maps/territories', {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
		}})
		.then(res => res.json())
		.then(res => {return res});
		//console.log(rawResponse);
		return rawResponse;
	}


	async function fetch_territory_names(id_army) {  //CONSEGUIR TODO LOS PLAYERS ID DEL GAME
		const rawResponse = await fetch(`https://infinite-escarpment-66062.herokuapp.com/territories/name/${id_army}`, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
		}})
		.then(res => res.json())
		.then(res => {return res}); 
		return rawResponse;
	}

	async function fetch_territory_number(id_army) {  //CONSEGUIR TODO LOS PLAYERS ID DEL GAME
		const rawResponse = await fetch(`https://infinite-escarpment-66062.herokuapp.com/territories/number/${id_army}`, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
		}})
		.then(res => res.json())
		.then(res => {return res}); 
		return rawResponse;
	}

	async function fetch_get_resources(id_army) {  //CONSEGUIR TODO LOS PLAYERS ID DEL GAME
		const rawResponse = await fetch(`https://infinite-escarpment-66062.herokuapp.com/armies/get_resources/${id_army}`, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
		}})
		.then(res => res.json())
		.then(res => {return res}); 
		return rawResponse;
	}

	async function fetch_total_territories(player_name) {  //CONSEGUIR TODO LOS PLAYERS ID DEL GAME
		const rawResponse = await fetch(`https://infinite-escarpment-66062.herokuapp.com/armies/get_total_territories/${player_name}`, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
		}})
		.then(res => res.json())
		.then(res => {return res}); 
		return rawResponse;
	}

	async function fetch_next_round() {  //CONSEGUIR TODO LOS PLAYERS ID DEL GAME
		await fetch(`https://infinite-escarpment-66062.herokuapp.com/troops/next_round`, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
		}})
	}
	

	$('#send_moveBtn').click(async function () {		
		let current_user = JSON.parse(localStorage.getItem("current_user"));
		let jugada = JSON.parse(localStorage.getItem("jugada"));
		let play = await fetch_getPlayed(current_user.player);
		if (play == true) {
			alert("Move already sent");
			$('#send_moveBtn').addClass('hide');
			jugada = {
				troop_attack: [],
				airplane_attack: [],
				ship_attack: [],
				collect_resources: []
			};
			localStorage.setItem('jugada', JSON.stringify(jugada));
		}
		else {
			$('#send_moveBtn').addClass('hide');
			await fetch_act_rounds_t();
			if (jugada.troop_attack.length !== 0) {
				await fetch_move_t();
			}
			if (jugada.airplane_attack.length !== 0) {
				await fetch_move_a();
			}
			if (jugada.ship_attack.length !== 0) {
				await fetch_move_s();
			}
			if (jugada.collect_resources.length !== 0) {
				await fetch_colect();
			}
		}
	});

	

	$('#update_map').click(async function () {

		let jugada = JSON.parse(localStorage.getItem("jugada"));
		let current_user = JSON.parse(localStorage.getItem("current_user"));
		let winner = ''
		let names = await fetch_territory_names(current_user.player);


		//let game = await fetch_getGame(); //ESTA SERVIRA PARA CUANDO TENGAN VARIAS PARTIDAS
		let play = await fetch_getPlayed(current_user.player);
		let players = await fetch_getAllPlayers();
		
		if (play == true) {
			alert("Already up to date");
		}
		else{
			await fetch_next_round();
			let map_data = await fetch_map();
			for (territory in map_data) {
				//console.log(territory.toLowerCase().replace(', ', '-').replace(' y ', '-').replace(' e ', '-').replace(' ', '-').replace(',-', '-').replace('l ', 'l-'));
				localStorage.setItem(territory.toLowerCase().replace(', ', '-').replace(' y ', '-').replace(' e ', '-')
				.replace(' ', '-').replace(',-', '-').replace('l ', 'l-').replace('ñ', 'n'), JSON.stringify(map_data[territory]));
			}

			let user1 = JSON.parse(localStorage.getItem('user1'));
			let user2 = JSON.parse(localStorage.getItem('user2'));
			let user3 = JSON.parse(localStorage.getItem('user3'));
			let user4 = JSON.parse(localStorage.getItem('user4'));
			let user5 = JSON.parse(localStorage.getItem('user5'));

			for (user of [user1, user2, user3, user4, user5]) {
				let terr_n = await fetch_total_territories(user.name);
				user.territories = terr_n;
				if (terr_n > 15) {
					winner = user;
				}
			}

			if (winner != '') {
				let end = [user1, user2, user3, user4, user5]; 
				end.sort(function(a, b) {
					return b.poder - a.poder;
				  });
				localStorage.setItem('end', JSON.stringify(end));
				window.location = 'game_ended.html';
			}

			localStorage.setItem('user1', JSON.stringify(user1));
			localStorage.setItem('user2', JSON.stringify(user2));
			localStorage.setItem('user3', JSON.stringify(user3));
			localStorage.setItem('user4', JSON.stringify(user4));
			localStorage.setItem('user5', JSON.stringify(user5));

			load_map();

			$('#send_moveBtn').removeClass('hide');
			
			alert("The map has been updated");

			//console.log()
			current_user.resources = await fetch_get_resources(current_user.army);
			localStorage.setItem('current_user', JSON.stringify(current_user));

			number = await fetch_territory_number(current_user.army)


			if (number == 15){
				alert("YOU WON!");
			}
			
			let x;
			let termino = false
			for (x of players) {
				//console.log(x);
				let players_moved = await fetch_getPlayed(x);
				if (players_moved == false) {
					termino = false
					break;
					}
				termino = true;
				}
			
			
			if (termino == true){
				let x;
				for (x of players) {
					await fetch_act_rounds_f(x);
				}
			}
			
		}

	});







});
/*
$.ajax({
	url: 't1603.php',
	data: {jugada: jugada},
	type: 'POST' 
 }).done(function(resp) {
	 alert(resp);
 });
 */
