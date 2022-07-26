import React from 'react';
import {Box,Button,Typography} from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <>

        <Box display="flex" flexDirection="column" alignItems="center">

            <Button LinkComponent={Link} to="/books" sx={{ marginTop: 15, background: "orangered" }} variant="contained">
                <Typography variant="h3">View All products</Typography>
            </Button>

        </Box>

        </>
    );
}

export default Home;
