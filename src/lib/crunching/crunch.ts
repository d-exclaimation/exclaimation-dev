//
//  crunch.ts
//  langs-test
//
//  Created by d-exclaimation on 12:55 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import {Language} from './Language';

export const getTexts = (raw: string): string[] => {
    return raw.split('\n').filter(line => line.includes('"lang-name"')).slice(0, 2);
};

export const getStatistic = (lang: string, percentage: string): Language => {
    const [i, j] = [lang.indexOf('">') + 1, lang.indexOf('</')];
    const [k, l] = [percentage.indexOf('">') + 1, percentage.indexOf('</')];
    return new Language(lang.slice(i + 1, j), percentage.slice(k + 1, l));
};
