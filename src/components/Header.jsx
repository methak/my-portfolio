import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  color= "primary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" color="secondary" sx={{ flexGrow: 1 }}>
          
          </Typography>
          <Button color="secondary">About</Button>
          <Button color="secondary">Experience</Button>
          <Button color="secondary">Project</Button>
          <Button color="secondary">Contact</Button>
          <Button color="secondary" variant="outlined">Resume</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
