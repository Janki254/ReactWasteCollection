import {Box, Typography, Link} from '@mui/material';
import React from 'react';

const RelatedLinks = () => {
    return (
        <>
            <Box
                sx={{
                    width: '75%',
                    borderTop: '10px solid #6699cc',
                }}
            >
                <Typography
                    variant='subtitle2'
                    sx={{
                        fontWeight: 'bold',
                        mt: '1rem',
                    }}
                >
                    Related Content
                </Typography>
                <Box mb={2} mt={2}>
                    <Link size='small'>Add to your calender</Link>
                </Box>
                <Box mb={2}>
                    <Link size='small'>
                        view and Download printable schedule
                    </Link>
                </Box>
            </Box>
        </>
    );
};

export default RelatedLinks;
