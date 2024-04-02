import { Chip } from '@mui/material';
import React from 'react';

const getChipColors = (status: string): string => {
    if (status === 'Interested') return 'warning.main';
    if (status === 'Qualified Lead') return 'success.light';
    if (status === 'Referral') return 'warning.light';
    if (status === 'Not Interested') return 'error.light';
    return 'default';
};

const Tag = ({ status }: { status: string }) => {
    return <Chip size="small" sx={{ backgroundColor: getChipColors(status), color: 'white', width: '100%' }} label={status} />;
};
export default Tag;
