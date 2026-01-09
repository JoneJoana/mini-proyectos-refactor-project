import { Order } from "./1-create-order-original";
import { OrderNotification } from "./OrderNotification";
import { OrderNotificationSlack } from "./OrderNotificationSlack";
import { OrderPersistence } from "./OrderPersistence";
import { OrderPersistenceApi } from "./OrderPersistenceApi";

class OrderService {
  constructor(private readonly persistence: OrderPersistence, private readonly notifier: OrderNotification){}

  async create(orderData: Order) {
    // 1. Validación de carrito vacío (Lógica de negocio)
    if (orderData.items.length === 0) throw new Error("Carrito vacío");

    // 2. Creamos la orden en los sistemas de negocio (Persistencia)
    await this.persistence.save(orderData);

    // 3. Enviamos una notificación por slack (Notificacion externa)
    const message = `Nuevo pedido: ${orderData.id}` //(negocio)
    await this.notifier.notifyCreation(message);
  }
}


const persistence = new OrderPersistenceApi();
const notification = new OrderNotificationSlack();

const orderService = new OrderService(persistence, notification);

const order: Order = {
    id: '123##',
    items: [ 'champú', 'toallitas']
};
orderService.create(order);