## Análisis inicial:

El primer bloque puede ir aumentando en numero de validaciones, lo que lo convertiria en un infinito de if else, segun cada regla. 
En cuanto al segundo bloque, se puede querer guardar en algun otro sistema de persistencia o de otra manera. 
Y el 3r bloque de notificación lo mismo, ahora es para slack , en el futuro puede ser enviada a través de otras plataformas. 

En el código inical se está rompiendo el Single Responsability principle, ya que el método de crear tiene muchas razones de cambio, es decir que hace operaciones de diferentes "departamentos" en un mismo sitio, valida ciertas cosas, guarda en ddbb y envia notificación externa. A su vez, el mismo hecho de que se pueda cambiar o añadir diferentes sistemas de persistencia o de notificación nos indica que se está rompiendo el Open close principle, ya que implicaria añadir más casos segun se fuesen necesitando, cosa que ampliaria la clase por tanto rompiendo el principio indicado.



En el primer paso del refactor, extraigo el guardado en persistencia a una nueva clase y para no caer en romper el principio de inversion de dependencias, añado una interface para los sistemas de persistencia y hago que la clase OrderService, reciba por constructor el sistema de persistencia que necesite. 
Lo mismo para el notifier.

En cuanto a desacoplar el sistema de validación, solo creo clase sin interface ya que entiendo que no van a haber diferentes implementaciones de validación, en todo caso diferentes reglas a aplicar para validar una orden. (concepto value objects? Order podria tener validaciones en el propio constructor). 

Como ultimo refactor, elimino el paso de notificar ya que no es estrictamente un paso necesario para la creación, por lo que directamente puede no tener sentido que esté en el método directamente. 