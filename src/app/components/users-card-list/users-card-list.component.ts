import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersListResponse } from '../../types/users-list-response';

@Component({
  selector: 'app-users-card-list',
  templateUrl: './users-card-list.component.html',
  styleUrl: './users-card-list.component.scss',
})
export class UsersCardListComponent {
  @Input() usersList: UsersListResponse = [];

  @Output('onUserSelected') onUserSelectedEmitt = new EventEmitter<number>();

  onUserSelected(index: number) {
    this.onUserSelectedEmitt.emit(index);
  }
}