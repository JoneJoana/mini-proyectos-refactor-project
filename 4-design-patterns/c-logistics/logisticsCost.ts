type Order = {
    id: string;
    destination: string;
    weight: number;
    packages: number;
}

abstract class LogisticProcessor {
    #order: Order;

    constructor(order: Order){
        this.#order = order;
    }

    processOrder(): void{
        //... lo que corresponda
        const cost = this.calcCost(this.#order);
        if(true){ //... lo que corresponda
            this.dispatch();
        }else{
            this.collect();
        }        
        console.log(`Logistics Cost was ${cost}`)
    }

    abstract calcCost(order: Order): number;

    private dispatch(): void{        
        console.log(`Order nº${this.#order.id} dispatched`)
    }

    private collect(): void{
        console.log(`Order nº${this.#order.id} collected`)
    }    
}

class Flight extends LogisticProcessor {
    calcCost(order: Order): number{
        return order.weight * 30;
    }
}

class Water extends LogisticProcessor {
    calcCost(order: Order): number{
        return 50 + (3 * order.packages);
    }
}

class Express extends LogisticProcessor {
    calcCost(order: Order): number{
        return (5 * order.packages) + (order.weight * 15);
    }
}

const order: Order = {
    id: '123##',
    destination: 'international',
    weight: 10,
    packages: 2
};
const flight = new Flight(order);
flight.processOrder();