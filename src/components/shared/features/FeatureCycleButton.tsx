//
//  FeatureCycleButton.tsx
//  exclaimation
//
//  Created by d-exclaimation on 10:02 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {IconButton} from '@chakra-ui/react';
import {RiGameFill} from 'react-icons/ri';

interface Props {
   cycle: () => void
}

const FeatureCycleButton: React.FC<Props> = ({cycle}: Props) => {
    return (
        <IconButton
            variant="ghost"
            colorScheme="orange"
            boxShadow="dark-lg"
            aria-label="cycle"
            pos="absolute"
            bottom="1vmin"
            right="1vmin"
            m="1vmin"
            onClick={() => cycle()}
            icon={<RiGameFill/>}
            style={{
                animation: 'sectionEntrance 700ms ease-out',
                animationDelay: '900ms',
                animationFillMode: 'backwards'
            }}
        />
    );
};

export default React.memo(FeatureCycleButton);
