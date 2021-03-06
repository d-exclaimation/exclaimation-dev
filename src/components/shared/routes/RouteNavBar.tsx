//
//  RouteNavBar.tsx
//  exclaimation
//
//  Created by d-exclaimation on 10:09 AM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//
import { ChevronRightIcon } from '@chakra-ui/icons';
import {
    Box, Breadcrumb, BreadcrumbItem,
    BreadcrumbLink, Button, Flex, Heading, IconButton, Spacer, useDisclosure
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';
import { ascentGradient } from '../../../constants/color.scheme';
import { useResponsive } from '../../../lib/hooks/useResponsive';
import { routes } from '../../../lib/routes';
import { capitalized } from '../../../lib/Typography';
import AscentDrawer from '../containers/AscentDrawer';
import BackgroundViewModel from '../features/BackgroundViewModel';

type Props = {
    isHome?: boolean
}

export const RouteNavBar: React.FC<Props> = ({isHome}: React.PropsWithChildren<Props>) => {
    const res = routes();
    const {isOpen, onClose, onOpen} = useDisclosure();
    const {isPortrait} = useResponsive();


    useEffect(() => {
        onClose();
    }, [isPortrait]);

    return (
        <Flex
            className="Navbar"
            alignItems="center"
            boxShadow="dark-lg"
            bg="bg"
            w="100vw"
            h="8%"
            px="2vmin"
            mb="2vh"
            zIndex={2}
            animation="slideDown 700ms ease-in-out"
        >
            <Box>
                <IconButton
                    aria-label="menu"
                    colorScheme="tanned"
                    variant="ghost"
                    onClick={onOpen}
                    icon={<FiMenu/>}
                />
            </Box>
            <Box p="2">
                <Heading bgGradient={ascentGradient} bgClip="text" size={isPortrait ? 'sm' : 'md'}>d-exclaimation</Heading>
            </Box>
            <Box p="2">
                <Breadcrumb
                    spacing="8px"
                    separator={<ChevronRightIcon color="gray.500" />}
                    fontSize="min(16px, 3vw + 2px)"
                    color="purple"
                >
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">
                            Home
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href="/about">About</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>
            <Spacer/>
            <Box p={2}>
                {
                    isHome
                        ? <BackgroundViewModel />
                        : <Button opacity="0" >{isPortrait ? '' : 'I am not here'}</Button>
                }
            </Box>
            <AscentDrawer title={'d-exclaimation pages'} placement={isPortrait ? 'top' : 'left'} onClose={onClose} isOpen={isOpen}>
                <Flex direction="column">
                    {res.map((val, i) => {
                        const name = val.length > 1 ?
                            capitalized(val.slice(1))
                            : 'Home';
                        return (
                            <Link key={i} href={val}>
                                <Button
                                    variant="ghost"
                                    colorScheme="facebook"
                                    fontSize="min(16px, 3vw + 2px)"
                                    textAlign="left"
                                > { name } </Button>
                            </Link>
                        );
                    })}
                </Flex>
            </AscentDrawer>
        </Flex>
    );
};

export default RouteNavBar;
