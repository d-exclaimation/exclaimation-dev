//
//  MusicList.tsx
//  exclaimation
//
//  Created by d-exclaimation on 10:07 AM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {
    Button, Text,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';
import {IMedia} from '../models/interfaces/Media';
import {useDynamicCorner} from '../lib/hooks/useDynamicCorner';
import {useDynamicSize} from '../lib/hooks/useDynamicSize';
import {favRed} from '../constants/color.scheme';

interface Props {
    curr: IMedia | null,
    setCurr: (val: IMedia | null) => void,
    musics: IMedia[],
}

type ColorScheme = 'blue' | 'cyan' | 'gray' | 'green' | 'orange' | 'pink' | 'purple' | 'red' | 'teal' | 'yellow' | 'whiteAlpha' | 'blackAlpha' | 'linkedin' | 'facebook' | 'messenger' | 'whatsapp' | 'twitter' | 'telegram'

const scheme = (index: number): ColorScheme => {
    const option: ColorScheme[] = ['blue', 'cyan', 'gray', 'green', 'orange', 'pink', 'purple', 'red', 'teal', 'yellow', 'whiteAlpha', 'blackAlpha'];
    const curr = index % option.length;
    return option[curr];
};

const MusicList: React.FC<Props> = ({curr, setCurr, musics}: Props) => {
    const corner = useDynamicCorner();
    const bSize = useDynamicSize();
    const [isShown, setShown] = React.useState<boolean>(false);

    return (
        <>
            <Button
                size={bSize}
                pos="absolute" bottom={corner.y} right={corner.x}
                variant="ghost"
                color={favRed}
                boxShadow="dark-lg"
                onClick={() => setShown(true)}
            >
                Show List
            </Button>
            <Drawer
                isOpen={isShown}
                placement="right"
                onClose={() => setShown(false)}
            >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Choose your jam</DrawerHeader>

                        <DrawerBody>
                            { musics.map(({name, url}, i) => (
                                <Button
                                    key={i}
                                    variant="ghost"
                                    colorScheme={scheme(i)}
                                    m={2}
                                    onClick={() => {
                                        setShown(false);
                                        if(curr) {
                                            setCurr(null);
                                            setTimeout(() => setCurr({ name, url }), 0);
                                            return;
                                        }
                                        setCurr({ name, url });
                                    }}
                                >{ name }</Button>
                            ))}
                        </DrawerBody>

                        <DrawerFooter>
                            <Text> Music is owned by their respective owner </Text>
                        </DrawerFooter>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>


        </>

    );
};

export default MusicList;
