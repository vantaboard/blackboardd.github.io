import { Box } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Header from '../features/components/header';

export default {
  title: 'Portfolio/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => {
  return (
    <Box sx={{ px: 10, py: 3 }}>
      <Header {...args} />
    </Box>
  );
};

export const Home = Template.bind({});
Home.args = {
  curr: 'home',
};

export const Projects = Template.bind({});
Projects.args = {
  curr: 'projects',
};

export const Contact = Template.bind({});
Contact.args = {
  curr: 'contact',
};
