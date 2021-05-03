//
//  MarkdownForm.tsx
//  exclaimation
//
//  Created by d-exclaimation on 9:39 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import TitleEditor from './TitleEditor';
import {
    Box,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Textarea,
    DarkMode,
    Button,
    Flex,
} from '@chakra-ui/react';
import PreviewMarkdown from './PreviewMarkdown';
import {useResponsive} from '../../lib/hooks/useResponsive';

interface Props {
    title: string,
    setTitle: (val: string) => void,
    body: string,
    setBody: (val: string) => void,
    setAlert: (val: boolean) => void
}

const MarkdownForm: React.FC<Props> = ({title, body, setTitle, setBody, setAlert}: React.PropsWithChildren<Props>) => {
    const {isPortrait} = useResponsive();
    return (
        <Box boxShadow="dark-lg" bg="bg" p={isPortrait ? 2 : 4} borderRadius={20}>
            <TitleEditor state={title} changeState={setTitle}/>
            <Box borderRadius={10}>
                <DarkMode>
                    <Tabs isFitted colorScheme="linkedin" isManual>
                        <TabList>
                            <Tab>Write</Tab>
                            <Tab>Preview</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Textarea
                                    p={isPortrait ? 2 : 4}
                                    bg="cover"
                                    variant="unstyled"
                                    minW="80vw" minH="62.5vh"
                                    size="lg"
                                    color="gray.400"
                                    value={body}
                                    placeholder="Enter your post body here"
                                    onChange={e => setBody(e.target.value)}
                                />
                            </TabPanel>
                            <TabPanel>
                                <PreviewMarkdown body={body} />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                    <Flex justifyContent="flex-end">
                        <Button mx={isPortrait ? 2 : 4} variant="ghost" colorScheme="teal" onClick={() => setAlert(true)}>Submit</Button>
                    </Flex>
                </DarkMode>
            </Box>
        </Box>
    );
};

export default MarkdownForm;
