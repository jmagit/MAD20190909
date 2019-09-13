import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonasViewModelService } from './servicios.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

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
    this.vm.list();
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
    this.vm.add();
  }
}
@Component({
  selector: 'app-persona-edit',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.css']
})
export class PersonaEditComponent implements OnInit, OnDestroy {
  constructor(private vm: PersonasViewModelService,
    private route: ActivatedRoute, private router: Router) { }
  public get VM() { return this.vm; }
  private obs$: any;
  ngOnInit() {
     this.obs$ = this.route.paramMap.subscribe(
       (params: ParamMap) => {
       const id = +params.get('id'); // (+) converts string 'id' to a number
       if (id) {
         this.vm.edit(id);
       } else {
         this.router.navigate(['/404.html']);
       }
      });
   }
   ngOnDestroy() { this.obs$.unsubscribe(); }

}
@Component({
  selector: 'app-persona-view',
  templateUrl: './tmpl-view.component.html',
  styleUrls: ['./componente.component.css']
})
export class PersonaViewComponent implements OnInit, OnDestroy {
  constructor(private vm: PersonasViewModelService,
    private route: ActivatedRoute, private router: Router) { }
  public get VM() { return this.vm; }
  private obs$: any;
  ngOnInit() {
     this.obs$ = this.route.paramMap.subscribe(
       (params: ParamMap) => {
       const id = +params.get('id'); // (+) converts string 'id' to a number
       if (id) {
         this.vm.view(id);
       } else {
         this.router.navigate(['/404.html']);
       }
      });
   }
   ngOnDestroy() { this.obs$.unsubscribe(); }

}

export const PERSONAS_COMPONENT = [
  PersonaComponent,
  PersonaListComponent,
  PersonaAddComponent,
  PersonaEditComponent,
  PersonaViewComponent,
];
