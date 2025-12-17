## SRP 
- order processor 
	- calculateshippingcost seria mas un tema adminsitrativo
	- sendNotification seria también aparte
- reporting engine
	- los tres métodos son diferentes actores, 
Actores:
 - administrativo
 - dpto. técnico
 - dpto. financiero/ventas

b) esta acoplando cosas que no tienen que ver, ya que son de diferentes áreas. Lo ideal seria que cada responsabilidad o area este cohesionado entre si, pero no acoplado con otras responsabilidades o areas. 


## OCP
- el método calculateTax posiblemente seria mejor abstraerlo y usar dependency inversion, recibiendo Un TaxCalculator
- DiscountCalculator: debería tener una abstracción con applyDiscount y cada tipo de discount fuera una implementación diferenciada. en vez de métodos privados ya que implicara ir añadiendo a esa clase tipos de discount

b) bajar acoplamiento en cuanto a que no dependan de implementaciones concretas creadas dentro de la misma clase


## LSP
- el método logDebug no debería formar parte de la interface, debería estar en el standardLogger (también incumple ISP) ya que implicaria que donde se implementa Logger tendra que comprobar que tipo de logger usa en concreto ya que logDebug saca excepción en algun caso
- el método calculateAnnualBonus no se debería sobrescribir, además es posible que la implementación no tenga sentido al ser contractor

no deja substituir clase hija por padre
b) composición


## ISP (segregación interfaces)
en la interface el método archiveOldData entendemos que pertenece al backgroundArchiver, no al frontend. interface demasiado amplia, las clases hija han de implementar cosas que ni siquiera necesitan
b) composicion


## DIP
el uso de abstracciones, por ejemplo instantiateDatabase no debería estar en el businesslogicmodule, no debería estar ligada a implementación concreta de sql o stripe, sino recibir abstracción 
b) acoplamiento con elementos de bajo nivel como la db, o stripe
