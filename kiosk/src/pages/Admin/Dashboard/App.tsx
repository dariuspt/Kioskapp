import React from 'react';
import Dashboard from './components/Dashboard'; // Import Dashboard component
import Box from '@mui/joy/Box'; // Import from @mui/joy for layout styling

const App: React.FC = () => {
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
            {/* Main Content */}
            <Dashboard /> {/* Use Dashboard instead of Sidebar and ProductTable directly */}
        </Box>
    );
};

export default App;
