//@ts-nocheck

interface Strategy {
  buildRoute(start: string, end: string);
}

class ShortestRoute implements Strategy {
  buildRoute(start: string, end: string) {
    console.log(`Shortest route from ${start} to ${end}`);
  }
}

class FastestRoute implements Strategy {
  buildRoute(start: string, end: string): void {
    console.log(`Fastest route from ${start} to ${end}`);
  }
}

class RouteSystem {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  calculateRoute(start: string, end: string) {
    this.strategy.buildRoute(start, end);
  }
}

const system = new RouteSystem(new FastestRoute());

system.calculateRoute("10.0", "90.0");

system.setStrategy(new ShortestRoute());

system.calculateRoute("10.0", "90.0");
