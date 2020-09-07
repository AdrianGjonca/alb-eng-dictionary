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

  private _initPromise: Promise<DictionaryEntry_DTO[]>;

  async initialize() {
    if (this._initPromise) {
      return this._initPromise;
    }

    this._initPromise = this.http
    .get<DictionaryEntry_DTO[]>(`${this.url}/dummy_backend.json`)
    .toPromise()

    return this._initPromise.then((entriesDTO: DictionaryEntry_DTO[]) => {
      entriesDTO.forEach((element) => {
        let x = new DictionaryEntry();
        x.DTO_to_Entry(element);
        this.data.push(x);
      });
    });
  }
}

// app component => await dataService.initialize() 
// second component => await dataserive.init()
// third component => await dataserive.init()
