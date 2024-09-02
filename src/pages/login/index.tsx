import * as z from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from 'src/routes/hooks';

import { bgGradient } from 'src/theme/css';

import Iconify from 'src/components/iconify';

import { useLoginWithEmail } from './hooks/useLoginWithEmail';

// Define the schema using Zod
const schema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(5, 'Password must be at least 5 characters long'),
});

type FormData = z.infer<typeof schema>;

export default function LoginPage() {
  const theme = useTheme();
  const router = useRouter();
  const { mutate, isPending } = useLoginWithEmail();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    mutate(data);
  };

  const renderForm = (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <TextField
          {...register('email')}
          name="email"
          label="Email address"
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
        />

        <TextField
          {...register('password')}
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          error={!!errors.password}
          helperText={errors.password?.message}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        loading={isPending}
        disabled={isPending}
      >
        Login
      </LoadingButton>
    </form>
  );

  return (
    <>
      <Helmet>
        <title> Login | Zenlyft </title>
      </Helmet>

      <Box
        sx={{
          ...bgGradient({
            color: alpha(theme.palette.background.default, 0.9),
            imgUrl: '/assets/background/overlay_4.jpg',
          }),
          height: 1,
        }}
      >
        {/* <Logo
          sx={{
            position: 'fixed',
            top: { xs: 16, md: 24 },
            left: { xs: 16, md: 24 },
          }}
        /> */}

        <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
          <Card
            sx={{
              p: 5,
              width: 1,
              maxWidth: 420,
            }}
          >
            <Typography variant="h4">Sign in to Zenlyft</Typography>

            <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
              Don’t have an account?
              <Link variant="subtitle2" sx={{ ml: 0.5 }}>
                Get started
              </Link>
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button
                fullWidth
                size="large"
                color="inherit"
                variant="outlined"
                sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
              >
                <Iconify icon="eva:google-fill" color="#DF3E30" />
              </Button>

              <Button
                fullWidth
                size="large"
                color="inherit"
                variant="outlined"
                sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
              >
                <Iconify icon="eva:facebook-fill" color="#1877F2" />
              </Button>

              <Button
                fullWidth
                size="large"
                color="inherit"
                variant="outlined"
                sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
              >
                <Iconify icon="eva:twitter-fill" color="#1C9CEA" />
              </Button>
            </Stack>

            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                OR
              </Typography>
            </Divider>

            {renderForm}
          </Card>
        </Stack>
      </Box>
    </>
  );
}
