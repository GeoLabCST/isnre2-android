import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmphoePage } from './amphoe';

@NgModule({
  declarations: [
    AmphoePage,
  ],
  imports: [
    IonicPageModule.forChild(AmphoePage),
  ],
})
export class AmphoePageModule {}
