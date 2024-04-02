import { Avatar, Stack, Typography } from '@mui/material';
import { SxProps } from '@mui/system';
import Card from '../Card';
import { Chat } from '@/types/conversation';

type ChatBubbleType = {
    name: string;
    avatar: string;
    sx?: SxProps;
    direction: string;
    isLastMessage: boolean;
    message: Chat;
};

const MessageTime = ({ children }: { children: React.ReactNode }) => {
    return (
        <Typography component="span" sx={{ mt: 1 }} textAlign="right" fontSize="small" fontWeight="light" color="grey.500">
            {children}
        </Typography>
    );
};

const ChatBubble = ({ sx, name, avatar, direction, message, isLastMessage }: ChatBubbleType) => {
    const textAlign = direction === 'flex-start' ? 'left' : 'right';

    return message.isAction ? (
        <Typography sx={{ mb: 1 }} color="grey.700" textAlign={textAlign}>
            {name} {message.status}
            <MessageTime> {message.time}</MessageTime>
        </Typography>
    ) : (
        <Stack direction="row" spacing={1} alignSelf={direction} flexGrow={1} width="100%" maxWidth={{ md: '70%', xs: '40rem' }}>
            <Avatar src={avatar} sx={{ opacity: isLastMessage ? 0 : 1 }} />

            <Stack flexGrow={1}>
                <Card
                    sx={{
                        flexGrow: 1,
                        p: 1,
                        boxShadow: 'none',
                        width: '100%',
                        ...(sx ? sx : {}),
                    }}
                >
                    <Typography sx={{ mb: 1 }} textAlign={textAlign} fontSize="large" fontWeight="semibold">
                        {name}
                    </Typography>
                    <Typography fontWeight="light">{message.body}</Typography>
                </Card>
                <MessageTime>{message.time}</MessageTime>
            </Stack>
        </Stack>
    );
};

export default ChatBubble;
