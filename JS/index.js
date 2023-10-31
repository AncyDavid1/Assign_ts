"use strict";
class Astronaut {
    constructor(massKg, name) {
        this.massKg = 0;
        this.name = '';
        this.massKg = massKg;
        this.name = name;
    }
}
class Cargo {
    constructor(massKg, material) {
        this.massKg = 0;
        this.material = '';
        this.massKg = massKg;
        this.material = material;
    }
}
class Rocket {
    constructor(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass(items) {
        return items.reduce((acc, item) => acc + item.massKg, 0);
    }
    currentMassKg() {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }
    canAdd(item) {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    }
    addCargo(cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }
    addAstronaut(astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }
}
// Creating astronauts and cargo
const astronaut1 = new Astronaut(75, "Amal");
const astronaut2 = new Astronaut(80, "Varsh");
const cargo1 = new Cargo(200, "Food Supplies");
const cargo2 = new Cargo(150, "Equipment");
// Creating a rocket
const rocket = new Rocket("MAR", 500);
// Adding astronauts and cargo to the rocket
rocket.addAstronaut(astronaut1);
rocket.addAstronaut(astronaut2);
rocket.addCargo(cargo1);
rocket.addCargo(cargo2);
// Running the simulation
console.log(`Total rocket mass: ${rocket.currentMassKg()} kg`);
console.log(`Cargo items: ${JSON.stringify(rocket.cargoItems)}`);
console.log(`Astronauts: ${JSON.stringify(rocket.astronauts)}`);
