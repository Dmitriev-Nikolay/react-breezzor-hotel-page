import React from 'react';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    typography: {
        subtitle1: {
            fontFamily: "Roboto, sans-serif",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "24px",
            letterSpacing: "0em",
            textAlign: "right",
            color: "#0468ff",

            '@media (max-width: 995px)': {
                fontSize: '12px',
            },

            '@media (max-width: 769px)': {
                fontSize: '8px',
            },
        },
    },
});

const Breadcrumb = () => {
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    };

    const breadcrumbs = [
        <Link
            className="bread-crumbs-item data block-center"
            underline="hover"
            key="1"
            color="inherit"
            href="/"
            onClick={handleClick}
        >
            Главная
            <ArrowForwardIosIcon sx={ { mr: -1, fontSize: 12 } } />
        </Link>,
        <Link
            className="bread-crumbs-item data block-center"
            underline="hover"
            key="2"
            color="inherit"
            href="/getting-started/installation/"
            onClick={handleClick}
        >
            Breezzor Pass
            <ArrowForwardIosIcon sx={ { mr: -1, fontSize: 12 } } />
        </Link>,
        <Link
            className="bread-crumbs-item data block-center"
            underline="hover"
            key="3"
            color="inherit"
            href="/getting-started/installation/"
            onClick={handleClick}
        >
            Испания
            <ArrowForwardIosIcon sx={ { mr: -1, fontSize: 12 } } />
        </Link>,
        <ThemeProvider theme={theme}>
            {/* <Typography variant="subtitle1">subtitle</Typography>
            <Typography>body1</Typography> */}
            <Typography key="4" variant="subtitle1">
                Breezzor Pass by Hilton
            </Typography>
        </ThemeProvider>
        // <Typography key="4" color="text.primary">
        //     Breezzor Pass by Hilton
        // </Typography>
    ];

    return (
        <Stack className="header__bread-crumbs" spacing={ 2 }>
            <Breadcrumbs separator="" aria-label="breadcrumb">
                { breadcrumbs }
            </Breadcrumbs>
        </Stack>
    );
};

export default Breadcrumb;
