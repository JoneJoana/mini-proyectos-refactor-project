## Describir algoritmo
    hay una serie de devices, el controller puede añadir los devices pertinentes, activarlos todos, activar uno y desactivar uno. Lo que se hace en el caso de uso es añadir los 3 tipos, activarlos todos y desactivar la luz. 


## Analizar código en cuanto a departamentos involucrados y posible evolución
    Departamentos involucrados serian negocio, que sabe que devices hay y que funciones tienen, no sabria decir que otros departamentos hay. 

## Que principio SOLID rompe
    Esta rompiendo DIP ya que no hay abstracciones, se puede ver tambien que podria perfectamente haber una estructura de herencia y las  implementaciones no estan siendo intercambiables debido a los nombres de las funciones específicos de cada device. OCP ya que hay if else segun tipo.