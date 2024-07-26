import React from 'react';

import {
  Button,
  Dialog,
  DialogProps,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';

interface CommonDialogProps extends DialogProps {
  handleClose: () => void;
}
export default function CommonDialog({ open, handleClose, ...props }: CommonDialogProps) {
  return (
    <Dialog open={open} onClose={handleClose} {...props}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We will send updates
          occasionally.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Subscribe</Button>
      </DialogActions>
    </Dialog>
  );
}
