export interface OrderNotifier{
    notifyCreation(message: string): Promise<boolean>;    
}