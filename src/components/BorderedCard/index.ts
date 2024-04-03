'use client';
import Card from '@/components/Card';
import { styled } from '@mui/material/styles';

const BorderedCard = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    border: '1px solid',
    borderColor: theme.palette.divider,
    padding: theme.spacing(1),
}));

export default BorderedCard;
