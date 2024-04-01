'use client';
import { styled, Badge as MuiBadge, colors } from '@mui/material';

const Badge = styled(MuiBadge)(({ theme }) => ({
    '.MuiBadge-badge': {
        right: 6,
        top: 6,
        transform: 'translate(50%, -50%)',
        backgroundColor: colors.blue[800],
    },
}));

export default Badge;
