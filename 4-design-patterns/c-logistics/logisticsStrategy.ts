// Strategy pattern

import { Order } from "./logisticsCost";

interface CostTransportStrategy {
    calcCost(order: Order): number;
}

class FlightCostStrategy implements CostTransportStrategy {
    calcCost(order: Order): number {
        return order.weight * 30;
    }
}

class WaterCostStrategy implements CostTransportStrategy {
    calcCost(order: Order): number {
        return 50 + order.packages * 3;
    }
}

class ExpressCostStrategy implements CostTransportStrategy {
    calcCost(order: Order): number {
        return order.packages * 5 + order.weight * 15;
    }
}

class LogisticService {
    constructor(
        private order: Order,
        private costStrategy: CostTransportStrategy
    ) {}

    processOrder(): void {
        const cost = this.costStrategy.calcCost(this.order);

        if (this.order.destination === 'local') {
            this.collect();
        } else {
            this.dispatch();
        }

        console.log(`Logistics cost was €${cost}`);
    }

    private dispatch(): void {
        console.log(`Order nº${this.order.id} dispatched`);
    }

    private collect(): void {
        console.log(`Order nº${this.order.id} collected`);
    }
}


const order: Order = {
    id: '123##',
    destination: 'international',
    weight: 10,
    packages: 2
};

const service = new LogisticService(
    order,
    new FlightCostStrategy()
);

service.processOrder();