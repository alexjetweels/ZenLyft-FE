import { useState } from 'react';

import Box from '@mui/material/Box';

import { useGetMe } from 'src/hooks/useGetMe';

import Nav from './nav';
import Main from './main';
import Header from './header';

// ----------------------------------------------------------------------

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [openNav, setOpenNav] = useState(false);
  useGetMe();

  return (
    <>
      <Header setOpenNav={setOpenNav} />

      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} />

        <Main>{children}</Main>
      </Box>
    </>
  );
}
