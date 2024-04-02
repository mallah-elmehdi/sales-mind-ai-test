import React, { useEffect } from 'react';
import ChatBubble from './ChatBubble';
import { Lead, Message, Sender } from '@/types/conversation';
import { Stack, Typography } from '@mui/material';
import { dateFormatting } from '@/utils/helpers';
import { ChatBodyType } from './ChatBody';

const ChatBodyContent = ({ lead, messages, sender }: ChatBodyType) => {
    return (
        <>
            {messages.map((item) => {
                const { year, month, day, date } = dateFormatting(item.date);
                let lastBubble: 'sender' | 'lead' | null = null;

                return (
                    <>
                        <Typography textAlign="center" variant="body2" color="grey.500">
                            {date} {day} {month}, {year}
                        </Typography>

                        {item.chat.map((chatItem, index) => {
                            lastBubble =
                                index === 0 || item.chat[index - 1].isAction ? null : item.chat[index - 1].isReply ? 'sender' : 'lead';

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
        </>
    );
};

export default ChatBodyContent;
