import { Injectable } from '@angular/core';
import { LoggerService } from 'src/indra-core';
import { NotificationService } from '../comunes';
import { ModoCRUD, RESTDAOService } from '../base-code/crud';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonasDAO extends RESTDAOService<any, any> {
  constructor(http: HttpClient) {
    super(http, 'personas', { withCredentials: true });
  }
}

@Injectable()
export class PersonasViewModelDAOService {
  protected modo: ModoCRUD = 'list';
  protected listado: Array<any> = [];
  protected elemento: any = {};
  protected idOriginal: any = null;

  constructor(protected notify: NotificationService,
              protected out: LoggerService,
              protected dao: PersonasDAO) { }

  public get Modo() { return this.modo; }
  public get Listado() { return this.listado; }
  public get Elemento() { return this.elemento; }

  list() {
    this.dao.query().subscribe(
      data => {
        this.listado = data;
        this.modo = 'list';
      },
      err => this.notify.add(err.message)
    );
  }

  add() {
    this.elemento = {};
    this.modo = 'add';
  }
  edit(key: any) {
    this.dao.get(key).subscribe(
      data => {
        this.elemento = data;
        this.idOriginal = key;
        this.modo = 'edit';
      },
      err => this.notify.add(err.message)
    );
  }
  view(key: any) {
    this.dao.get(key).subscribe(
      data => {
        this.elemento = data;
        this.modo = 'view';
      },
      err => this.notify.add(err.message)
    );
  }
  delete(key: any) {
    if (!window.confirm('¿Estas seguro?')) {
      return;
    }
    this.dao.remove(key).subscribe(
      data => {
        this.list();
      },
      err => this.notify.add(err.message)
    );
  }

  cancel() {
    this.elemento = {};
    this.idOriginal = null;
    this.list();
  }
  send() {
    switch (this.modo) {
      case 'add':
        this.dao.add(this.elemento).subscribe(
          data => this.cancel(),
          err => this.notify.add(err.message)
        );
        break;
      case 'edit':
        this.dao.change(this.idOriginal, this.elemento).subscribe(
          data => this.cancel(),
          err => this.notify.add(err.message)
        );
        break;
      case 'view':
        this.cancel();
        break;
    }
  }
}

@Injectable()
export class PersonasViewModelService {
  protected modo: ModoCRUD = 'list';
  protected listado: Array<any> = [];
  protected elemento: any = {};
  protected idOriginal: any = null;
  protected pk = 'id';

  constructor(protected notify: NotificationService,
              protected out: LoggerService) { }

  public get Modo() { return this.modo; }
  public get Listado() { return this.listado; }
  public get Elemento() { return this.elemento; }

  list() {
    if (this.listado.length === 0) {
      this.listado = [
        { id: 1, nombre: 'Carmelo', apellidos: 'Coton', edad: 45 },
        { id: 2, nombre: 'Pepito', apellidos: 'Grillo', edad: 100 },
        { id: 3, nombre: 'Pedro', apellidos: 'Pica Piedra', edad: 50 },
        { id: 4, nombre: 'Pablo', apellidos: 'Marmol', edad: 34 },
      ];
    }
    this.modo = 'list';
  }

  add() {
    this.elemento = {};
    this.modo = 'add';
  }
  edit(key: any) {
    // tslint:disable-next-line: triple-equals
    const rslt = this.listado.find(item => item[this.pk] == key);
    if (rslt) {
      this.elemento = Object.assign({}, rslt);
      this.idOriginal = key;
      this.modo = 'edit';
    } else {
      this.notify.add('Elemento no encontrado');
    }
  }
  view(key: any) {
    // tslint:disable-next-line: triple-equals
    const rslt = this.listado.find(item => item[this.pk] == key);
    if (rslt) {
      this.elemento = Object.assign({}, rslt);
      this.modo = 'view';
    } else {
      this.notify.add('Elemento no encontrado');
    }
  }
  delete(key: any) {
    if (!window.confirm('¿Estas seguro?')) {
      return;
    }
    // tslint:disable-next-line: triple-equals
    const ind = this.listado.findIndex(item => item[this.pk] == key);
    if (ind >= 0) {
      this.listado.splice(ind, 1);
      this.list();
    } else {
      this.notify.add('Elemento no encontrado');
    }
  }

  cancel() {
    this.elemento = {};
    this.idOriginal = null;
    this.list();
  }
  send() {
    switch (this.modo) {
      case 'add':
        this.listado.push(this.elemento);
        this.cancel();
        break;
      case 'edit':
        // tslint:disable-next-line:triple-equals
        const ind = this.listado.findIndex(item => item[this.pk] == this.idOriginal);
        if (ind >= 0) {
          this.listado[ind] = this.elemento;
          this.cancel();
        } else {
          this.notify.add('Elemento no encontrado');
        }
        break;
      case 'view':
        this.cancel();
        break;
    }
  }
}
