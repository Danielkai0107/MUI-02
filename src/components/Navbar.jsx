import {
  AppBar,
  InputBase,
  styled,
  Toolbar,
  Typography,
  Box,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import React from 'react';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import MailIcon from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';
import { useState } from 'react';

const StyleToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

const PhoneBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  function handleMenu() {
    setOpen(!open);
  }
  return (
    <AppBar position="sticky">
      <StyleToolbar>
        <Typography
          variant="h6"
          component="h1"
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          SHOP
        </Typography>
        <AcUnitIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <InputBase placeholder="Search" />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="secondary">
            <MailIcon color="white" />
          </Badge>
          <Badge badgeContent={4} color="secondary">
            <Notifications color="white" />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Rem"
            src="/static/images/avatar/1.jpg"
            onClick={handleMenu}
          />
        </Icons>
        <PhoneBox>
          <Typography variant="span">Dan</Typography>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Rem"
            src="/static/images/avatar/1.jpg"
            onClick={handleMenu}
          />
        </PhoneBox>
      </StyleToolbar>
      <Menu
        id="basic-menu"
        open={open}
        onClose={handleMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem onClick={handleMenu}>Profile</MenuItem>
        <MenuItem onClick={handleMenu}>My account</MenuItem>
        <MenuItem onClick={handleMenu}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
