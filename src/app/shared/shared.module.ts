import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CircleSpinnerComponent } from './circle-spinner/circle-spinner.component';



@NgModule({
  declarations: [
    CircleSpinnerComponent
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,

  ],
  exports : [
    NgxSpinnerModule,
    CircleSpinnerComponent
  ], 
})
export class SharedModule { }
