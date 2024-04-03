'use client';
import { STATUS } from '@/constants/programme';
import { Grid, MenuItem, TextField } from '@mui/material';
import React from 'react';

const Filter = () => {
    return (
        <Grid container spacing={{ md: 1, xs: 3 }}>
            {/* ---------- FILTER */}
            <Grid item md={3} sm={6} xs={12}>
                <TextField sx={{ width: '100%' }} label="Search" placeholder="Name, company or title" />
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
                <TextField sx={{ width: '100%' }} select label="Campaign" defaultValue="all">
                    <MenuItem value="all">All</MenuItem>
                </TextField>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
                <TextField sx={{ width: '100%' }} select label="Team" defaultValue="all">
                    <MenuItem value="all">All</MenuItem>
                </TextField>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
                <TextField sx={{ width: '100%' }} select label="Lead Status" defaultValue="all">
                    <MenuItem value="all">All</MenuItem>
                    {STATUS.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
        </Grid>
    );
};

export default Filter;
