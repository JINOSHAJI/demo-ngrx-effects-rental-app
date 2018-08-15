import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseApiUrl: string ='http://localhost/RealEstate/api/';
  constructor() { }
}
