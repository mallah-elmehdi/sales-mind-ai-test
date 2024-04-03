import { Message } from '@/types/conversation';
import { Divider } from '@mui/material';
import { lazy, useEffect, useState } from 'react';
import { ChatBodyType } from './ChatBody';
import ChatControl from './ChatControl';
const ChatBody = lazy(() => import('./ChatBody'));

const ChatArea = ({ lead, messages, sender, id }: ChatBodyType) => {
    const [messagesStack, setMessagesStack] = useState<Message[]>(messages);
    const handleAddNewMessage = (message: Message) => setMessagesStack([...messages, message]);

    useEffect(() => {
        setMessagesStack(messages);
    }, [id, messages]);

    useEffect(() => {
        var chatBody = document.getElementById('chat-body');
        if (chatBody) chatBody.scrollTop = chatBody.scrollHeight;
    }, [id, messagesStack]);

    return (
        <>
            <ChatBody id={id} sender={sender} lead={lead} messages={messagesStack} />
            <Divider sx={{ width: '100%' }} />
            <ChatControl id={id} onNewMessage={handleAddNewMessage} />
        </>
    );
};

export default ChatArea;
