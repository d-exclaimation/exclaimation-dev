//
//  ProfileStats.tsx
//  exclaimation
//
//  Created by d-exclaimation on 3:12 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {Language, ProfileSnapFragment} from '../../models/graphql/types';
import {Box, HStack, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, VStack} from '@chakra-ui/react';
import Link from 'next/link';
import {favRed, nextBlue} from '../../constants/color.scheme';

interface Props {
    github: ProfileSnapFragment
    topLang: Language
}

const ProfileStats: React.FC<Props> = ({github, topLang}: Props) => {
    return (
        <HStack>
            <Box
                m={2} p={5} borderRadius={20} shadow="dark-lg" color="#fafafa"
            >
                <Link href={github.githubURL + '?tab=repositories'}>
                    <Stat>
                        <StatLabel
                            color={favRed}
                            fontSize="min(20px, 3vw + 2px)"
                        >Public Repos</StatLabel>
                        <StatNumber
                            fontSize="min(20px, 3vw + 2px)"
                        >{ github.reposCount }</StatNumber>
                        <StatHelpText fontSize="min(16px, 3vw + 2px)">
                            <StatArrow type="increase" />
                            {( 1 / github.reposCount).toFixed(2)}%
                        </StatHelpText>
                    </Stat>
                </Link>
            </Box>
            <Box
                m={2} p={5} borderRadius={20} shadow="dark-lg" color="#fafafa"
            >
                <Stat>
                    <StatLabel
                        color={nextBlue}
                        fontSize="min(20px, 3vw + 2px)"
                    > Top Language </StatLabel>
                    <StatNumber
                        fontSize="min(20px, 3vw + 2px)"
                    >{ topLang.lang }</StatNumber>
                    <StatHelpText fontSize="min(16px, 3vw + 2px)">
                        <StatArrow type="increase" />
                        {topLang.percentage.toFixed(2)}%
                    </StatHelpText>
                </Stat>
            </Box>
        </HStack>
    );
};

export default ProfileStats;
