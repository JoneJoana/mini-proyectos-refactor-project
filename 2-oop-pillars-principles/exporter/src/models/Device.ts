import type { TelemetryItem } from "./TelemetryItem";

export class Device {
    private id: number;
    private name: string;
    private mac: string;
    private geolocation: Location;
    private telemetry: TelemetryItem[];
    
    constructor(id:number, name: string, mac: string, geolocation: Location, telemetry: TelemetryItem[]){
        this.id = id;
        this.name = name;
        this.mac = mac;
        this.geolocation = geolocation;
        this.telemetry = telemetry;
    }
} 