'use client';
import { MoreVert } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import React from 'react';

const Action = ({ id }: { id: string }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <>
            <IconButton onClick={handleClick}>
                <MoreVert />
            </IconButton>
            <Menu
                id="more-action"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'lock-button',
                    role: 'listbox',
                }}
            >
                <MenuItem
                    sx={{
                        color: 'common.black',
                    }}
                    onClick={handleClose}
                >
                    See conversation
                </MenuItem>
            </Menu>
        </>
    );
};

export default Action;
