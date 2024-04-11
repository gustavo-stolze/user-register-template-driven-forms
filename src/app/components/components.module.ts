import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from '../angular-material.module';
import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';
import { UsersCardListComponent } from './users-card-list/users-card-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { provideNativeDateAdapter } from '@angular/material/core';
import { UserBeforeAndAfterComponent } from './user-before-and-after/user-before-and-after.component';


@NgModule({
  declarations: [UsersCardListComponent, UserFormComponent, UserBeforeAndAfterComponent],
  imports: [
    FormsModule,
    BrowserModule,
    AngularMaterialModule,
    DirectivesModule,
    PipesModule,
  ],
  exports: [UsersCardListComponent, UserFormComponent],
})
export class ComponentsModule {}
