import { Box, Link } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Project } from '../features/components/project';
import FlexedBiceps from './assets/flexed-biceps.png';

export default {
  title: 'Portfolio/Project',
  component: Project,
} as ComponentMeta<typeof Project>;

const Template: ComponentStory<typeof Project> = (args) => {
  return (
    <Box sx={{ px: 10, py: 3 }}>
      <Project {...args} />
    </Box>
  );
};

export const Example = Template.bind({});
Example.args = {
  heading: (
    <>
      blackboardd @{' '}
      <Link
        href="https://github.com/blackboardd/blackboardd.github.io"
        target="_blank"
      >
        github
      </Link>
    </>
  ),
  text: (
    <>
      💼 This an example of the project component in Storybook.
      <br />
      <br />
      Here is some text that can be used to briefly describe what the project
      entails and it&apos;s primary function.
      <br />
      <br />
      This is meant for extra information about the project such as inspiration
      and motivation to complete and finish the project.
      <br />
      <br />
    </>
  ),
  img: <img width="80rem" src={FlexedBiceps} alt="flexed biceps emoji" />,
  date: new Date(2022, 0, 1),
  format: 'MMyyyy',
};
