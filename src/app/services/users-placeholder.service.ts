import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersPlaceHolderListResponse } from '../types/users-placeholder-list-response';

@Injectable({
  providedIn: 'root',
})
export class UsersPlaceHolderService {
  constructor(private readonly _httpClient: HttpClient) {}

  getUsersPlaceHolder(): Observable<UsersPlaceHolderListResponse> {
    return this._httpClient.get<UsersPlaceHolderListResponse>('https://jsonplaceholder.typicode.com/users');
  }
}
