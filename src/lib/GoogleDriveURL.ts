//
//  GoogleDriveURL.ts
//  app
//
//  Created by d-exclaimation on 3:16 PM.
//  Copyright © 2020 d-exclaimation. All rights reserved.
//

export const drivePlayID = (id: string): string => {
    // Given a google drive sound id, return url to play it
    return `https://docs.google.com/uc?export=download&id=${id}`;
};

export const drivePlayURL = (url: string): string => {
    // Get id from the url
    const id = url.split('//')[1].split('/')[3];
    return drivePlayID(id);
};
