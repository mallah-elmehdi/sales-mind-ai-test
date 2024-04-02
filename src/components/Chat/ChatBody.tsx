import { Lead, Message, Sender } from '@/types/conversation';
import { Stack } from '@mui/material';
import { useEffect } from 'react';
import ChatBodyContent from './ChatBodyContent';

export type ChatBodyType = {
    messages: Message[];
    lead: Lead;
    sender: Sender;
};

const ChatBody = (props: ChatBodyType) => {
    useEffect(() => {
        var chatBody = document.getElementById('chat-body');
        if (chatBody) chatBody.scrollTop = chatBody.scrollHeight;
    }, []);

    return (
        <Stack id="chat-body" spacing={2} height="100%" maxHeight={700} sx={{ overflow: 'auto' }}>
            <ChatBodyContent {...props} />
        </Stack>
    );
};

export default ChatBody;
