//
//  ProjectGrid.tsx
//  personal
//
//  Created by d-exclaimation on 1:59 AM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//
import React from 'react';
import ShowCard from '../templates/ShowCard';
import { SimpleGrid } from '@chakra-ui/react';

import {useWindowSize} from '../../lib/hooks/useWindow';
import {langBar} from '../../lib/LanguageBarURL';
import {drivePlayURL} from '../../lib/GoogleDriveURL';
import {RepoSnapshotFragment} from '../../models/graphql/types';

interface Props {
    repos: RepoSnapshotFragment[]
}

const ProjectGrid: React.FC<Props> = ({ repos }: Props) => {
    const window = useWindowSize();
    const grid = Math.floor(window.width / 240);
    const langImage = (lang: string): string => {
        const url = langBar.get(lang) ?? langBar.get('exclaim') ?? 'none';
        return drivePlayURL(url);
    };

    return (
        <SimpleGrid>
            <SimpleGrid
                columns={Math.min(3, grid)} borderRadius={10}
                p={2}
                spacing={4}
            >
                { repos.map(item => {
                    return (
                        <ShowCard
                            key={item.id}
                            imageUrl={langImage(`${item.language}`.toLowerCase())}
                            title={item.name}
                            body={item.description || item.repoName}
                            url={item.url}
                        />
                    );
                })}
            </SimpleGrid>
        </SimpleGrid>
    );
};

export default ProjectGrid;
