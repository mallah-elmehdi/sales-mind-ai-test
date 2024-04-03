import { Grid } from '@mui/material';
import Filter from './Filter';
import SelectedAction from './SelectedAction';
import ConversationList from './ConversationList';
import { Conversation } from '@/types/conversation';
import React, { memo } from 'react';
import Card from '../Card';

const ConversationTable = ({ data }: { data: Conversation[] }) => {
    return (
        <Card>
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
        </Card>
    );
};

export default memo(ConversationTable);
