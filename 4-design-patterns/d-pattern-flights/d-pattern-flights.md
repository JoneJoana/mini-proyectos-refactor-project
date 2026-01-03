
### Objetivo de la feature a introducir:

- Consultar a distintos proveedores segun duración del viaje
- Recibe petición estándar:
    - Aplicar regla de negocio para seleccionar proveedor
    - Adaptar la petición al formato correspondiente
    - Unificar respuesta para el cliente

### Patrones que nos ayudan a resolver el problema planteado:

- Adapter: en cuanto a adaptarnos a los formatos de petición y respuesta de cada proveedor respecto al de nuestro cliente
- Factory/Strategy: en cuanto a elegir o crear segun regla de negocio el proveedor adecuado. Tratamos de hacer el diseño del patron strategy y no resulta adecuado, por lo que se intenta aplicar el patrón Factory como mejor solución

