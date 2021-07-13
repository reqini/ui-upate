import React from 'react';

import { RoomCard } from './RoomCard';

export default {
  title: 'Hotels/Room/RoomCard',
  component: RoomCard,
};

const Template = (args) => <RoomCard {...args} />;

export const RoomCardComponent = Template.bind({});
RoomCardComponent.argTypes = {
  type: {
    name: 'Nombre habitacion',
    description: 'Habitacion',
    type: { name: 'string', required: true },
    control: {
      type: 'text',
    },
    defaultValue: 'Suite standard',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Button' },
    },
  },
  night: {
    name: 'Cantidad de noches',
    description: 'noches',
    type: { name: 'string', required: true },
    control: {
      type: 'text',
    },
    defaultValue: '15',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Button' },
    },
  },
  people: {
    name: 'Cantidad de personas',
    description: 'personas',
    type: { name: 'string', required: true },
    control: {
      type: 'text',
    },
    defaultValue: '3',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Button' },
    },
  },
  active: {
    name: 'Habitacion Seleccionada',
    description: 'Si esta seleccionada cambia styles',
    type: { name: 'string', required: true },
    control: {
      type: 'boolean',
    },
    defaultValue: false,
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'Button' },
    },
  },
  cancelfree: {
    name: 'Cancelacion gratuita?',
    description: 'Cancelacion gratuita?',
    type: { name: 'string', required: true },
    control: {
      type: 'boolean',
    },
    defaultValue: false,
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'Button' },
    },
  },
  priceNight: {
    name: 'Precio por Noche',
    description: 'Mostrar solo el precio por noche en este campo',
    type: { name: 'string', required: true },
    control: {
      type: 'text',
    },
    defaultValue: '789',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Button' },
    },
  },
  priceFull: {
    name: 'Precio Final',
    description: 'Mostrar precio final a plagar',
    type: { name: 'string', required: true },
    control: {
      type: 'text',
    },
    defaultValue: '1.658.600',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Button' },
    },
  },
};
