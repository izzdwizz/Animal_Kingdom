// Base class
class Animal {
    constructor(name, type, habitat) {
        this.name = name;
        this.type = type;
        this.habitat = habitat;
    }

    // Abstraction: Display basic information about the animal
    displayInfo() {
        console.log(`Name: ${this.name}, Type: ${this.type}, Habitat: ${this.habitat}`);
    }

    // Encapsulation: Hide certain properties and provide methods to access them
    getName() {
        return this.name;
    }
}

// WarmBlooded class (inherits from Animal)
class WarmBlooded extends Animal {
    constructor(name, habitat) {
        super(name, "Warm-blooded", habitat);
        this.temperature = "High";
    }

    // Polymorphism: Override the displayInfo method
    displayInfo() {
        super.displayInfo();
        console.log(`Temperature: ${this.temperature}`);
    }
}

// ColdBlooded class (inherits from Animal)
class ColdBlooded extends Animal {
    constructor(name, habitat) {
        super(name, "Cold-blooded", habitat);
        this.temperature = "Low";
    }

    // Polymorphism: Override the displayInfo method
    displayInfo() {
        super.displayInfo();
        console.log(`Temperature: ${this.temperature}`);
    }
}

// Backbone class (inherits from Animal)
class Backbone extends Animal {
    constructor(name, habitat) {
        super(name, "With Backbone", habitat);
    }
}

// WithoutBackbone class (inherits from Animal)
class WithoutBackbone extends Animal {
    constructor(name, habitat) {
        super(name, "Without Backbone", habitat);
    }
}


// Instances of WarmBlooded, ColdBlooded, Backbone, and WithoutBackbone animals
const warmBloodedAnimal = new WarmBlooded("Falcon", "Amazon Rainforest");
const coldBloodedAnimal = new ColdBlooded("Frog", "Swamp");
const backboneAnimal = new Backbone("Cat", "Home");
const withoutBackboneAnimal = new WithoutBackbone("Butterfly", "Ocean");

// Exhibiting Polymorphism
warmBloodedAnimal.displayInfo();
coldBloodedAnimal.displayInfo();
backboneAnimal.displayInfo();
withoutBackboneAnimal.displayInfo();

// Access a property through encapsulation
console.log(`Name of warm-blooded animal: ${warmBloodedAnimal.getName()}`);
