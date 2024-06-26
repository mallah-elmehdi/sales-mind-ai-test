import BorderedCard from '@/components/BorderedCard';
import { BORDER_RADIUS } from '@/constants/standard';
import { Message } from '@/types/conversation';
import { Cached, Send } from '@mui/icons-material';
import { Button, ButtonGroup, Grid, MenuItem, Stack, TextField } from '@mui/material';
import React, { useEffect, useState, useCallback, useTransition } from 'react';
import AddImageMenu from '../AddImageMenu';
import AttachedFileMenu from '../AttachedFileMenu';
import EmojiMenu from '../EmojiMenu';

const buttonStyling = { textTransform: 'lowercase', width: '100%' };
const getVariant = (isValid: boolean) => {
    if (isValid) return 'contained';
    return 'outlined';
};

const ChatControl = ({ id, onNewMessage }: { id: string; onNewMessage: (message: Message) => void }) => {
    const [type, setType] = useState('ICE_BREAKER');
    const [variant, setVariant] = useState(0);
    const [text, setText] = useState('');
    const [isPending, startTransition] = useTransition();

    const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setType(event.target.value);
    };
    const handleVariantChange = (_variant: number) => {
        setVariant(_variant);
    };
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const handleSendMessage = useCallback((text: string, id: string) => {
        fetch(`http://localhost:3000/api/conversations`, {
            method: 'POST',
            body: JSON.stringify({
                body: text,
                id,
            }),
        })
            .then((response) => response.json())
            .then((data) => onNewMessage(data.data));
    }, []);

    const handleGetAISuggestionMessage = useCallback((type: string, variant: number) => {
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
    }, []);

    useEffect(() => {
        startTransition(() => {
            handleGetAISuggestionMessage(type, variant);
        });
    }, [type, variant]);

    return (
        <Grid container spacing={1} width="100%">
            <Grid item sm={4} xs={12}>
                <TextField sx={{ width: '100%' }} value={type} onChange={handleTypeChange} select label="Reply type">
                    <MenuItem value="ICE_BREAKER">Ice Breaker</MenuItem>
                    <MenuItem value="REMINDER">Reminder</MenuItem>
                </TextField>
            </Grid>
            <Grid item sm={8} xs={12}>
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
                    <Stack
                        direction={{ sm: 'row', xs: 'column' }}
                        spacing={2}
                        mt={2}
                        justifyContent="space-between"
                        alignItems={{ sm: 'center', xs: 'flex-start' }}
                    >
                        <Stack direction="row" spacing={1} mt={2} alignItems="center">
                            <EmojiMenu addEmoji={(emoji) => setText(text + emoji)} />
                            <AttachedFileMenu />
                            <AddImageMenu />
                        </Stack>
                        <Button
                            endIcon={<Cached />}
                            variant="contained"
                            sx={{
                                borderRadius: BORDER_RADIUS.full,
                                backgroundColor: 'grey.500',
                                textTransform: 'lowercase',
                                '&:hover': {
                                    backgroundColor: 'grey.500',
                                },
                            }}
                        >
                            Regenerate respond
                        </Button>
                    </Stack>
                </BorderedCard>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" onClick={() => handleSendMessage(text, id)} fullWidth startIcon={<Send />}>
                    Send
                </Button>
            </Grid>
        </Grid>
    );
};

export default ChatControl;
