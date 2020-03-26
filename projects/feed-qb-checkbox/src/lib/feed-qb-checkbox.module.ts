import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { FeedQbCheckboxComponent } from './feed-qb-checkbox.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [FeedQbCheckboxComponent],
  exports: [FeedQbCheckboxComponent]
})
export class FeedQbCheckboxModule { }
