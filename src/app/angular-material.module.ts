import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
// import {  } from '@angular/material';

@NgModule({
  imports: [MatCardModule, MatInputModule, MatFormFieldModule],
  exports: [MatCardModule, MatInputModule, MatFormFieldModule],
})
export class AngularMaterialModule {}
