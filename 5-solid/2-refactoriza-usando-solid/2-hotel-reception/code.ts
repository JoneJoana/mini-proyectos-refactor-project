interface MinibarCharger {  
    postMinibarCharge(itemId: string): void; // Carga un producto del minibar a la habitación
}

interface CheckInHandler {
    checkIn(): void; // Permite hacer el checkin de la habitación    
}

interface DigitalKeyGenerator {
    generateDigitalKey(): void; // Genera la llave digital para que el cliente pueda usarla
}

interface HousekeepingStatusSetter {
    setHousekeepingStatus(status: string): void; // Cambia el estado de la habitación (SUCIO, LIMPIO, ...)
}


// Quiosco autoservicio en el lobby
class SelfCheckInKiosk {
  selfCheckInProcess(checkIn: CheckInHandler, key: DigitalKeyGenerator) {
    checkIn.checkIn();
    key.generateDigitalKey();
  }
}