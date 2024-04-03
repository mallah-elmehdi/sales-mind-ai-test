import { Avatar, Stack, Typography } from '@mui/material';
import { SxProps } from '@mui/system';
import Card from '../Card';
import { Chat, SentViaEnum } from '@/types/conversation';
import SalesMindAILogo from '@/assets/items/sales-mind-ai-logo.png';
import { Email, Face, LinkedIn, PersonOutline } from '@mui/icons-material';
import { timeFormatting } from '@/utils/helpers';

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

const getIcon = (send_via: SentViaEnum) => {
    if (send_via === SentViaEnum.AI) {
        return <Avatar sx={{ width: 12, height: 12 }} src={SalesMindAILogo.src} />;
    } else {
        return (
            <Avatar sx={{ width: 15, height: 15, backgroundColor: ' transparent' }}>
                {send_via === SentViaEnum.EMAIL ? (
                    <Email sx={{ width: 15, height: 15, color: 'grey.500' }} />
                ) : send_via === SentViaEnum.LINKEDIN ? (
                    <LinkedIn sx={{ width: 15, height: 15, color: 'grey.500' }} />
                ) : send_via === SentViaEnum.HUMAN ? (
                    <PersonOutline sx={{ width: 15, height: 15, color: 'grey.500' }} />
                ) : (
                    <Face sx={{ width: 15, height: 15, color: 'grey.500' }} />
                )}
            </Avatar>
        );
    }
};

const ChatBubble = ({ sx, name, avatar, direction, message, isLastMessage }: ChatBubbleType) => {
    const textAlign = direction === 'flex-start' ? 'left' : 'right';
    const row = direction === 'flex-end' ? 'row' : 'row-reverse';

    return message.isAction ? (
        <Typography sx={{ mb: 1 }} color="grey.700" textAlign={textAlign}>
            {name} {message.status}
            <MessageTime> {timeFormatting(message.time)}</MessageTime>
        </Typography>
    ) : (
        <Stack
            direction="row"
            spacing={1}
            alignSelf={direction}
            // sx={{ ml: 'auto' }}
            flexGrow={1}
            width="100%"
            maxWidth={{ md: '70%', xs: '40rem' }}
        >
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
                    <Stack direction={row} alignItems="center" sx={{ mb: 1 }} spacing={1} justifyContent="space-between">
                        <Stack direction="row" spacing={0.25} alignItems="center">
                            {message.sentVia !== undefined && message.sentVia.map((item) => getIcon(item))}
                        </Stack>
                        <Typography textAlign={textAlign} fontSize="large" fontWeight="semibold">
                            {name}
                        </Typography>
                    </Stack>
                    <Typography fontWeight="light">{message.body}</Typography>
                </Card>
                <MessageTime>{timeFormatting(message.time)}</MessageTime>
            </Stack>
        </Stack>
    );
};

export default ChatBubble;
