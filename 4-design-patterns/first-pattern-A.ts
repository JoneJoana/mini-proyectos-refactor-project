type Car = {
  model: string;
  color: string;
  engine: string;
  extras: string[];
};

interface Builder {
  setModel: (model: string) => Builder;
  setColor: (color: string) => Builder;
  setEngine: (engine: string) => Builder;
  setExtras: (extras: string[]) => Builder;
}

class CarBuilder implements Builder {
  #model: string = "D";
  #color: string = "black";
  #engine: string = "diesel";
  #extras: string[] = ["leather seats", "gps"];

  setModel(model: string): Builder {
    this.#model = model;
    return this;
  }
  setColor(color: string): Builder {
    this.#color = color;
    return this;
  }
  setEngine(engine: string): Builder {
    this.#engine = engine;
    return this;
  }
  setExtras(extras: string[]): Builder {
    this.#extras = extras;
    return this;
  }

  getCar(): Car {
    return {
      model: this.#model,
      color: this.#color,
      engine: this.#engine,
      extras: this.#extras,
    };
  }
}

class CarFactory {
  buildElectricCar(builder: Builder) {
    builder.setModel("E").setColor("white").setEngine("electric").setExtras(["calefactable"]);
  }

  buildGasoilCar(builder: Builder) {
    builder.setModel("G").setColor("red").setEngine("gasoil").setExtras(["subbuffer"]);
  }
}

const factoryDirector = new CarFactory();
const builder = new CarBuilder();

factoryDirector.buildElectricCar(builder);
const electricCar = builder.getCar();

factoryDirector.buildGasoilCar(builder);
const gasoilCar = builder.getCar();