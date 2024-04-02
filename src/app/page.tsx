import ConversationTable from '@/components/ConversationTable';
import InboxHeader from '@/components/InboxHeader';
import { Box, Grid } from '@mui/material';

export default function Home() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <InboxHeader />
            </Grid>
            <Grid item md={7} xs={12}>
                <ConversationTable />
            </Grid>
            <Grid item xs={12}>
            </Grid>
        </Grid>
    );
}
