import { Conversation } from '@/types/conversation';
import { Divider, Stack } from '@mui/material';
import Card from '../Card';
import ChatArea from './ChatArea';
import ChatHeader from './ChatHeader';

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
               <ChatArea id={conversation.id} sender={conversation.sender} lead={conversation.lead} messages={conversation.messages}  />
            </Stack>
        </Card>
    );
};

export default Chat;
