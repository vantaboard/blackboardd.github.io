import { Box } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ScrollTo from '../features/components/scrollTo';
import { StorybookNote } from '../styles/scrollTo';

export default {
    title: 'Portfolio/ScrollTo',
    component: ScrollTo,
} as ComponentMeta<typeof ScrollTo>;

const Template: ComponentStory<typeof ScrollTo> = () => {
    return (
        <Box sx={{ px: 10, py: 3 }}>
            <StorybookNote>Hidden at at a max width of 768 pixels.</StorybookNote>
            <ScrollTo />
        </Box>
    );
};

export const Primary = Template.bind({});
