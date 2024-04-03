import { dateFormatting } from '@/utils/helpers';
import { Box, Grow, Typography } from '@mui/material';
import { ChatBodyType } from './ChatBody';
import ChatBubble from './ChatBubble';

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
                            let isNewMessage = false;
                            // if (index === item.chat.length - 1) {
                            // }
                            const now = new Date().getTime();
                            const MessageTime = new Date(chatItem.time).getTime();

                            isNewMessage = now - MessageTime <= 3000;
                            return chatItem.isReply ? (
                                <Grow in={true} {...{ timeout: isNewMessage ? 500 : 0 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
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
                                    </Box>
                                </Grow>
                            ) : (
                                <Grow in={true}>
                                    <div>
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
                                    </div>
                                </Grow>
                            );
                        })}
                    </>
                );
            })}
        </>
    );
};

export default ChatBodyContent;
