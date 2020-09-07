import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DictionaryEntry_DTO, DictionaryEntry } from './dataformating';

@Injectable({
  providedIn: 'root',
})
export class DictionaryDataFetchService {
  constructor(private http: HttpClient) {
  }

  url = 'assets';
  data: DictionaryEntry[] = [];

  async initialize() {
    const entriesDTO: DictionaryEntry_DTO[] = await this.http
      .get<DictionaryEntry_DTO[]>(`${this.url}/dummy_backend.json`)
      .toPromise();

    entriesDTO.forEach((element) => {
      let x = new DictionaryEntry();
      x.DTO_to_Entry(element);
      this.data.push(x);
    });
  }
}
