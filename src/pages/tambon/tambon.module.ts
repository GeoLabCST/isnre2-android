import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TambonPage } from './tambon';

@NgModule({
  declarations: [
    TambonPage,
  ],
  imports: [
    IonicPageModule.forChild(TambonPage),
  ],
})
export class TambonPageModule {}
