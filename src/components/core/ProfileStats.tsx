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
import {favRed, nextBlue} from '../../constants/color.scheme';
import {useResponsive} from '../../lib/hooks/useResponsive';

interface Props {
    github: ProfileSnapFragment
    topLang: LanguageSnapShotFragment
}

const ProfileStats: React.FC<Props> = ({github, topLang}: Props) => {
    const {isMobile} = useResponsive();
    return (
        <Stack direction={'column'} color="#fafafa">
            <Box>
                <Link href={github.githubURL + '?tab=repositories'}>
                    <Stat textAlign={'right'}>
                        <StatLabel
                            color={favRed}
                            fontSize="min(1rem, 3vw)"
                        >{isMobile ? 'Repos' : 'Public repos'}</StatLabel>
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
                        color={nextBlue}
                        fontSize="min(1rem, 3vw)"
                    >{isMobile ? 'Top' : 'Top Language'}</StatLabel>
                    <StatNumber
                        fontSize="min(1rem, 3vw)"
                    >{ topLang.lang }</StatNumber>
                    <StatHelpText
                        fontSize="min(1rem, 3vw)"
                    >
                        <StatArrow type="increase" />
                        {topLang.percentage.toFixed(2)}%
                    </StatHelpText>
                </Stat>
            </Box>
        </Stack>
    );
};

export default ProfileStats;
