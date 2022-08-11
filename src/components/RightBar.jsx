import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  styled,
  Typography,
} from '@mui/material';
import React from 'react';
import Conversations from './Conversations';

const StyleRight = styled(Box)({
  position: 'fixed',
  width: '300px',
  height: '100vh',
  border: '1px solid red',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  overflow: 'auto',
});

const RightBar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: 'none', sm: 'block', height: '100vh' } }}
    >
      <StyleRight>
        <Typography variant="h6" fontWeight="100" mb={2}>
          Online Friends
        </Typography>
        <AvatarGroup max={6}>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://material-ui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/5.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/6.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/7.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight="100" mt={2} mb={2}>
          Latest Photo
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={4}>
          <ImageListItem>
            <img src="https://picsum.photos/200/200?random=21" alt="" />
          </ImageListItem>

          <ImageListItem>
            <img src="https://picsum.photos/200/200?random=23" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://picsum.photos/200/200?random=24" alt="" />
          </ImageListItem>
        </ImageList>
        <Conversations />
      </StyleRight>
    </Box>
  );
};

export default RightBar;
