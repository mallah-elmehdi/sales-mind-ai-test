'use client';
import { ConversationContext } from '@/components/ConversationArea';
import LeadInfo from '@/components/LeadInfo';
import SenderInfo from '@/components/SenderInfo';
import Tag from '@/components/Tag';
import { Conversation } from '@/types/conversation';
import { DataGrid } from '@mui/x-data-grid';
import { memo, useContext } from 'react';
import Action from './Action';

const ConversationList = ({ data }: { data: Conversation[] }) => {
    let context = useContext(ConversationContext);
    if (context === null) throw new Error('context is null');

    const { openChat, toggleDrawer } = context;

    return (
        <DataGrid
            hideFooter
            sx={{
                border: 0,
                '.MuiDataGrid-cell': {
                    ':last-child': {
                        justifyContent: 'center',
                    },
                    alignItems: 'center',
                    display: 'flex',
                },
                maxHeight: 2000,
                overflow: 'auto',
            }}
            disableRowSelectionOnClick
            onRowClick={({ id }) => {
                openChat(id.toString());
                toggleDrawer(true);
            }}
            checkboxSelection
            rowHeight={80}
            columns={[
                {
                    headerName: 'Lead',
                    field: 'lead',
                    flex: 1,
                    renderCell: ({ value }) => {
                        return <LeadInfo {...value} />;
                    },
                },
                {
                    headerName: 'Tags',
                    flex: 1,
                    field: 'status',
                    renderCell: ({ value }) => {
                        return <Tag status={value} fullWidth={true} />;
                    },
                },
                {
                    field: 'campaign',
                    headerName: 'Campaign',
                    flex: 1,
                },
                {
                    field: 'sender',
                    headerName: 'Sender',
                    flex: 1,
                    renderCell: ({ value }) => {
                        return <SenderInfo {...value} />;
                    },
                },
                {
                    field: 'lastMessage',
                    headerName: 'Last message',
                },
                {
                    field: '',
                    width: 3,
                    renderCell: ({ row }) => {
                        const { id } = row;
                        return <Action id={id} />;
                    },
                },
            ]}
            rows={data}
        />
    );
};

export default memo(ConversationList);
