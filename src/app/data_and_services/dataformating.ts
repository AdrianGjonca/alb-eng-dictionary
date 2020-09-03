export class DictionaryEntry {
    word: string;
    language: string;
    definition: string;
    translations: string[][];
    DTO_to_Entry(dto: DictionaryEntry_DTO){
        this.word = dto.word;
        this.language = dto.language;
        this.definition = dto.definition;
        this.translations = dto.translations;
    }
}
export interface DictionaryEntry_DTO {
    word: string;
    language: string;
    definition: string;
    translations: string[][];
}
