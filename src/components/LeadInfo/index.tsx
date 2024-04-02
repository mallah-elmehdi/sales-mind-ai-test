import Badge from '@/components/Badge';
import { Lead } from '@/types/conversation';
import { Avatar, Stack, Typography } from '@mui/material';

const LeadInfo = ({ name, avatar, occupation, messagesLength }: Lead) => {
    return (
        <Stack spacing={1} alignSelf="center" direction="row" alignItems="center">
            <Badge
                sx={{
                    '.MuiBadge-badge': {
                        backgroundColor: 'error.light',
                        color: 'white',
                    },
                }}
                badgeContent={messagesLength}
            >
                <Avatar src={avatar} />
            </Badge>
            <Stack spacing={0.5}>
                <Typography lineHeight={1}>{name}</Typography>
                <Typography color="grey.600" lineHeight={1} variant="body2">
                    {occupation}
                </Typography>
            </Stack>
        </Stack>
    );
};

export default LeadInfo;
