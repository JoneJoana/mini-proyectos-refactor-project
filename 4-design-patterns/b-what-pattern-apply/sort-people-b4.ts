type Person = {
    name: string;
    surname: string;
    age: number;
    children: number;
}

enum OrderDirection {
    ASC,
    DESC
}


interface OrderStrategy {
    sort(people: Person[], order: OrderDirection): Person[];
}

class OrderByChildren implements OrderStrategy {
    sort(people: Person[], order: OrderDirection): Person[] {
        throw new Error("Method not implemented.");
    }
}

class OrderByName implements OrderStrategy {
    sort(people: Person[], order: OrderDirection): Person[] {
        throw new Error("Method not implemented.");
    }
}

class OrderByAge implements OrderStrategy {
    sort(people: Person[], order: OrderDirection): Person[] {
        throw new Error("Method not implemented.");
    }
}


class OrderContext {
    #strategy!: OrderStrategy;

    setStrategy(strategy: OrderStrategy): void{
        this.#strategy = strategy;
    }

    executeOrder(people: Person[], order: OrderDirection): Person[] {
        return this.#strategy.sort(people, order);
    }
}


interface Command {
    execute: () => void;
}

class OrderCommand implements Command{
    constructor(
        private context: OrderContext,
        private people: Person[],
        private direction: OrderDirection
    ) {}

    execute(): void{
        this.context.executeOrder(this.people, this.direction)
    };
}


const context = new OrderContext();
context.setStrategy(new OrderByAge());

const orderByAgeCommand = new OrderCommand(context, [], OrderDirection.ASC)
orderByAgeCommand.execute();