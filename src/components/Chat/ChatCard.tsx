import { Divider, Stack } from '@mui/material';
import { PropsType } from '.';
import Card from '../Card';
import ChatArea from './ChatArea';
import ChatHeader from './ChatHeader';

const ChatCard = ({ conversation, onClose }: PropsType) => {
    return (
        <Card sx={{ overflow: 'auto' }}>
            <Stack spacing={2}>
                <ChatHeader
                    status={conversation.status}
                    lead={conversation.lead}
                    company={conversation.company}
                    location={conversation.location}
                    onClose={onClose}
                />
                <Divider sx={{ width: '100%' }} />
                <ChatArea id={conversation.id} sender={conversation.sender} lead={conversation.lead} messages={conversation.messages} />
            </Stack>
        </Card>
    );
};

export default ChatCard;
