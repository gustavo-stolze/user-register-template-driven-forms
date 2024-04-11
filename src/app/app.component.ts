import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { GenresService } from './services/genres.service';
import { BrazilianStateService } from './services/brazilian-states.service';
import { UsersListResponse } from './types/users-list-response';
import { GenresListResponse } from './types/genres-list-response';
import { StatesListResponse } from './types/states-list-response';
import { IUser } from './interfaces/user/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { UserBeforeAndAfterComponent } from './components/user-before-and-after/user-before-and-after.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  userSelected: IUser = {} as IUser;
  userSelectedIndex: number | undefined;

  usersList: UsersListResponse = [];
  genresList: GenresListResponse = [];
  statesList: StatesListResponse = [];

  constructor(
    private readonly _usersService: UsersService,
    private readonly _genresService: GenresService,
    private readonly _brazilianStatesService: BrazilianStateService,
    private readonly _matDialog: MatDialog
  ) {}
  ngOnInit() {
    this.getUsers();
    this.getGenres();
    this.getStates();
  }

  onUserSelected(userIndex: number) {
    const userFound = this.usersList[userIndex];
    if (!userFound) return;
    this.userSelectedIndex = userIndex;
    this.userSelected = structuredClone(userFound);
  }

  onFormSubmit() {
    if (!this.userSelectedIndex) return;
    const originalUser = this.usersList[this.userSelectedIndex];
    this.openBeforeAndAferDialog(originalUser, this.userSelected, this.userSelectedIndex);
  }
  openBeforeAndAferDialog(originalUser: IUser, updatedUser: IUser, userSelectedIndex: number) {
    const dialogRef = this._matDialog.open(UserBeforeAndAfterComponent, {
      minWidth: '70%',
      data: {
        originalUser,
        updatedUser,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        //...
        this.confirmUserUpdate(updatedUser, userSelectedIndex);
      }
    });
  }
  confirmUserUpdate(updatedUser: IUser, userSelectedIndex: number) {
    this.usersList[userSelectedIndex] = structuredClone(updatedUser);
    console.log('lista de usuários atualizada:', this.usersList);
  }

  private getStates() {
    this._brazilianStatesService.getStates().subscribe((statesListResponse) => {
      this.statesList = statesListResponse;
    });
  }

  private getGenres() {
    this._genresService.getGenres().subscribe((genresListResponse) => {
      this.genresList = genresListResponse;
    });
  }

  private getUsers() {
    this._usersService.getUsers().subscribe((usersListResponse) => {
      this.usersList = usersListResponse;
    });
  }
}
