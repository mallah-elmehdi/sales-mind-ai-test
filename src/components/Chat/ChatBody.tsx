import React from 'react';
import ChatBubble from './ChatBubble';
import { Lead, Message, Sender } from '@/types/conversation';
import { Stack, Typography } from '@mui/material';
import { dateFormatting } from '@/utils/helpers';

type ChatBodyType = {
    messages: Message[];
    lead: Lead;
    sender: Sender;
};

const ChatBody = ({ lead, messages, sender }: ChatBodyType) => {
    return (
        <Stack spacing={2} height="100%" maxHeight={700} sx={{ overflow: 'auto' }}>
            {messages.map((item) => {
                const { year, month, day, date } = dateFormatting(item.date);
                let lastBubble: 'sender' | 'lead' | null = null;

                return (
                    <>
                        <Typography textAlign="center" variant="body2" color="grey.500">
                            {date} {day} {month}, {year}
                        </Typography>

                        {item.chat.map((chatItem, index) => {
                            lastBubble = index === 0 || item.chat[index - 1].isAction ? null : item.chat[index - 1].isReply ? 'sender' : 'lead';

                            return chatItem.isReply ? (
                                <ChatBubble
                                    direction="flex-end"
                                    sx={{
                                        backgroundColor: 'primary.main',
                                        color: 'white',
                                    }}
                                    avatar={sender.avatar}
                                    name={sender.name}
                                    message={chatItem}
                                    isLastMessage={lastBubble === 'sender'}
                                />
                            ) : (
                                <ChatBubble
                                    direction="flex-start"
                                    sx={{
                                        backgroundColor: 'grey.200',
                                        alignSelf: 'flex-end',
                                    }}
                                    avatar={lead.avatar}
                                    name={lead.name}
                                    message={chatItem}
                                    isLastMessage={lastBubble === 'lead'}
                                />
                            );
                        })}
                    </>
                );
            })}
        </Stack>
    );
};

export default ChatBody;
