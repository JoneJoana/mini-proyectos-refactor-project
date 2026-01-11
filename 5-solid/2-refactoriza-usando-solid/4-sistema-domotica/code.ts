export abstract class Device {
  constructor(protected id: string, protected room: string) {}

  abstract Activate(): void;
  abstract Deactivate(): void;

  getId(){
    return this.id;
  }
}

class Light extends Device {  
  Activate() {
    console.log(`💡 Light in ${this.room} is now ON`);
  }

  Deactivate() {
    console.log(`💡 Light in ${this.room} is now OFF`);
  }
}

class Thermostat extends Device {
  Activate() {
    console.log(`🌡️ Thermostat in ${this.room} is now HEATING`);
  }

  Deactivate() {
    console.log(`🌡️ Thermostat in ${this.room} is now COOLING`);
  }
}

class Blind extends Device {
  Activate() {
    console.log(`🪟 Blind in ${this.room} is now OPEN`);
  }

  Deactivate() {
    console.log(`🪟 Blind in ${this.room} is now CLOSED`);
  }
}

class SmartHomeController {
  private devices: Device[] = [];

  addDevice(device: Device) {
    this.devices.push(device);
  }

  activateDevice(deviceId: string) {
    const device = this.devices.find((d) => d.getId() === deviceId);
    if (!device) return;

    device.Activate();
  }

  deactivateDevice(deviceId: string) {
    const device = this.devices.find((d) => d.getId() === deviceId);
    if (!device) return;

    device.Deactivate();
  }

  activateAll() {
    this.devices.forEach((device) => {
      device.Activate();
    });
  }
}

// Uso
const controller = new SmartHomeController();
controller.addDevice(new Light("light-1", "Living Room"));
controller.addDevice(new Thermostat("thermo-1", "Bedroom"));
controller.addDevice(new Blind("blind-1", "Kitchen"));

controller.activateAll();
controller.deactivateDevice("light-1");
