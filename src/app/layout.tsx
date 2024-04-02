import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import theme from '@/theme';
import { Box, Stack } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'AI for Sales Prospecting - Generative AI Sales Tools | SalesMind AI',
    description:
        'Streamline your outreach and close more deals with our cutting-edge AI software for sales prospecting. Discover all our generative AI sales tools now!',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        <Stack minHeight="100vh" height="100%" spacing={3}>
                            <Navbar />
                            <Box sx={{ flexGrow: 1, alignSelf: 'center', px: 3 }}>{children}</Box>
                            <Footer />
                        </Stack>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
