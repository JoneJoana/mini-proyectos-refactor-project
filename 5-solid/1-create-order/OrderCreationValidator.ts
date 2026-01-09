import { Order } from "./1-create-order-original";

export class OrderCreationValidator {
    validateCreation(order: Order){
        if (order.items.length === 0) throw new Error("Carrito vacío");
    }
}