'use client';
import { BORDER_RADIUS } from '@/constants/standard';
import { InsertPhoto } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import React from 'react';

const AddImageMenu = () => {
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
                <InsertPhoto />
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
                <MenuItem
                    sx={{
                        color: 'common.black',
                    }}
                    onClick={handleClose}
                >
                    Attached photo
                </MenuItem>
            </Menu>
        </>
    );
};

export default AddImageMenu;
