//
//  FooterDisclaimer.tsx
//  exclaimation
//
//  Created by d-exclaimation on 1:36 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {Text} from '@chakra-ui/react';

const FooterDisclaimer: React.FC = () => {
    return (
        <Text
            p={5} color="gray.500"
            fontSize="min(10px, 1vw)"
        > { 'Copyright © 2021 d-exclaimation. All rights reserved.' } </Text>
    );
};

export default FooterDisclaimer;
