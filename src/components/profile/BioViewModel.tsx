//
//  BioViewModel.tsx
//  exclaimation
//
//  Created by d-exclaimation on 7:39 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//
import React from 'react';
import {BioSection} from '../../models/interfaces/BioSection';
import Bio from './Bio';
import {VStack} from '@chakra-ui/react';

interface Props {
    bio: BioSection[]
}

const BioViewModel: React.FC<Props> = ({bio}: React.PropsWithChildren<Props>) => {
    return (
        <VStack bg="bg" h="clamp(20vh, 60vh, auto)" spacing={8} boxShadow="dark-lg" p="2vmin">
            { bio.map((curr, i) => {
                return (
                    <Bio key={i} title={curr.title} bio={curr.bio}/>
                );
            }) }
        </VStack>
    );
};

export default BioViewModel;
