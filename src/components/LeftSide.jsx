import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from '@mui/material';
import React from 'react';
import { leftMenu } from '../libs/leftMenu';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const LeftSide = ({ setMode, mode }) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position="fixed">
        <List sx={{ width: '100%' }}>
          {leftMenu.map((item, index) => (
            <ListItem disablePadding key={index}>
              <ListItemButton component="a" href={item.name}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name}></ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DarkModeIcon />
              </ListItemIcon>
              <Switch
                onChange={(e) => {
                  setMode(mode === 'light' ? 'dark' : 'light');
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default LeftSide;
