import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
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
