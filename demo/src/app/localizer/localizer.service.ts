import { Injectable } from '@angular/core';

/*
  Dummy component for translating to hungarian
 */

@Injectable()
export class LocalizerService {

  translate = (originalText, language) => language === 'hu'
    ? originalText
      .replace('Bear', 'Maci')
      .replace('Cat', 'Cica') : originalText
}
