import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import Icon403 from './components/Icon403';

// ----------------------------------------------------------------------

export default function PermissionDenied() {
  return (
    <>
      <Helmet>
        <title> 403 forbidden! | Error - Zenlyft </title>
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
          <img width={80} height={80} alt="Zenlyft" src="/assets/logo.png" />
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
              No permission
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              The page you’re trying to access has restricted access. Please refer to your system
              administrator.
            </Typography>

            <Box
              component="svg"
              sx={{
                mx: 'auto',
                height: 260,
                my: { xs: 5, sm: 10 },
              }}
            >
              <Icon403 />
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
