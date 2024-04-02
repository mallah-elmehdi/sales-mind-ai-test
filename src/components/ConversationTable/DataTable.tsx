'use client';
import { Grid } from '@mui/material';
import Filter from './Filter';
import SelectedAction from './SelectedAction';
import ConversationList from './ConversationList';
import { Conversation } from '@/types/conversation';

const DataTable = ({ data }: { data: Conversation[] }) => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Filter />
            </Grid>
            <Grid item xs={12}>
                <SelectedAction />
            </Grid>
            <Grid item xs={12}>
                <ConversationList data={data} />
            </Grid>
        </Grid>
    );
};

export default DataTable;
