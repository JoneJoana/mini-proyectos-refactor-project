import { Order } from "./1-create-order-original";

export interface OrderPersistence {
    save(data: Order): Promise<boolean>;
}