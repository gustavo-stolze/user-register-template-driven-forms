import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-user-before-and-after',
  templateUrl: './user-before-and-after.component.html',
  styleUrl: './user-before-and-after.component.scss',
})
export class UserBeforeAndAfterComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { originalUser: IUser; updatedUser: IUser }
  ) {}
}
