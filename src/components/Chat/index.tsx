import { Conversation } from '@/types/conversation';
import { Divider, Stack } from '@mui/material';
import Card from '../Card';
import ChatBody from './ChatBody';
import ChatHeader from './ChatHeader';
import ChatControl from './ChatControl';

const Chat = ({ conversation }: { conversation: Conversation }) => {
    return (
        <Card>
            <Stack spacing={2} divider={<Divider sx={{ width: '100%' }} />}>
                <ChatHeader
                    status={conversation.status}
                    lead={conversation.lead}
                    company={conversation.company}
                    location={conversation.location}
                />
                <ChatBody id={conversation.id} sender={conversation.sender} lead={conversation.lead} messages={conversation.messages} />

                <ChatControl />
            </Stack>
        </Card>
    );
};

export default Chat;
