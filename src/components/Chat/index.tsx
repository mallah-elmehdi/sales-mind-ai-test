import { Conversation } from '@/types/conversation';
import { Drawer, useMediaQuery, useTheme } from '@mui/material';
import { lazy, useContext } from 'react';
import { ConversationContext } from '../ConversationArea';
const ChatCard = lazy(() => import('./ChatCard'));

export type PropsType = { conversation: Conversation; onClose?: () => void };

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
