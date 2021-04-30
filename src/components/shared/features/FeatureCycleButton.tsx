//
//  FeatureCycleButton.tsx
//  exclaimation
//
//  Created by d-exclaimation on 10:02 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {Button, IconButton} from '@chakra-ui/react';
import {RiGameLine} from 'react-icons/ri';
import {useResponsive} from '../../../lib/hooks/useResponsive';

interface Props {
   cycle: () => void
}

const FeatureCycleButton: React.FC<Props> = ({cycle}: React.PropsWithChildren<Props>) => {
    const {isPortrait} = useResponsive();
    if(isPortrait)
        return (
            <IconButton
                variant="ghost"
                colorScheme="tanned"
                aria-label="cycle"
                onClick={() => cycle()}
                icon={<RiGameLine/>}
                style={{
                    animation: 'sectionEntrance 700ms ease-out',
                    animationDelay: '900ms',
                    animationFillMode: 'backwards'
                }}
            />
        );
    return (
        <Button
            variant="ghost"
            fontSize="min(16px, 3vw + 2px)"
            colorScheme="tanned"
            onClick={() => cycle()}
            leftIcon={<RiGameLine/>}
            style={{
                animation: 'sectionEntrance 700ms ease-out',
                animationDelay: '900ms',
                animationFillMode: 'backwards'
            }}
        >
            Mini-games
        </Button>
    );
};

export default React.memo(FeatureCycleButton);
