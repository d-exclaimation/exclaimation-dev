//
//  Language.ts
//  langs-test
//
//  Created by d-exclaimation on 1:10 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

export class Language {
    name: string;
    percent: number;

    constructor(name: string, percentage: string) {
        this.name = name;
        const num = percentage.slice(0, percentage.length - 1);
        this.percent = parseFloat(num);
    }

    get percentage(): string {
        return `${this.percent}%`;
    }

    get toString(): string {
        return `${this.name}: ${this.percentage}`;
    }
}
