import { Order } from "./1-create-order-original";

export interface OrderNotification{
    notifyCreation(message: string): Promise<boolean>;    
}