import { Sender } from '@/types/conversation';
import { Avatar, Stack, Typography } from '@mui/material';

const SenderInfo = ({ name, avatar }: Sender) => {
    return (
        <Stack spacing={1} alignSelf="center" direction="row" alignItems="center">
            <Avatar src={avatar} />
            <Typography lineHeight={1}>{name}</Typography>
        </Stack>
    );
};

export default SenderInfo;
