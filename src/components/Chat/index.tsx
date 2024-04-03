import { Conversation } from '@/types/conversation';
import { Divider, Stack, useMediaQuery, useTheme, Drawer, Box } from '@mui/material';
import Card from '../Card';
import ChatArea from './ChatArea';
import ChatHeader from './ChatHeader';
import { useContext } from 'react';
import { ConversationContext } from '../ConversationArea';

type PropsType = { conversation: Conversation; onClose?: () => void };

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

const Chat = ({ conversation }: PropsType) => {
    const theme = useTheme();
    const lg = useMediaQuery(theme.breakpoints.up('lg'));

    let context = useContext(ConversationContext);
    if (context === null) throw new Error('context is null');

    const { openDrawer, toggleDrawer, closeChat } = context;

    return lg ? (
        <ChatCard conversation={conversation} onClose={() => closeChat()} />
    ) : (
        <Drawer open={openDrawer} anchor="bottom" variant="temporary">
            <ChatCard conversation={conversation} onClose={() => toggleDrawer(false)} />
        </Drawer>
    );
};

export default Chat;
