//
//  ExBoxedIcon.tsx
//  exclaimation
//
//  Created by d-exclaimation on 7:55 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { Icon } from '@chakra-ui/react';
import React, { useState } from 'react';

interface Props {
    w: string | number
}

export const ExBoxedIcon: React.FC<Props> = ({w}: React.PropsWithChildren<Props>) => {
    const [isSpinning, setSpinning] = useState(false);
    return (
        <Icon className={isSpinning ? 'Spinning' : ''} onClick={() => setSpinning(prev => !prev)} w={w} h="auto" p="1em" zIndex={1}viewBox="0 0 212 212" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="212" height="212" rx="20" fill="#F3ECFF"/>
            <path d="M58.7308 119.762C64.6572 119.762 69.4616 114.667 69.4616 108.381C69.4616 102.096 64.6572 97 58.7308 97C52.8043 97 48 102.096 48 108.381C48 114.667 52.8043 119.762 58.7308 119.762Z" fill="#282C34"/>
            <path d="M152.626 119.762C158.552 119.762 163.357 114.667 163.357 108.381C163.357 102.096 158.552 97 152.626 97C146.699 97 141.895 102.096 141.895 108.381C141.895 114.667 146.699 119.762 152.626 119.762Z" fill="#282C34"/>
            <path d="M60.4746 134.59H154.413" stroke="#282C34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </Icon>
    );
};

export default ExBoxedIcon;
