import { Box } from '@mui/material';
import React from 'react';
import ProfileLinks from './ProfileLinks';

const Footer = () => {
    return (
        <Box component={'footer'} sx={{backgroundColor:"#3c3c3c", height: '8rem', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <ProfileLinks color={'#FFF'} />
        </Box>
    );
};

export default Footer;