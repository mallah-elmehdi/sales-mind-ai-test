import { Conversation } from '@/types/conversation';
import React from 'react';
import Card from '../Card';
import ChatHeader from './ChatHeader';
import { Divider, Stack } from '@mui/material';
import ChatBody from './ChatBody';

const Chat = ({ conversation }: { conversation: Conversation }) => {
    return (
        <Card sx={{ maxHeight: 400, height: '100%' }}>
            <Stack spacing={2} divider={<Divider sx={{ width: '100%' }} />}>
                <ChatHeader
                    status={conversation.status}
                    lead={conversation.lead}
                    company={conversation.company}
                    location={conversation.location}
                />
                <ChatBody />
            </Stack>
        </Card>
    );
};

export default Chat;
