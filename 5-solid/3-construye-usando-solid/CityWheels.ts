type Ride = {
  id: string;
  idVehicle: string;  
  typeVehicle: string;
  idUser: string;
  minutes: number;
  distance: number;
  status: string;
  cost: number;
};

class EndRideProcess {
  EndRide() {
    const ride = this.obtainInformation("1454");
    // Calcular tarifa
    // Gestionar pago
    // Bloquear vehículo
    // Registrar viaje (estado y coste total)
  }

  private obtainInformation(id: string): Ride | undefined{    
    const repo = new RideInMemoryRepository();
    return repo.getById(id);
  }

  private calcCost(){

  }

}

class RideInMemoryRepository {
  private rides: Ride[] = [
    {
      id: "1454",
      idVehicle: "6161CNM",
      typeVehicle: "car",
      idUser: "4611",
      minutes: 10,
      distance: 10.5,
      status: "",
      cost: 0
    },
    {
      id: "5644",
      idVehicle: "8181CBB",
      typeVehicle: "motorcycle",
      idUser: "4511",
      minutes: 30,
      distance: 35,
      status: "",
      cost: 0
    },
    {
      id: "1784",
      idVehicle: "6781KTT",
      typeVehicle: "ebike",
      idUser: "8784",
      minutes: 8,
      distance: 12,
      status: "",
      cost: 0
    },{
      id: "7889",
      idVehicle: "4458CNM",
      typeVehicle: "car",
      idUser: "5896",
      minutes: 15,
      distance: 21,
      status: "",
      cost: 0
    }
  ];

  getAll(){
    return this.rides;
  }

  getById(id: string): Ride | undefined{
    return this.rides.find(r=>r.id == id)
  }
}
