import { Residente } from './Residente';

export class AlertaComunitaria {
  private observadores: Residente[] = [];

  adjuntar(observador: Residente): void {
    this.observadores.push(observador);
  }

  desadjuntar(observador: Residente): void {
    const indice = this.observadores.indexOf(observador);
    if (indice !== -1) {
      this.observadores.splice(indice, 1);
    }
  }

  notificar(mensaje: string): void {
    for (const observador of this.observadores) {
      observador.actualizar(mensaje);
    }
  }
}
