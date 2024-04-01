import { FOOTER_MENU } from '@/constants/menu';
import { AppBar, Button, Toolbar } from '@mui/material';
import Link from 'next/link';

const Footer = () => {
    return (
        <AppBar
            position="relative"
            sx={{
                boxShadow: 0,
                backgroundColor: 'white',
            }}
        >
            <Toolbar>
                {FOOTER_MENU.map((item) => (
                    <Link href={item.url} key={item.title}>
                        <Button>{item.title}</Button>
                    </Link>
                ))}
            </Toolbar>
        </AppBar>
    );
};

export default Footer;
