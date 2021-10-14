import React from 'react';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import vector from '../assets/svg/vector.svg';

const Breadcrumb = () => {
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    };

    const breadcrumbs = [
        <Link 
            className="bread-crumbs-item block-center"
            underline="hover" 
            key="1" 
            color="inherit" 
            href="/" 
            onClick={handleClick}
        >
            Главная
            <ArrowForwardIosIcon sx={{ mr: -1, fontSize: 12 }} />
        </Link>,
        <Link
            className="bread-crumbs-item block-center"
            underline="hover"
            key="2"
            color="inherit"
            href="/getting-started/installation/"
            onClick={handleClick}
        >
            Breezzor Pass
            <ArrowForwardIosIcon sx={{ mr: -1, fontSize: 12 }} />
        </Link>,
        <Link 
            className="bread-crumbs-item block-center"
            underline="hover"
            key="4"
            color="inherit"
            href="/getting-started/installation/"
            onClick={handleClick}
        >
            Испания
            <ArrowForwardIosIcon sx={{ mr: -1, fontSize: 12 }} />
        </Link>,
        <Typography key="5" color="text.primary">
            Breezzor Pass by Hilton
        </Typography>,
    ];

    return (
        <Stack className="header__bread-crumbs" spacing={2}>
            <Breadcrumbs separator="" aria-label="breadcrumb">
                { breadcrumbs }
            </Breadcrumbs>
        </Stack>
    );
};

export default Breadcrumb;
