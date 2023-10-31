interface IPayload {
    massKg: number;
}

class Astronaut implements IPayload {
    massKg: number = 0;
    name: string = '';

    constructor(massKg: number, name: string) {
        this.massKg = massKg;
        this.name = name;
    }
}

class Cargo implements IPayload {
    massKg: number = 0;
    material: string = '';

    constructor(massKg: number, material: string) {
        this.massKg = massKg;
        this.material = material;
    }
}

class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: IPayload[]): number {
        return items.reduce((acc, item) => acc + item.massKg, 0);
    }

    currentMassKg(): number {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }

    canAdd(item: IPayload): boolean {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }

    addAstronaut(astronaut: Astronaut): boolean {
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
