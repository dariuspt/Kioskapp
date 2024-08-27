import React from 'react';
import ProductTable from './components/ProductTable';
import Sidebar from './components/Sidebar';
import Box from '@mui/joy/Box'; // Import from @mui/joy for layout styling

const App: React.FC = () => {
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
            {/* Sidebar */}
            <Sidebar />
            
            {/* Main Content */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    padding: 2,
                    marginLeft: { xs: 'calc(var(--Sidebar-width) + 16px)', md: 'calc(var(--Sidebar-width) + 24px)' }, // Adjust this as necessary
                    transition: 'margin-left 0.3s',
                }}
            >
                <ProductTable />
            </Box>
        </Box>
    );
};

export default App;
