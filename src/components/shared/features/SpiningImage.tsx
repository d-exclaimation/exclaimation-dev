//
//  SpiningImage.tsx
//  exclaimation
//
//  Created by d-exclaimation on 21:05.
//

import { Image } from '@chakra-ui/react';
import React from 'react';
import { useToggle } from '../../../lib/hooks/useToggle';

type Props = {
    src: string,
    width?: number | string 
}

const SpiningImage: React.FC<Props> = ({src, width}: React.PropsWithChildren<Props>) => {
    const [value, toggler] = useToggle();
    return (
        <Image 
            src={src}
            className={value ? 'ScaledSpinning': ''}
            width={width ?? 'unset'}
            borderRadius={value ? '50%' : 'unset'}
            onClick={() => toggler()}
        />
    );
};

export default SpiningImage;