import { Component, OnInit } from '@angular/core';
import { DictionaryDataFetchService } from './data_and_services/dictionary-data-fetch.service';
import { DictionaryEntry_DTO, DictionaryEntry } from './data_and_services/dataformating';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private dataSr: DictionaryDataFetchService ){
    
  }

  title = 'AlbanianEnglishDictionary';

  getDataSr(): DictionaryDataFetchService{
    return this.dataSr;
  }

  async ngOnInit() {
    console.log("init app comp");
    await this.dataSr.initialize();
    console.log(this.dataSr.data[0].word);
  }
}
