'use client';
import { BORDER_RADIUS } from '@/constants/standard';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';

const Card = styled(MuiCard)(({ theme }) => ({
    padding: theme.spacing(3),
    boxShadow: theme.shadows[2],
    borderRadius: BORDER_RADIUS.md,
}));

export default Card;
