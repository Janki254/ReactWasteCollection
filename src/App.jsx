import React from 'react';
import {Container, Box, Typography, Grid, Link} from '@mui/material';
import AddressForm from './components/AddressForm';
import CollectionCard from './components/CollectionCard';
import RelatedLinks from './components/RelatedLinks';

const App = () => {
    return (
        <>
            <Container maxWidth='lg' height={'50vh'}>
                <Box mt={3}>
                    <Typography variant='h4' sx={{fontWeight: 'bold'}}>
                        Find out your waste <br /> collection day
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        sx={{fontWeight: 'bold', mt: '1.5rem', mb: '1rem'}}
                    >
                        Check when your waste will be collected.
                    </Typography>
                </Box>
                <Grid container spacing={2} height={'100%'}>
                    <Grid item xs={8}>
                        <AddressForm />
                        <Box my={2}>
                            <Typography
                                variant='subtitle1'
                                sx={{fontWeight: 'bold'}}
                            >
                                Your next collection
                            </Typography>
                        </Box>
                        <Box>
                            <CollectionCard />
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <RelatedLinks />
                    </Grid>
                </Grid>
                <Box my={3} display={'flex'} alignItems={'center'}>
                    <Link pr={4} color={'primary'}>
                        Help
                    </Link>
                    <Link pr={4} color={'primary'}>
                        Cookies
                    </Link>
                    <Link pr={4} color={'primary'}>
                        Contacts
                    </Link>
                    <Link pr={4} color={'primary'}>
                        Accessibility Statement
                    </Link>
                    <Link pr={4} color={'primary'}>
                        Privacy Policy
                    </Link>
                </Box>
            </Container>
        </>
    );
};

export default App;
