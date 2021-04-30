//
//  SocialLink.tsx
//  exclaimation
//
//  Created by d-exclaimation on 5:06 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React, {ReactElement} from 'react';
import {useWindowSize} from '../../../lib/hooks/useWindow';
import {Button, IconButton} from '@chakra-ui/react';
import Link from 'next/link';

interface Props {
    url: string
    name: string
    scheme?: string
    icon: ReactElement
}

const SocialLink: React.FC<Props> = ({url, name, scheme, icon}: React.PropsWithChildren<Props>) => {
    const window = useWindowSize();

    if (window.width < window.height)
        return (
            <Link href={url}>
                <IconButton
                    aria-label={name}
                    variant="ghost"
                    fontSize="min(16px, 3vw + 2px)"
                    colorScheme={scheme}
                    icon={icon}
                />
            </Link>
        );

    return (
        <Link href={url}>
            <Button
                variant="ghost"
                fontSize="min(16px, 3vw + 2px)"
                colorScheme={scheme}
                leftIcon={icon}
            >
                {name}
            </Button>
        </Link>
    );
};

export default SocialLink;
