import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ProductTable from './ProductTable';
import Box from '@mui/joy/Box';

const Dashboard: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (query: string) => {
        setSearchQuery(query);
    };

    return (
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
            <Sidebar onSearch={handleSearchChange} />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    padding: 2,
                    marginLeft: { xs: 'calc(var(--Sidebar-width) + 16px)', md: 'calc(var(--Sidebar-width) + 24px)' }, // Adjust this as necessary
                    transition: 'margin-left 0.3s',
                }}
            >
                <ProductTable searchQuery={searchQuery} />
            </Box>
        </Box>
    );
};

export default Dashboard;
