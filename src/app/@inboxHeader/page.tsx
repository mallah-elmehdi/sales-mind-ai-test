import { Divider, Typography } from '@mui/material';

export default function InboxHeader() {
    return (
        <div>
            <Typography variant="body1">Inbox</Typography>
            <Typography variant="body2" color="grey.600">
                Total: 120
                <Typography sx={{ ml: 1 }} variant="body2" component="span" color="warning.main">
                    Unread: 33
                </Typography>
            </Typography>
            <Divider sx={{ mt: 1 }} />
        </div>
    );
}
