import { Injectable } from '@angular/core';
import { LoggerService } from 'src/indra-core';

export enum NotificationType {
  error, warn, info, log
}

export class Notification {
  constructor(private id: number,
              private msg: string,
              private tipo: NotificationType = NotificationType.error) { }
  public get Id() { return this.id; }
  public get Message() { return this.msg; }
  public get Tipo() { return this.tipo; }

}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private listado: Array<Notification> = [];

  constructor(private log: LoggerService) { }

  public get Listado() { return Object.assign([], this.listado); }
  public get HayNotificaciones() { return this.listado.length > 0; }

  public add(msg: string, tipo: NotificationType = NotificationType.error) {
    if (!msg || msg === '') {
      this.log.error('Falta el mensaje.');
      return;
    }
    const id = this.listado.length === 0 ? 1 :
      (this.listado[this.listado.length - 1].Id + 1);
    this.listado.push(new Notification(id, msg, tipo));
    if (tipo === NotificationType.error) {
      this.log.error(`NOTIFICACION: ${msg}`);
    }
  }

  public remove(index: number) {
    if (0 <= index && index < this.listado.length) {
      this.listado.splice(index, 1);
    } else {
      this.log.error('Index out of range.');
    }
  }

  public clear() {
    this.listado.splice(0);
  }

}
