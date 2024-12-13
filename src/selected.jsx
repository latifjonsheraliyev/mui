import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";

const FormDialog = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(formData);
    setOpen(false); // Dialogni yopish
  };

  return (
    <div>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Form Dialog
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Shaklni to‘ldiring</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Ism"
            type="text"
            fullWidth
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Bekor qilish</Button>
          <Button onClick={handleSubmit}>Saqlash</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormDialog;
