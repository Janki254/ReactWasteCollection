import React from 'react';
import {
    Typography,
    Card,
    CardContent,
    Grid,
    Box,
    Alert,
    CircularProgress,
} from '@mui/material';

import {useSelector} from 'react-redux';

const CollectionCard = () => {
    const {
        loading: collectionDayLoading,
        error: collectionDayError,
        data: collectionDayData,
    } = useSelector((state) => state.collectionDay);

    return (
        <>
            <Grid container spacing={2} height={'50vh'}>
                {collectionDayError && (
                    <Alert severity='warning'>Something went wrong.....</Alert>
                )}
                {collectionDayLoading ? (
                    <Box
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        height={'30vh'}
                        width={'100%'}
                    >
                        <CircularProgress color='inherit' size={50} />
                    </Box>
                ) : (
                    <>
                        {!collectionDayData ? (
                            <Box
                                display={'flex'}
                                justifyContent={'center'}
                                alignItems={'center'}
                                sx={{mt: 5, ml: 3}}
                            >
                                <Typography height={'50vh'}>
                                    No Record Found....{' '}
                                </Typography>
                                <Typography sx={{ml: 2, fontSize: '25px'}}>
                                    ☹️
                                </Typography>
                            </Box>
                        ) : (
                            <>
                                {collectionDayData &&
                                collectionDayData.length === 0 ? null : (
                                    <>
                                        {collectionDayData &&
                                            collectionDayData.map(
                                                (day, index) => (
                                                    <Grid
                                                        item
                                                        xs={6}
                                                        key={index}
                                                    >
                                                        <Card
                                                            sx={{
                                                                width: '100%',
                                                                backgroundColor:
                                                                    day.binColor ||
                                                                    'lightgray',
                                                            }}
                                                        >
                                                            <CardContent
                                                                sx={{
                                                                    color: '#fff',
                                                                }}
                                                            >
                                                                <Typography
                                                                    sx={{
                                                                        fontSize: 14,
                                                                    }}
                                                                    gutterBottom
                                                                >
                                                                    {
                                                                        day.binType
                                                                    }
                                                                </Typography>
                                                                <Typography
                                                                    variant='h6'
                                                                    component='div'
                                                                >
                                                                    {day.collectionDay ||
                                                                        ' CollectionDay'}
                                                                </Typography>

                                                                <Typography
                                                                    sx={{
                                                                        mb: 1.5,
                                                                    }}
                                                                >
                                                                    {`Followed By Day ${day.followingDay}`}
                                                                </Typography>
                                                                <Typography variant='body2'>
                                                                    {day.description ||
                                                                        ''}
                                                                </Typography>
                                                            </CardContent>
                                                        </Card>
                                                    </Grid>
                                                ),
                                            )}
                                    </>
                                )}
                            </>
                        )}
                    </>
                )}
            </Grid>
        </>
    );
};

export default CollectionCard;
