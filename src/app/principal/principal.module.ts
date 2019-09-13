import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../principal/home/home.component';
import { AjaxWaitComponent } from './ajax-wait';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HomeComponent, AjaxWaitComponent, MenuComponent, PageNotFoundComponent,
  ],
  exports: [
    HomeComponent, AjaxWaitComponent, MenuComponent, PageNotFoundComponent,
  ],
  imports: [
    CommonModule, AppRoutingModule,
  ]
})
export class PrincipalModule {
  constructor( @Optional() @SkipSelf() parentModule: PrincipalModule) {
    if (parentModule) {
      const msg = `PrincipalModule has already been loaded.
        Import PrincipalModule once, only, in the root AppModule.`;
      throw new Error(msg);
    }
  }
}
