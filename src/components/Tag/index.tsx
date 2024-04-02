import { Chip } from '@mui/material';
import React from 'react';

const getChipColors = (status: string): string => {
    if (status === 'Interested') return 'warning.main';
    if (status === 'Qualified Lead') return 'success.light';
    if (status === 'Referral') return 'warning.light';
    if (status === 'Not Interested') return 'error.light';
    return 'default';
};

const Tag = ({ status, fullWidth }: { status: string; fullWidth?: Boolean }) => {
    return (
        <Chip
            size="small"
            sx={{ backgroundColor: getChipColors(status), color: 'white', width: fullWidth ? '100%' : 'fit-content' }}
            label={status}
        />
    );
};
export default Tag;
