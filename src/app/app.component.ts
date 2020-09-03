import { Component } from '@angular/core';
import { DictionaryDataFetchService } from './data_and_services/dictionary-data-fetch.service';
import { DictionaryEntry_DTO, DictionaryEntry } from './data_and_services/dataformating';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dataSr: DictionaryDataFetchService ){
    //console.log(dataSr.data[0].word);
  }

  title = 'AlbanianEnglishDictionary';

  getDataSr(): DictionaryDataFetchService{
    return this.dataSr;
  }
}
