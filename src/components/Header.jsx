import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import PropTypes from 'prop-types';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  //window: PropTypes.func,
};
export default function Header(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <HideOnScroll {...props}>
      <AppBar   color= "primary">
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
          <Button color="secondary" href="#about">About</Button>
          <Button color="secondary" href="#exp">Experience</Button>
          <Button color="secondary" href="#project">Project</Button>
          <Button color="secondary" href="#contact">Contact</Button>
          <Button color="secondary" variant="outlined" href="./Metha-Resume.pdf">Resume</Button>
        </Toolbar>
      </AppBar>
      </HideOnScroll>
    </Box>
  );
}
