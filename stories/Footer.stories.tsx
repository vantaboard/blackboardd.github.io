import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Footer from '../features/components/footer';

export default {
    title: 'Portfolio/Footer',
    component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const Primary = Template.bind({});
