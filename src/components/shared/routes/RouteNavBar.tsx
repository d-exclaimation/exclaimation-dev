//
//  RouteNavBar.tsx
//  exclaimation
//
//  Created by d-exclaimation on 10:09 AM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//
import React, {useEffect} from 'react';
import {
    Button,
    DarkMode,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    IconButton,
    Flex,
    Spacer,
    Box,
    Heading,
    useDisclosure,
    BreadcrumbItem,
    BreadcrumbLink,
    Breadcrumb,
} from '@chakra-ui/react';
import {useResponsive} from '../../../lib/hooks/useResponsive';
import {capitalized} from '../../../lib/Typography';
import Link from 'next/link';
import {routes} from '../../../lib/routes';
import {FiMenu} from 'react-icons/fi';
import {ChevronRightIcon} from '@chakra-ui/icons';
import BackgroundViewModel from '../features/BackgroundViewModel';
import {ascentGradient} from '../../../constants/color.scheme';

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
        <nav style={{marginBottom: '3vh'}}>
            <Flex
                alignItems="center"
                boxShadow="dark-lg"
                bg="bg"
                w="100vw"
                h="8%"
                px="2vmin"
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
                            ? <BackgroundViewModel isHome={isHome || false} />
                            : <Button opacity="0" >{isPortrait ? '' : 'I am not here'}</Button>
                    }
                </Box>
                <DarkMode>
                    <Drawer placement={isPortrait ? 'top' : 'left'}  onClose={onClose} isOpen={isOpen}>
                        <DrawerOverlay>
                            <DrawerContent color="tan">
                                <DrawerHeader borderBottomWidth="1px">d-exclaimation pages</DrawerHeader>
                                <DrawerBody>
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
                                </DrawerBody>
                            </DrawerContent>
                        </DrawerOverlay>
                    </Drawer>
                </DarkMode>
            </Flex>
        </nav>
    );
};

export default RouteNavBar;
