//
//  MarkdownForm.tsx
//  exclaimation
//
//  Created by d-exclaimation on 9:39 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import {
    Box, Button, DarkMode, Flex, Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Textarea
} from '@chakra-ui/react';
import React from 'react';
import { useResponsive } from '../../lib/hooks/useResponsive';
import PreviewMarkdown from './PreviewMarkdown';
import TitleEditor from './TitleEditor';

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
        <Box boxShadow="lg" bg="bg" p={isPortrait ? 2 : 4} borderRadius={20}>
            <TitleEditor state={title} changeState={setTitle}/>
            <Box borderRadius={10}>
                <DarkMode>
                    <Tabs isFitted colorScheme="facebook" isManual>
                        <TabList>
                            <Tab outline="none">Write</Tab>
                            <Tab outline="none">Preview</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Textarea
                                    p={isPortrait ? 2 : 4}
                                    bg="bg"
                                    variant="unstyled"
                                    minW="80vw" minH="62.5vh"
                                    size="lg"
                                    color="whiteAlpha.800"
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
