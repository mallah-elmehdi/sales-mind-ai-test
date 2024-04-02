'use client';
import Chat from '@/components/Chat';
import ConversationTable from '@/components/ConversationTable';
import NoChat from '@/components/NoChat';
import { Conversation } from '@/types/conversation';
import { Grid } from '@mui/material';
import React, { createContext } from 'react';

type ConversationContextType = {
    openChat: (id: string) => void;
};

export const ConversationContext = createContext<ConversationContextType | null>(null);

const ConversationArea = ({ data }: { data: Conversation[] }) => {
    const [conversation, setConversation] = React.useState<Conversation | null>(null);
    const handleOpenConversation = (id: string) => setConversation(data.find((item) => item.id === id) || null);
    const handleCloseConversation = () => setConversation(null);

    return (
        <ConversationContext.Provider
            value={{
                openChat: handleOpenConversation,
            }}
        >
            <div>
                <Grid container spacing={3}>
                    <Grid item lg={7} xs={12}>
                        <ConversationTable data={data} />
                    </Grid>
                    <Grid item lg={5} xs={12}>
                        {conversation ? <Chat conversation={conversation} /> : <NoChat />}
                    </Grid>
                </Grid>
            </div>
        </ConversationContext.Provider>
    );
};

export default ConversationArea;