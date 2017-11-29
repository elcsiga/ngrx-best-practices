import { Injectable } from '@angular/core';

@Injectable()
export class LocalizerService {

  translate = (originalText, language) => language === 'hu'
    ? originalText
      .replace('Bear', 'Maci')
      .replace('Cat', 'Cica') : originalText
}
