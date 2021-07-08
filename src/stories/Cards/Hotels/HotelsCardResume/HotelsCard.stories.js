import React from 'react';

import { HotelsCardResume } from './HotelsCardResume';

export default {
  title: 'Cards/Hoteles/HotelsCardResume',
  component: HotelsCardResume,
};

const Template = (args) => <HotelsCardResume {...args} />;

export const HotelsCardResumeComponent = Template.bind({});
HotelsCardResumeComponent.argTypes = {
  /* height: {
    name: 'Alto del contenedor',
    description: 'define el alto del cpontenedor de la iamgen de fondo',
    type: { name: 'string', required: true },
    control: {
      type: 'number',
    },
    defaultValue: 200,
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: 'Button' },
    },
  } */
};
