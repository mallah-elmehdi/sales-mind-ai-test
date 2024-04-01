import InboxHeader from '@/components/InboxHeader';
import { Box, Grid } from '@mui/material';

export default function Home() {
    return (
        <Grid container spacing={3}>
            <Grid xs={12}>
                <InboxHeader />
            </Grid>
        </Grid>
    );
}
