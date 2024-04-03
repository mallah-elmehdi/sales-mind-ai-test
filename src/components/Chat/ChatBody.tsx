import { Lead, Message, Sender } from '@/types/conversation';
import { Stack } from '@mui/material';
import ChatBodyContent from './ChatBodyContent';

export type ChatBodyType = {
    messages: Message[];
    lead: Lead;
    sender: Sender;
    id: string;
};

const ChatBody = (props: ChatBodyType) => {
    return (
        <Stack id="chat-body" spacing={2} height="100%" maxHeight={700} flexGrow={1} sx={{ overflow: 'auto' }}>
            <ChatBodyContent {...props} />
        </Stack>
    );
};

export default ChatBody;
