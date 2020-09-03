import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DictionaryEntry_DTO, DictionaryEntry } from './dataformating';

@Injectable({
  providedIn: 'root'
})
export class DictionaryDataFetchService {

  constructor(private http: HttpClient) {
    this.getData().subscribe((entriesDTO: DictionaryEntry_DTO[]) => {
      let length = entriesDTO.length;
      entriesDTO.forEach(element => {
        let x = new DictionaryEntry();
        x.DTO_to_Entry(element);
        this.data.push(x);
      });
    });
  }

  url = 'data_and_services';
  data: DictionaryEntry[]; 

  getData(): Observable<DictionaryEntry_DTO[]> {
    return this
            .http
            .get(`${this.url}/dummy_backend.json`) as Observable<DictionaryEntry_DTO[]>;
  }

}
