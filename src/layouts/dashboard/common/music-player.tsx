import Lottie from 'lottie-react';
import ReactPlayer from 'react-player';
import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import {
  List,
  ListItem,
  Typography,
  ListItemText,
  OutlinedInput,
  ListSubheader,
  InputAdornment,
  ListItemButton,
} from '@mui/material';

import musicWaves from 'src/lotties/music-waves.json';
import musicPlaying from 'src/lotties/music-playing.json';

import Iconify from 'src/components/iconify';

const playlist = [
  {
    id: '94dNaFVhMm4',
    title:
      "𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 80's Tokyo City lo-fi chill hiphop🌿 / 1hour Lofi hiphop mix ( Chill & Study )",
  },
  {
    id: 'zhDwjnYZiCo',
    title:
      'Ghibli Coffee Shop ☕️ Music to put you in a better mood 🌿 lofi hip hop - lofi songs | study / relax',
  },

  {
    id: 'Y8BRltAnFpo',
    title: 'Relaxing Lofi Beats for a Calm Mind 🌙 Melt Away Stress 🧘‍♂️',
  },

  {
    id: '9FvvbVI5rYA',
    title: 'lofi hip hop radio - beats to relax/study to',
  },
  {
    id: 'Xf3-4A-uEc8',
    title: 'Deep Focus Lofi Mix 🍯 Study/Work Concentration [chill lo-fi hip hop beats]',
  },
];

const playlistDetails = playlist.map((el) => ({
  ...el,
  url: `https://www.youtube.com/watch?v=${el.id}`,
  image: `https://img.youtube.com/vi/${el.id}/default.jpg`,
}));

export default function MusicPlayer() {
  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const [url, setUrl] = useState('');

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

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  console.log('url', url);

  return (
    <>
      <Tooltip title={isPlaying ? 'Pause' : 'Play'}>
        <IconButton onClick={toggleDrawer(true)} title="play">
          {isPlaying ? (
            <Lottie style={{ width: 25, height: 25 }} animationData={musicPlaying} loop />
          ) : (
            <Iconify icon="eva:play-circle-outline" />
          )}
        </IconButton>
      </Tooltip>

      <Drawer
        open={open}
        anchor="right"
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box
          sx={{
            width: { xs: 320, sm: 360, md: 400 },
            padding: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 2,
            }}
          >
            <Typography variant="h6">Chill music</Typography>

            <IconButton onClick={toggleDrawer(false)}>
              <Iconify icon="eva:close-outline" />
            </IconButton>
          </Box>

          <List
            sx={{ width: '100%', bgcolor: 'background.paper' }}
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Editor Playlist
              </ListSubheader>
            }
          >
            {playlistDetails.map((value) => {
              const labelId = `checkbox-list-label-${value.id}`;

              return (
                <ListItem
                  key={value.id}
                  onClick={() => {
                    setUrl(value.url);
                    setIsPlaying(true);
                  }}
                  sx={{
                    borderRadius: 1,
                    marginBottom: 1,
                    ...(isPlaying && url === value.url ? { bgcolor: 'action.selected' } : {}),
                  }}
                  secondaryAction={
                    <IconButton title="play">
                      {url === value.url && isPlaying ? (
                        <Lottie style={{ width: 25, height: 25 }} animationData={musicWaves} loop />
                      ) : null}
                    </IconButton>
                  }
                  disablePadding
                >
                  <ListItemButton dense sx={{ display: 'flex', gap: 1 }}>
                    <Avatar alt={value.title} src={value.image} />
                    <ListItemText id={labelId} primary={value.title} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>

          <OutlinedInput
            value={url}
            sx={{ width: '100%' }}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste your music here..."
            size="small"
            startAdornment={
              <InputAdornment position="start">
                <Iconify
                  icon="logos:youtube-icon"
                  sx={{ color: 'text.disabled', width: 20, height: 20 }}
                />
              </InputAdornment>
            }
          />

          <Box
            sx={{
              mt: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ReactPlayer
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              controls
              playing={isPlaying}
              width="100%"
              height={200}
              url={url}
            />
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
