import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DepositsDto } from '../models/deposits.model';
// import { DepositsJson } from '../../assets/json/deposits.json';

@Injectable({
  providedIn: 'root'
})
export class DepositsService {
  private _depositsJsonUrl = '../../assets/json/deposits.json'
  constructor(
    private http: HttpClient
  ) {}

  public getJSON(): Observable<DepositsDto> {
    return this.http.get<DepositsDto>(this._depositsJsonUrl);
  }
}
