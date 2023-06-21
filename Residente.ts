export class Residente {
    private nombre: string;
  
    constructor(nombre: string) {
      this.nombre = nombre;
    }
  
    actualizar(mensaje: string): void {
      console.log(`Residente ${this.nombre} ha recibido una alerta: ${mensaje}`);
    }
  }
  