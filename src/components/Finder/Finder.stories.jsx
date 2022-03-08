import { template } from '@babel/core';
import React from 'react';

import { Finder } from './Finder';

export default {
  title: ' components/Finder',
  component: Finder,
};

const Template = args => <Finder {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: '',
};
