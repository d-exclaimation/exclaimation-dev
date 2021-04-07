//
//  MarkdownEditor.tsx
//  exclaimation
//
//  Created by d-exclaimation on 5:00 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React, {useState} from 'react';
import {
    Box, FormControl, FormLabel, Textarea, Button,
    Tabs, TabList, TabPanels, Tab, TabPanel
} from '@chakra-ui/react';
import {useWindowSize} from '../../lib/hooks/useWindow';
import PreviewMarkdown from './PreviewMarkdown';

const MarkdownEditor: React.FC = () => {
    const window = useWindowSize();
    const [form, setForm] = useState<string>('');
    return (
        <>
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
                                value={form}
                                placeholder="Enter your post body here"
                                onChange={e => setForm(e.target.value)}
                            />
                        </TabPanel>
                        <TabPanel>
                            <PreviewMarkdown body={form} />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </>
    );
};

export default MarkdownEditor;
