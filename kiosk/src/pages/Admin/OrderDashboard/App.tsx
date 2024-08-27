import React from 'react';
import Sidebar from './components/Sidebar';
import Box from '@mui/joy/Box'; // Import from @mui/joy for layout styling

const App: React.FC = () => {
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
            {/* Sidebar */}
            <Sidebar />
            

        </Box>
    );
};

export default App;
