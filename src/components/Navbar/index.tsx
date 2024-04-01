import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { AppBar, IconButton, Stack, Toolbar } from '@mui/material';
import Badge from '../Badge';
import Logo from '../Logo';

export default function Navbar() {
    return (
        <AppBar
            position="static"
            sx={{
                boxShadow: 4,
                width: '100%',
                backgroundColor: 'white',
            }}
        >
            <Toolbar>
                <Logo />
                <Stack ml="auto" direction="row" spacing={0.25} alignItems="center">
                    <Badge badgeContent={10}>
                        <IconButton>
                            <NotificationsNoneIcon />
                        </IconButton>
                    </Badge>

                    <Badge badgeContent={5}>
                        <IconButton>
                            <ChatBubbleOutlineIcon />
                        </IconButton>
                    </Badge>

                    <IconButton>
                        <PowerSettingsNewIcon />
                    </IconButton>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}
