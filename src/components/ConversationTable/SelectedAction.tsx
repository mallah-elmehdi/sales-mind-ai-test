import { FONTSIZE } from '@/constants/standard';
import { Autorenew, Drafts, EditOutlined, Email, Send } from '@mui/icons-material';
import { IconButton, Stack, Typography } from '@mui/material';

const SelectedAction = () => {
    return (
        <Stack direction="row" alignItems="center" spacing={1} justifyContent="space-between">
            <Typography variant="body2" color="grey.600">
                Selected: {0}
            </Typography>
            <Stack direction="row" alignItems="center">
                <IconButton>
                    <Send sx={{ fontSize: FONTSIZE.lg }} />
                </IconButton>
                <IconButton>
                    <Autorenew sx={{ fontSize: FONTSIZE.lg }} />
                </IconButton>
                <IconButton>
                    <Email sx={{ fontSize: FONTSIZE.lg }} />
                </IconButton>
                <IconButton>
                    <Drafts sx={{ fontSize: FONTSIZE.lg }} />
                </IconButton>
                <IconButton>
                    <EditOutlined sx={{ fontSize: FONTSIZE.lg }} />
                </IconButton>
            </Stack>
        </Stack>
    );
};

export default SelectedAction;
