import { Helmet } from 'react-helmet-async';

import { LoginView } from 'src/sections/login';

// ----------------------------------------------------------------------

export default function RegisterPage() {
  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>

      <LoginView />
    </>
  );
}
