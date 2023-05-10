import { Box } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Header from '../features/components/header';

export default {
    title: 'Portfolio/Header',
    component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => {
    return (
        <Box sx={{ px: 10, py: 3 }}>
            <Header />
        </Box>
    );
};

export const Primary = Template.bind({});
