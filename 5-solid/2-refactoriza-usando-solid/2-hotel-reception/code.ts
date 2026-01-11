interface MinibarManager {  
    postMinibarCharge(itemId: string): void; // Carga un producto del minibar a la habitación
}

interface CheckInHandler {
    checkIn(): void; // Permite hacer el checkin de la habitación
    generateDigitalKey(): void; // Genera la llave digital para que el cliente pueda usarla
}

interface HousekeepingManager {
    setHousekeepingStatus(status: string): void; // Cambia el estado de la habitación (SUCIO, LIMPIO, ...)
}


// Quiosco autoservicio en el lobby
class SelfCheckInKiosk {
  completeProcess(stay: CheckInHandler) {
    stay.checkIn();
    stay.generateDigitalKey();
  }
}