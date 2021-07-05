import React from 'react';

import { Tabs } from './Tabs';

export default {
  title: 'Promos/Tabs',
  component: Tabs,
};

const Template = (args) => <Tabs {...args}><div style={{
  width: '100%',
  height: 65,
  background: 'white',
  borderRadius: 10
}}/></Tabs>;

export const TabsComponent = Template.bind({});
TabsComponent.argTypes = {
  height: {
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
  }
};
