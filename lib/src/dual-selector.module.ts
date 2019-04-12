
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DualSelectorComponent } from './dual-selector.component';

@NgModule({
  declarations: [
    DualSelectorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [],
  exports: [DualSelectorComponent]
})
export class DualSelectorModule { }
