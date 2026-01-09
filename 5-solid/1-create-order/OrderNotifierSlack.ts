import { OrderNotifier } from "./OrderNotifier";

export class OrderNotifierSlack implements OrderNotifier{
    constructor(private readonly URL_NOTIFY = 'https://hooks.slack.com/services/...'){}

    async notifyCreation(message: string): Promise<boolean> {
        await fetch(this.URL_NOTIFY, {
            method: "POST",
            body: JSON.stringify({ text: message }),
        });
        return true;
    }
} 