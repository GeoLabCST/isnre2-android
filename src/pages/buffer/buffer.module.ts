import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BufferPage } from './buffer';

@NgModule({
  declarations: [
    BufferPage,
  ],
  imports: [
    IonicPageModule.forChild(BufferPage),
  ],
})
export class BufferPageModule {}
