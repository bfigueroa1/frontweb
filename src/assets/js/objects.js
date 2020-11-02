// Obtjetos y Entidades
function Army(name, color, objective) {
  this.name = name;
  this.color = color;
  this.objective = objective;
  //this.territories = [];
  this.resources = {
    metal : 0,
    cement : 0,
    food : 0,
    oil : 0,
    network : 0,
    lithium : 0,
    nuclear : 0,
    tribes : 0,
    tecnology : 0,
    niobium : 0,
    virus : 0,
    workforce: 0
  };
  this.weapons = {
    biological_disease : null,
    nuclear_bomb : null,
    famine : null,
  };
  this.buyWeapon = function(weapon) {
  }
  this.addResource = function(resource) {
    switch (resource) {
        case 'metal':
          this.resources.metal += 1;
          break;
        case 'cement':
          this.resources.cement += 1;
          break;
        case 'food':
          this.resources.food += 1;
          break;
        case 'oil':
          this.resources.oil += 1;
          break;
        case 'network':
          this.resources.network += 1;
          break;
        case 'lithium':
          this.resources.lithium += 1;
          break;
        case 'nuclear':
          this.resources.nuclear += 1;
          break;
        case 'tribes':
          this.resources.tribes += 1;
          break;
        case 'tecnology':
          this.resources.tecnology += 1;
          break;   
        case 'niobium':
          this.resources.niobium += 1;
          break;      
        case 'virus':
          this.resources.virus += 1;
          break;      
        case 'workforce':
          this.resources.workforce += 1;
          break;         
    }
  }
}

function Weapon(type, damage) {
  this.type = type;
  this.damage = damage;
  this.level = 0;
  this.price = {
    metal : 0,
    cement : 0,
    food : 0,
    oil : 0,
    network : 0,
    lithium : 0,
    nuclear : 0,
    tribes : 0,
    tecnology : 0,
    niobium : 0,
    virus : 0,
    workforce: 0
  };
  this.attack = function(attacked_territory) {
  };
}

function Continent(name, medium_resources, rare_resources, probabilities) {
  this.name = name;
  this.probabilities = probabilities;
  this.basic_resources = ['metal', 'cement', 'food'];
  this.medium_resources = medium_resources;
  this.rare_resources = rare_resources; 
  this.getResources = function() {
    let random_number = Math.random();
    if (random_number <= this.probabilities.basic) {
      return this.basic_resources[Math.floor(Math.random() * this.basic_resources.length)];
    }
    else if (random_number > 1 - this.probabilities.rare) {
      return this.rare_resources[Math.floor(Math.random() * this.rare_resources.length)];
    }
    else {
      return this.medium_resources[Math.floor(Math.random() * this.medium_resources.length)];
    }
  };
}

function Territory(name, continent, army) {
  this.name = name;
  this.army = army;
  this.continent = continent;
  this.wall = 0;
  this.troops = {
    attack : 0,
    defence : 0,
    colectors : 0,
    airplanes_builders : 0,
    ships_builders : 0,
    walls_builders : 0,
  };
  this.airplanes = 0;
  this.ships = 0;
  this.sendTroops = function(number, objective) {
    if (this.troops.defence - number < 1) {
    }
    else {
      this.troops.defence -= number;
      switch (objective) {
        case 'attack':
          this.troops.attack += number;
          break;
        case 'colectors':
          this.troops.colectors += number;
          break;
        case 'airplanes_builders':
          this.troops.airplanes_builders += number;
          break;
        case 'ships_builders':
          this.troops.ships_builders += number;
          break;
        case 'walls_builders':
          this.troops.walls_builders += number;
          break;
      }
    }
  };
  this.wallDefence = function(attack_power) {
    let new_attack_power = Math.max(attack_power - this.wall, 0);
    this.wall = Math.max(this.wall - attack_power, 0);
    return new_attack_power
  };
  this.troopAttack = function(troops_number, attacked_territory) {
    this.troops.attack -= troops_number;
    let attack = attacked_territory.wallDefence(troops_number);
    while (attack != 0) {
      let attacker = rollTheDice();
      let attacked = rollTheDice();
      if (attacker > attacked) {
        attacked_territory.troops.defence -= 1;
        if (attacked_territory.troops.defence == 0) {
          attacked_territory.troops.defence += attack;
          attacked_territory.army = this.army;
          attack = 0;
        }
      }
      else {
        attack -= 1
      }
    }
  }
  this.distanceAttack = function(attack_type, quantity, attacked_territory) {
    this.airplanes -= attack_type == 'airplane' ? quantity : 0;
    this.ships -= attack_type == 'ship' ? quantity : 0;
    let damage = attack_type == 'airplane' ? 3 : 2;
    let attack = attacked_territory.wallDefence(damage*quantity);
    attacked_territory.troops.defence = Math.max(attacked_territory.troops.defence - attack, 1);
  };
  this.colectResources = function() {
    while (this.troops.colectors > 0) {
      let resource = this.continent.getResources();
      this.army.addResource(resource);
      this.troops.colectors -= 1;
      this.troops.defence += 1;
    }
  };
  this.buildAirplanes = function() {
    this.airplanes += this.troops.airplanes_builders;
    this.troops.defence += this.troops.airplanes_builders;
    this.army.resources.metal -= (this.troops.airplanes_builders * 3);
    this.troops.airplanes_builders = 0;
  };
  this.buildShips = function() {
    this.ships += this.troops.ships_builders;
    this.troops.defence += this.troops.ships_builders;
    this.army.resources.metal -= (this.troops.ships_builders * 5);
    this.troops.ships_builders = 0;
  };
  this.buildWalls = function() {
    this.wall += this.troops.walls_builders;
    this.troops.defence += this.troops.walls_builders;
    if (this.wall == 0) {
      this.wall += 1;
      this.army.resources.cement -= 3;
      this.troops.walls_builders -= 1;
    }
    this.army.resources.cement -= this.troops.walls_builders;
    this.troops.walls_builders = 0;
  };
}

// Funciones
// Lanzamiento de dados para el ataque/defensa de las tropas
function rollTheDice() {
  return Math.floor(Math.random() * 6 ) + 1;
}
// Función que lanza los dados para la cantidad de tropas que atacan o defienden (máx 3)
// y ordena los resultados de mayor a menor.
function troopsAttackOrder(troops_number=1) {
  if (troops_number > 3) {
    troops_number = 3;
  }
  let attack = [];
  for (let i = 0; i < troops_number; i++) {
    attack.push(rollTheDice());
  }
  return attack.sort((a, b) => b - a);
}