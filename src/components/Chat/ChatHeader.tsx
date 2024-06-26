import { Lead } from '@/types/conversation';
import { Close } from '@mui/icons-material';
import { Avatar, IconButton, Stack, Typography } from '@mui/material';
import Tag from '../Tag';

type ChatHeaderType = { lead: Lead; company: string; location: string; status: string; onClose?: () => void };

const ChatHeader = ({ lead, company, location, status, onClose }: ChatHeaderType) => {

    return (
        <Stack>
            <Stack direction="row" spacing={1} alignItems="center">
                <Avatar src={lead.avatar} />
                <Stack spacing={0.5} flexGrow={1}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography lineHeight={1}>{lead.name}</Typography>
                        <Tag status={status} />
                    </Stack>
                    <Typography color="grey.600" lineHeight={1} variant="body2">
                        Occupation: {lead.occupation}
                    </Typography>
                </Stack>

                <Stack spacing={0.5} direction="row">
                    <IconButton onClick={onClose}>
                        <Close />
                    </IconButton>
                </Stack>
            </Stack>

            <Stack spacing={0.5} mt={2}>
                <Typography color="grey.600" lineHeight={1} variant="body2">
                    Company: {company}
                </Typography>
                <Typography color="grey.600" lineHeight={1} variant="body2">
                    Location: {location}
                </Typography>
            </Stack>
        </Stack>
    );
};

export default ChatHeader;
