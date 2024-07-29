import React, { useState, useEffect } from 'react';

import {
  Input,
  Modal,
  Button,
  styled,
  Dialog,
  TextField,
  IconButton,
  DialogTitle,
  DialogContent,
  DialogActions,
  InputAdornment,
  DialogContentText,
} from '@mui/material';

import Iconify from 'src/components/iconify';

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const filteredItems = [
    {
      heading: 'Home',
      id: 'home',
      items: [
        {
          id: 'home',
          children: 'Home',
          icon: 'HomeIcon',
          href: '#',
        },
        {
          id: 'settings',
          children: 'Settings',
          icon: 'CogIcon',
          href: '#',
        },
        {
          id: 'projects',
          children: 'Projects',
          icon: 'RectangleStackIcon',
          closeOnSelect: false,
          // onClick: () => {
          //   setPage('projects');
          // },
        },
      ],
    },
    {
      heading: 'Other',
      id: 'advanced',
      items: [
        {
          id: 'developer-settings',
          children: 'Developer settings',
          icon: 'CodeBracketIcon',
          href: '#',
        },
        {
          id: 'privacy-policy',
          children: 'Privacy policy',
          icon: 'LifebuoyIcon',
          href: '#',
        },
        {
          id: 'log-out',
          children: 'Log out',
          icon: 'ArrowRightOnRectangleIcon',
          onClick: () => {
            alert('Logging out...');
          },
        },
      ],
    },
  ];

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const isMac =
        navigator.userAgentData && navigator.userAgentData.platform.toLowerCase().includes('mac');

      if ((isMac ? e.metaKey : e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        e.stopPropagation();

        setOpen(!open);
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setOpen, open]);

  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <Iconify icon="eva:search-fill" /> alex
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            // event.preventDefault();
            // const formData = new FormData(event.currentTarget);
            // const formJson = Object.fromEntries((formData as any).entries());
            // const { email } = formJson;
            // console.log(email);
            // handleClose();
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />

          {/* <Input
            autoFocus
            fullWidth
            disableUnderline
            placeholder="Search…"
            startAdornment={
              <InputAdornment position="start">
                <Iconify
                  icon="eva:search-fill"
                  sx={{ color: 'text.disabled', width: 20, height: 20 }}
                />
              </InputAdornment>
            }
            sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
          />
          <Button variant="contained">Search</Button> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
