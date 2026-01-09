import { Order } from "./1-create-order-original";
import { OrderNotifier } from "./OrderNotifier";
import { OrderNotifierSlack } from "./OrderNotifierSlack";
import { OrderRepository } from "./OrderRepository";
import { OrderRepositoryApi } from "./OrderRepositoryApi";

class OrderService {
  constructor(private readonly orderRepository: OrderRepository, private readonly notifier: OrderNotifier){}

  async create(order: Order) {
    // 1. Validación de carrito vacío (Lógica de negocio)
    if (order.items.length === 0) throw new Error("Carrito vacío");

    // 2. Creamos la orden en los sistemas de negocio (Persistencia)
    await this.orderRepository.save(order);

    // 3. Enviamos una notificación por slack (Notificacion externa)
    const message = `Nuevo pedido: ${order.id}` //(negocio)
    await this.notifier.notifyCreation(message);
  }
}




const persistence = new OrderRepositoryApi();
const notification = new OrderNotifierSlack();

const orderService = new OrderService(persistence, notification);

const order: Order = {
    id: '123##',
    items: [ 'champú', 'toallitas']
};
orderService.create(order);
