export type Order = {
  id: string;
  items: string[];
};

class OrderServiceOriginal {
  async create(orderData: Order) {
    // 1. Validación de carrito vacío (Lógica de negocio)
    if (orderData.items.length === 0) throw new Error("Carrito vacío");

    // 2. Creamos la orden en los sistemas de negocio (Persistencia)
    await fetch("https://api.business.com/order", {
      method: "POST",
      body: JSON.stringify(orderData),
    });

    // 3. Enviamos una notificación por slack (Notificacion externa)
    await fetch("https://hooks.slack.com/services/...", {
      method: "POST",
      body: JSON.stringify({ text: `Nuevo pedido: ${orderData.id}` }),
    });
  }
}