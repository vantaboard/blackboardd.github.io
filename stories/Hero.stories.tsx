import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Hero from '../features/components/hero';

export default {
  title: 'Portfolio/Hero',
  component: Hero,
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = () => <Hero />;

export const Text = Template.bind({});
