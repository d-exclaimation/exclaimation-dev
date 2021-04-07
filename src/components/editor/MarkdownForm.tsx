//
//  MarkdownForm.tsx
//  exclaimation
//
//  Created by d-exclaimation on 9:39 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import TitleEditor from './TitleEditor';
import {Box, Tab, TabList, TabPanel, TabPanels, Tabs, Textarea} from '@chakra-ui/react';
import PreviewMarkdown from './PreviewMarkdown';
import {useWindowSize} from '../../lib/hooks/useWindow';

interface Props {
    title: string,
    setTitle: (val: string) => void,
    body: string,
    setBody: (val: string) => void
}

const MarkdownForm: React.FC<Props> = ({title, body, setTitle, setBody}: Props) => {
    const window = useWindowSize();
    return (
        <>
            <TitleEditor state={title} changeState={setTitle}/>
            <Box p={window.width < window.height ? 2 : 4} boxShadow="dark-lg" borderRadius={10}>
                <Tabs isFitted variant="unstyled" colorScheme="teal" isManual>
                    <TabList>
                        <Tab _selected={{ color: 'teal.200' }}>Editor</Tab>
                        <Tab _selected={{ color: 'red.200' }} >Preview</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Textarea
                                variant="flushed"
                                minW={Math.floor(window.width / 1.25)} minH={Math.floor(window.height / 1.6)}
                                size="lg"
                                color="#fafafa"
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
            </Box>
        </>
    );
};

export default MarkdownForm;
