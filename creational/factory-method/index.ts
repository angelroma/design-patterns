// Product Interface: Defines the interface for objects the factory method creates.
interface PizzaFactory {
  prepare(): void;
  bake(): void;
  cut(): void;
  box(): void;
}

// Concrete Products: Different implementations of the product interface.
class MargheritaPizza implements PizzaFactory {
  prepare() { console.log("Preparing Margherita Pizza"); }
  bake() { console.log("Baking Margherita Pizza"); }
  cut() { console.log("Cutting Margherita Pizza"); }
  box() { console.log("Boxing Margherita Pizza"); }
}

class PepperoniPizza implements PizzaFactory {
  prepare() { console.log("Preparing Pepperoni Pizza"); }
  bake() { console.log("Baking Pepperoni Pizza"); }
  cut() { console.log("Cutting Pepperoni Pizza"); }
  box() { console.log("Boxing Pepperoni Pizza"); }
}

class VegetarianPizza implements PizzaFactory {
  prepare() { console.log("Preparing Vegetarian Pizza"); }
  bake() { console.log("Baking Vegetarian Pizza"); }
  cut() { console.log("Cutting Vegetarian Pizza"); }
  box() { console.log("Boxing Vegetarian Pizza"); }
}

// Creator: Declares the factory method, which returns an object of type Product.
abstract class Pizzeria {
  abstract create(type: string): PizzaFactory;

  order(type: string): PizzaFactory {
    const pizza = this.create(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }
}

// Concrete Creators: Override the factory method to change the resulting product type.
class SpecialPizzeria extends Pizzeria {
  create(type: string): PizzaFactory {
    switch (type) {
      case 'margherita': return new MargheritaPizza();
      case 'pepperoni': return new PepperoniPizza();
      default: throw new Error(`Pizza type '${type}' not recognized.`);
    }
  }
}

class VegetarianPizzeria extends Pizzeria {
  create(type: string): PizzaFactory {
    if (type === 'vegetarian') {
      return new VegetarianPizza();
    }
    throw new Error(`Pizza type '${type}' not available in vegetarian pizzeria.`);
  }
}

// Using the code:
const specialPizzeria = new SpecialPizzeria();
specialPizzeria.order('margherita');

const vegetarianPizzeria = new VegetarianPizzeria();
vegetarianPizzeria.order('vegetarian');
