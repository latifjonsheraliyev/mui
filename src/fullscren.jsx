import React, { useState } from "react";
import { Dialog, AppBar, Toolbar, IconButton, Typography, Button, Slide } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const FullScreenDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Open Full-Screen Dialog
      </Button>
      
      <Dialog
        fullScreen
        open={open}
        onClose={() => setOpen(false)}
        TransitionComponent={(props, ref) => <Slide direction="up" ref={ref} {...props} />}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6">
              To‘liq ekranli dialog
            </Typography>
            <Button autoFocus color="inherit" onClick={() => setOpen(false)}>
              Saqlash
            </Button>
          </Toolbar>
        </AppBar>
        <div style={{ padding: "20px" }}>
          <Typography variant="body1">Katta kontentni shu yerda ko‘rsatishingiz mumkin.</Typography>
        </div>
      </Dialog>
    </div>
  );
};

export default FullScreenDialog;
