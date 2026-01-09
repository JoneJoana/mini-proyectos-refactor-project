type PatientVitals = {
  heartRate: number;
  oxygenSaturation: number;
  age: number;
};

class TraumaCenterOrchestrator {
  constructor(
    private readonly priorityCalculator: PriorityCalculator,
    private readonly aiModel: AiModel,
    private readonly handler: EmergencyHandler
  ) {}

  prioritizePatient(patient: PatientVitals): void {
    // 1. Lógica de Negocio Aumenta la prioridad para ciertas condiciones
    const priorityScore = this.priorityCalculator.calculate(patient);

    // 2. Predicción usando IA del riesgo
    const riskLevel = this.aiModel.predictRisk(patient);

    if (this.isCritical(priorityScore, riskLevel)) {
      //3. handle emergency in case critical
      this.handler.handle(patient);
    }
  }

  private isCritical(priorityScore: number, riskLevel: string): boolean {
    return riskLevel === "CRITICAL" || priorityScore > 140;
  }
}

export interface PriorityCalculator {
  calculate(patient: PatientVitals): number;
}

export interface AiModel {
  predictRisk(patient: PatientVitals): string;
}

export interface PatientRepository {
  write(message: string): void;
}

export interface SpeakerDriver {
  emitSound(volume: number, alert: string): void;
}

export interface EmergencyHandler {
  handle(patient: PatientVitals): void;
}

export class MedicalPriorityCalculator implements PriorityCalculator {
  calculate(patient: PatientVitals): number {
    let priorityScore = 0;
    if (patient.heartRate > 120) priorityScore += 50;
    if (patient.oxygenSaturation < 90) priorityScore += 100;

    return priorityScore;
  }
}

export class TensorFlowModel implements AiModel {
  constructor(private readonly version: string) {}

  predictRisk(patient: PatientVitals): string {
    return "";
  }
}

export class BinaryDB implements PatientRepository {
  write(message: string): void {}
}

export class BoseSpeakerDriver implements SpeakerDriver {
  emitSound(volume: number, alert: string): void {}
}

export class CriticalEmergencyHandler implements EmergencyHandler {
  constructor(
    private readonly alarmSpeaker: SpeakerDriver,
    private readonly patientRepository: PatientRepository
  ) {}

  handle(patient: PatientVitals): void {
    // 3. Efecto secundario físico. emitir un sonido a 80dB
    this.alarmSpeaker.emitSound(80, "RED_ALERT");

    // Persistencia
    this.patientRepository.write(`CRITICAL EMERGENCY: ${patient.age}y`);
  }
}


//USE CASE
const alarmSpeaker = new BoseSpeakerDriver();
const patientRepository = new BinaryDB();

const aiModel = new TensorFlowModel("v2.4-medical");
const priorityCalculator = new MedicalPriorityCalculator();
const handler = new CriticalEmergencyHandler(alarmSpeaker, patientRepository);
const patient: PatientVitals = {
    heartRate: 150,
    oxygenSaturation: 15,
    age: 45
}

const orchestrator = new TraumaCenterOrchestrator(priorityCalculator, aiModel, handler);
orchestrator.prioritizePatient(patient);