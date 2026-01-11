## Describir algoritmo
    Cada vez que se construye el feed, se coge la lista de posts y por cada uno, segun el tipo de contenido se crea un html u otro. 


## Analizar código en cuanto a departamentos involucrados y posible evolución
    Se van a involucrar departamentos como el de negocio en cuanto a que tipo de contenidos hay, el dpta de UX/UI en cuanto a como se muestra el post en cada caso. Se pueden añadir más tipo de contenido, lo que implicara que contentType crezca demasiado en el tipo Post, que se tenan que añadir n else if en el metodo buildFeedItem, si se quiere cambiar la tecnologia de html a algun framework implicará diversos cambios.. 


## Que principio SOLID rompe
    SRP, OCP y DIP. Hay demasiadas razones de cambio en el código inicial, al aparecer otros tipos de contenido vamos a tener que ir añadiendo casuisticas y se depende totalmente de implementaciones no hay ninguna abstracción. 


## Refactoriza