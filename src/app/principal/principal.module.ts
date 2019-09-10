import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../principal/home/home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent,
  ],
  imports: [
    CommonModule
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
