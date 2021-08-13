import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{ HttpClient } from '@angular/common/http';
import { item } from './item';
@Injectable({
  providedIn: 'root'
})
export class ItemhttpserviceService {
aUrl :string="/assets/data/items.json"
  constructor(private httpClient :HttpClient) { }

  getItems():Observable<item[]>{
    return this.httpClient.get<item[]>(this.aUrl)
  }
}
