import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import Feed from './components/Feed';
import LeftSide from './components/LeftSide';
import Navbar from './components/Navbar';
import RightBar from './components/RightBar';

function App() {
  const [mode, setMode] = useState('light');
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack
          direction="row"
          justifyContent="space-between"
          spacing={2}
          mt={1}
        >
          <LeftSide setMode={setMode} mode={mode} />
          <Feed />
          <RightBar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
