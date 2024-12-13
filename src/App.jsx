import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const SimpleDialog = () => {
  const [open, setOpen] = useState(false); // Dialog ochiq yoki yopiq holati

  const handleOpen = () => setOpen(true); // Dialogni ochish funksiyasi
  const handleClose = () => setOpen(false); // Dialogni yopish funksiyasi

  return (
    <div>
      {/* Dialogni ochish tugmasi */}
      <Button variant="contained" onClick={handleOpen}>
       Tasdiqlash 
      </Button>

      {/* Dialog komponenti */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Tasdiqlash kerak"}</DialogTitle> {/* Sarlavha */}
        <DialogContent>
          Siz ushbu amalni bajarishni xohlaysizmi? {/* Tarkib */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Bekor qilish</Button>
          <Button onClick={handleClose} autoFocus>
            Ha
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SimpleDialog;
