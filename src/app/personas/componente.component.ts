import { Component, OnInit } from '@angular/core';
import { PersonasViewModelService } from './servicios.service';

@Component({
  selector: 'app-persona',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css']
})
export class PersonaComponent implements OnInit {
  constructor(private vm: PersonasViewModelService) { }
  public get VM() { return this.vm; }
  ngOnInit() {
    this.vm.list();
  }
}

@Component({
  selector: 'app-persona-list',
  templateUrl: './tmpl-list.component.html',
  styleUrls: ['./componente.component.css']
})
export class PersonaListComponent implements OnInit {
  constructor(private vm: PersonasViewModelService) { }
  public get VM() { return this.vm; }
  ngOnInit() {
  }
}
@Component({
  selector: 'app-persona-add',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.css']
})
export class PersonaAddComponent implements OnInit {
  constructor(private vm: PersonasViewModelService) { }
  public get VM() { return this.vm; }
  ngOnInit() {
  }
}
@Component({
  selector: 'app-persona-edit',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.css']
})
export class PersonaEditComponent implements OnInit {
  constructor(private vm: PersonasViewModelService) { }
  public get VM() { return this.vm; }
  ngOnInit() {
  }
}
@Component({
  selector: 'app-persona-view',
  templateUrl: './tmpl-view.component.html',
  styleUrls: ['./componente.component.css']
})
export class PersonaViewComponent implements OnInit {
  constructor(private vm: PersonasViewModelService) { }
  public get VM() { return this.vm; }
  ngOnInit() {
  }
}

export const PERSONAS_COMPONENT = [
  PersonaComponent,
  PersonaListComponent,
  PersonaAddComponent,
  PersonaEditComponent,
  PersonaViewComponent,
];
