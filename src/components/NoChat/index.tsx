import { Forum } from '@mui/icons-material';
import { Typography } from '@mui/joy';
import { Stack } from '@mui/material';

const NoChat = () => {
    return (
        <Stack
            sx={{
                height: '100%',
                minHeight: 300,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            spacing={1}
        >
            <Forum fontSize="large" color="disabled" />
            <Typography color="neutral" variant="soft">
                Please select a conversation
            </Typography>
        </Stack>
    );
};

export default NoChat;
