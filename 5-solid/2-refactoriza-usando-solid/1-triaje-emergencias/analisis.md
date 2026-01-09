## Describir algoritmo
    - segun los datos del paciente ajusta prioridad
    - predice riesgo
    - si está en cierto riesgo o supera x prioridad:
        - emite sonido
        - guarda en sistema persistencia


## Analizar código en cuanto a departamentos involucrados y posible evolución
    - pueden haber diferentes modelos de ia a aplicar (dpto it)
    - se puede querer que segun situacion o tipo de paciente se aplique un modelo u otro (dpto medico tecnico)
    - las prioridades pueden cambiar de valor o ampliarse a otros casos (dpto medico/administrativo?)
    - el aviso ahora es de sonido pero en el futuro puede quererse de otro tipo o diferente (dpto negocio)
    - ahora se guarda en db pero eso puede cambiar (dpto it)


## Que principio SOLID rompe
    srp porque hay muchos motivos de cambio en esa clase, ocp porque si se amplian las casuisticas implica ir añadiendo if/else, dependency inversion porque esta acoplado a implementaciones


## Refactoriza
    Primero extraigo a otras clases los servicios que quiero desacoplar, TensorFlowModel, BoseSpeakerDriver y BinaryDB, creo abstracciones para ellos y añado constructor en la clase orchestrator, que va a recibir las interfaces aplicando así el DIP. Seguidamente, creo tambien una interface PriorityCalculator con su clase implementada para calcular prioridad. En este punto veo que tengo un constructor con demasiados elementos, por lo que creo la interface de EmergencyHandler que siendo riesgo critico va a hacer 2 cosas activar alarma y guardar datos, ya que entiendo que es la actuación que se hace en caso de emergencia critica. Extraigo metodo privado que evalua siCritico para simplificar la lectura del código. 

    Ahora el metodo prioritizePatient entendiendolo como caso de uso, es nuestro algoritmo principal, no está acoplado a ninguna implementación pero si está cohesionado.
