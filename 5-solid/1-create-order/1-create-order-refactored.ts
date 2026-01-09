import { Order } from "./1-create-order-original";
import { OrderNotifier } from "./OrderNotifier";
import { OrderNotifierSlack } from "./OrderNotifierSlack";
import { OrderRepository } from "./OrderRepository";
import { OrderRepositoryApi } from "./OrderRepositoryApi";
import { OrderCreationValidator } from "./OrderCreationValidator";

class OrderService {
  constructor(private readonly validator: OrderCreationValidator, private readonly orderRepository: OrderRepository){}

  async create(order: Order) {
    // 1. Validación de carrito vacío (Lógica de negocio)
    this.validator.validateCreation(order); //value object?

    // 2. Creamos la orden en los sistemas de negocio (Persistencia)
    await this.orderRepository.save(order);
  }
}



// como simplificacion lo dejo en esta clase, seria el main de la app
const repository = new OrderRepositoryApi();
const notifier = new OrderNotifierSlack();
const validator = new OrderCreationValidator();

const orderService = new OrderService(validator, repository);

const order: Order = {
    id: '123##',
    items: [ 'champú', 'toallitas']
};
orderService.create(order);

// 3. Enviamos una notificación por slack (Notificacion externa)
const message = `Nuevo pedido: ${order.id}` //(negocio)
await notifier.notifyCreation(message);
