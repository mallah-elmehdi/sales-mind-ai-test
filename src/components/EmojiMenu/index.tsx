'use client';
import { BORDER_RADIUS } from '@/constants/standard';
import { MoreVert } from '@mui/icons-material';
import { IconButton, Menu } from '@mui/material';
import EmojiPicker from 'emoji-picker-react';
import React from 'react';

const EmojiMenu = ({ addEmoji }: { addEmoji: (emoji: string) => void }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <>
            <IconButton
                disableTouchRipple
                sx={{
                    borderRadius: BORDER_RADIUS.md,
                    border: '1.5px solid',
                    borderColor: 'grey.400',
                    lineHeight: 1,
                }}
                onClick={handleClick}
            >
                😀
            </IconButton>
            <Menu
                id="more-action"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    sx: {
                        paddingBottom: 0,
                        paddingTop: 0,
                    },
                }}
            >
                <EmojiPicker
                    onEmojiClick={(emoji) => {
                        addEmoji(emoji.emoji);
                        handleClose();
                    }}
                />
            </Menu>
        </>
    );
};

export default EmojiMenu;
