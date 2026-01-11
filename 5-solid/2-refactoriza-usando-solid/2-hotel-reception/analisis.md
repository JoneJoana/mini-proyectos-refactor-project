## Describir algoritmo
    Auto checkin en un hotel que primera realiza el checkin y despues genera una llave digital


## Analizar código en cuanto a departamentos involucrados y posible evolución
    La interface se plantea genérica para gestionar una habitacion, tiene metodos muy diversos, donde pueden estar involucrados departamentos como administración (facturación de productos), dpto gestión limpieza, recepción del hotel (check in como tal)


## Que principio SOLID rompe
    Principalmente el Interface Segregation Principle ya que tenemos una interface muy genérica, esto mismo nos indica que se está rompiendo el Srp ya que esa interface tiene demasiadas responsabilidades y entiendo que tambien puede romperse el Ocp, ya que en el futuro pueden haber otras funcionalidades asociadas con una habitación cosa que implicaría añadir más metodos. 


## Refactoriza
    He dudado entre separar el check in de la creacion de la llave digital en si, primero pensando que era parte del mismo proceso de checkin podian ir juntos, al darle una vuelta y plantearme si esa generacion de llave se hace unicamente cuando se hace checkin o no... he decidido que no, por tanto tiene más sentido que sea una accion separada. 