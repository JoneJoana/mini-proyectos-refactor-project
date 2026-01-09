import { Order } from "./1-create-order-original";
import { OrderRepository } from "./OrderRepository";

export class OrderRepositoryApi implements OrderRepository{
    constructor(private readonly URL_SAVE = 'https://api.business.com/order'){}

    async save(order: Order): Promise<boolean> {
        await fetch(this.URL_SAVE, {
            method: "POST",
            body: JSON.stringify(order),
        });
        return true;
    }
}