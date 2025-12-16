## What pattern can apply?

1. Estamos construyendo la aplicación para hacer el checkin de una aerolínea. Durante el flujo el usuario puede elegir diferentes opciones para complementar su billete. Puede elegir una o la combinación de varias:

    Añadir maletas
    Seleccionar asiento
    Hacer Upgrade para ir en clase business
    Contratar un seguro
    Añadir comida

Suponiendo que tenemos una instancia de una clase Ticket con algunos atributos del vuelo (code, origin, destination, date). ¿Que categoría de problema estamos intentando resolver? ¿Qué patrón/patrones nos facilita la resolución del problema?

# Respuesta: 
Se está intentando resolver un problema estructural ya que hablamos de una instancia ya creada con ciertos atributos (por tanto no estaríamos ante un problema creacional) a la que queremos añadir otras categorias u opciones que complementen esa instancia. Creemos que el patrón que nos puede ayudar aquí es el patrón Decorator, donde cada comportamiento extra seria un decorador. 


2. Tenemos un sistema que tiene algunas funciones que son muy costosas y tardan mucho en ejecutarse. No podemos cambiar la lógica de dichas funciones. ¿Que categoría de problema estamos intentando resolver? ¿Que patrón/patrones de diseño nos ayuda? Esta técnica es muy común en el mundo del software. ¿Cómo se llama? ¿Conoces algo parecido en ReactJS?

# Respuesta:
Pareciera que estamos ante un problema de comportamiento, pero dado que no podemos cambiar el comportamiento de esos métodos justamente, lo que podemos trabajar es a nivel Estructura usando el patrón Proxy ya que así cachearíamos el resultado de esas funciones evitando que se ejecuten de nuevo (siempre que los datos no cambien al menos) reduciendo así el tiempo que tarda en ejecutarse la aplicación. 


3. Nos han contratado para crear una aplicación para la universidad online. Una entidad curso consta de diferentes elementos que pueden ir en cualquier nivel de jerarquía:

    Post
    Video
    Podcast
    Enlaces

Cada elemento aparte de tener información puede contener sub elementos de cualquier otro menos de si mismo. Por ejemplo:

    Un post aparte de tener título y descripción etc, puede contener un podcast o enlaces o videos o todo a la vez.

¿Que categoría de problema estamos intentando resolver? ¿Qué patrón/patrones nos facilita la resolución del problema?

# Respuesta:
Estamos intentado solventar un problema estructural ya que hablamos de como organizamos los objetos de nuestra aplicación. Entendemos que el patrón composite seria el adecuado para resolver esta situación ya que los objetos que tenemos que rerpresentar tienen la forma de árbol, donde uno puede contener a otros. 


4. Tenemos una aplicación en la cual hay un listado de objetos persona cuyas propiedades son (name, surname, age, childrens [número de hijos]). En la aplicación podemos ORDENAR el listado por nombre (alfabético ascendente y descendente), edad (ascendente y descendente) y numero de hijos (ascendente y descendente). Además podemos asociar tanto a un botón como a un shorcut la ordenación (inventarse el shortcut). ¿Que categoría de problema estamos intentando resolver? ¿Qué patrón/patrones nos facilita la resolución del problema?

# Respuesta:
Estamos intentando resolver 2 tipos de problema, ambos de tipo comportamiento. Por un lado, el hecho de poder ordenar por diferentes campos nos lleva a implementar el patrón strategy, ya que el user escogerá como ordena en tiempo de ejecución. Por otro lado, el patrón command, nos ayuda a poder llamar desde diferentes partes a unos comandos que podrán establacerse segun haya elegido el usuario.  

