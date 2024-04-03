import { Box, Button, ButtonGroup, Grid, MenuItem, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import BorderedCard from './BorderedCard';
import { Send } from '@mui/icons-material';

const buttonStyling = { textTransform: 'lowercase', width: '100%' };
const getVariant = (isValid: boolean) => {
    if (isValid) return 'contained';
    return 'outlined';
};

const ChatControl = () => {
    const [type, setType] = useState('ICE_BREAKER');
    const [variant, setVariant] = useState(0);
    const [text, setText] = useState('');

    const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setType(event.target.value);
    };
    const handleVariantChange = (_variant: number) => {
        setVariant(_variant);
    };
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    useEffect(() => {
        fetch(`http://localhost:3000/api/ai?variant=${variant}&type=${type}`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Failed to fetch data');
            })
            .then((res) => {
                setText(res.message);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [type, variant]);

    return (
        <Grid container gap={1} width="100%">
            <Grid item xs={4}>
                <TextField sx={{ width: '100%' }} value={type} onChange={handleTypeChange} select label="Reply type">
                    <MenuItem value="ICE_BREAKER">Ice Breaker</MenuItem>
                    <MenuItem value="REMINDER">Reminder</MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={7.75}>
                <ButtonGroup sx={{ height: '100%', width: '100%' }}>
                    <Button onClick={() => handleVariantChange(0)} variant={getVariant(variant === 0)} sx={buttonStyling}>
                        Variant 1
                    </Button>
                    <Button onClick={() => handleVariantChange(1)} variant={getVariant(variant === 1)} sx={buttonStyling}>
                        Variant 2
                    </Button>
                    <Button onClick={() => handleVariantChange(2)} variant={getVariant(variant === 2)} sx={buttonStyling}>
                        Variant 3
                    </Button>
                </ButtonGroup>
            </Grid>
            <Grid item xs={12}>
                <BorderedCard>
                    <TextField
                        variant="standard"
                        sx={{
                            width: '100%',
                        }}
                        InputProps={{
                            disableUnderline: true,
                        }}
                        multiline
                        placeholder="Enter your message here..."
                        rows={3}
                        value={text}
                        onChange={handleTextChange}
                    />
                </BorderedCard>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" fullWidth startIcon={<Send />}>
                    Send
                </Button>
            </Grid>
        </Grid>
    );
};

export default ChatControl;
