import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private _apiURI: string;

  constructor() {
    this._apiURI = environment.apiUrl;
  }

  getApiURI() {
    return this._apiURI;
  }
}
