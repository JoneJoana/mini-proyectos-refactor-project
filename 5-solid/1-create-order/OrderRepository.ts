import { Order } from "./1-create-order-original";

export interface OrderRepository {
    save(order: Order): Promise<boolean>;
}