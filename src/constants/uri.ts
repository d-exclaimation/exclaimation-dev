//
//  uri.ts
//  exclaimation
//
//  Created by d-exclaimation on 9:00 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

export const __graph__ = process.env.GRAPHQL || process.env.NEXT_PUBLIC_GRAPHQL || 'http://localhost:4000/graphql';
export const __profile__ = process.env.GITHUB || '';
export const __repos__ = process.env.REPOS || '';
export const __lang__ = process.env.LANGUAGES || '';
