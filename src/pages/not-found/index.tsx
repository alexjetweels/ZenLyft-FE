import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import LogoImage from 'src/assets/logo.png';
import Icon404 from 'src/assets/illustrations/illustration_404.svg?react';

// ----------------------------------------------------------------------

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title> 404 Page Not Found </title>
      </Helmet>

      <>
        <Box
          component="header"
          sx={{
            top: 0,
            left: 0,
            width: 1,
            lineHeight: 0,
            position: 'fixed',
            p: (theme) => ({ xs: theme.spacing(3, 3, 0), sm: theme.spacing(5, 5, 0) }),
          }}
        >
          <img width={80} height={80} alt="Zenlyft" src={LogoImage} />
        </Box>

        <Container>
          <Box
            sx={{
              py: 12,
              maxWidth: 480,
              mx: 'auto',
              display: 'flex',
              minHeight: '100vh',
              textAlign: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h3" sx={{ mb: 3 }}>
              Sorry, page not found!
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL?
              Be sure to check your spelling.
            </Typography>

            <Box
              sx={{
                // width: {
                //   sm: 240,
                //   xs: 480,
                // },
                // height: {
                //   sm: 180,
                //   xs: 360,
                // },
                width: 480,
                height: 360,
                marginBottom: 5,
              }}
            >
              <Icon404 title="not found" width="100%" height="100%" />
            </Box>

            <Button href="/" size="large" variant="contained" component={RouterLink}>
              Go to Home
            </Button>
          </Box>
        </Container>
      </>
    </>
  );
}
