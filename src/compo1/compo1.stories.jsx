import React from 'react';
import { Compo1 } from './compo1';

export default {
  title: 'Components/Compo1',
  component: Compo1,
  parameters: {
    layout: 'container',
  },
};

const Template = (args) => <Compo1 {...args} />;

export const Default = Template.bind({});
