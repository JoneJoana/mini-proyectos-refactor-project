import { Order } from "./1-create-order-original";
import { OrderPersistence } from "./OrderPersistence";

export class OrderPersistenceApi implements OrderPersistence{
    constructor(private readonly URL_SAVE = 'https://api.business.com/order'){}

    async save(data: Order): Promise<boolean> {
        await fetch(this.URL_SAVE, {
            method: "POST",
            body: JSON.stringify(data),
        });
        return true;
    }
}