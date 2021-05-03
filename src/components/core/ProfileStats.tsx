//
//  ProfileStats.tsx
//  exclaimation
//
//  Created by d-exclaimation on 3:12 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {LanguageSnapShotFragment, ProfileSnapFragment} from '../../models/graphql/types';
import {Box, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Stack} from '@chakra-ui/react';
import Link from 'next/link';
import {useResponsive} from '../../lib/hooks/useResponsive';

interface Props {
    github: ProfileSnapFragment
    topLang: LanguageSnapShotFragment
}

const ProfileStats: React.FC<Props> = ({github, topLang}: React.PropsWithChildren<Props>) => {
    const {isPortrait} = useResponsive();
    return (
        <Stack direction={'column'} color="#fafafa">
            <Box>
                <Link href={github.githubURL + '?tab=repositories'}>
                    <Stat textAlign={'right'}>
                        <StatLabel
                            color="tan"
                            fontSize="min(1rem, 3vw)"
                        >{isPortrait ? 'Repos' : 'Public repos'}</StatLabel>
                        <StatNumber
                            fontSize="min(1rem, 3vw)"
                        >{ github.reposCount }</StatNumber>
                        <StatHelpText
                            fontSize="min(1rem, 3vw)"
                        >
                            <StatArrow type="increase" />
                            {( 1 / github.reposCount).toFixed(2)}%
                        </StatHelpText>
                    </Stat>
                </Link>
            </Box>
            <Box>
                <Stat textAlign={'right'}>
                    <StatLabel
                        color="purple"
                        fontSize="min(1rem, 3vw)"
                    >{isPortrait ? 'Top' : 'Top Language'}</StatLabel>
                    <StatNumber
                        fontSize="min(1rem, 3vw)"
                    >{ topLang.lang }</StatNumber>
                    <StatHelpText
                        fontSize="min(1rem, 3vw)"
                    >
                        <StatArrow type={['Elixir', 'Go', 'TypeScript'].includes(topLang.lang) ? 'increase' : 'decrease'} />
                        {topLang.percentage.toFixed(2)}%
                    </StatHelpText>
                </Stat>
            </Box>
        </Stack>
    );
};

export default ProfileStats;
