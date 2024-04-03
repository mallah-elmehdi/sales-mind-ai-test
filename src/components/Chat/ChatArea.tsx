import React, { useEffect, useState } from 'react';
import ChatBody, { ChatBodyType } from './ChatBody';
import ChatControl from './ChatControl';
import { Chat, Message } from '@/types/conversation';
import { Divider } from '@mui/material';

const ChatArea = ({ lead, messages, sender, id }: ChatBodyType) => {
    const [messagesStack, setMessagesStack] = useState<Message[]>(messages);
    const handleAddNewMessage = (message: Message) => setMessagesStack([...messages, message]);

    useEffect(() => {
        setMessagesStack(messages);
    }, [id]);

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
