import React from 'react';

import { PriceNav } from './PriceNav';

export default {
  title: 'Navs/PriceNav',
  component: PriceNav,
};

const Template = (args) => <PriceNav {...args} />;

export const PriceNavHotels = Template.bind({});
PriceNavHotels.argTypes = {
  promoType: {
    name: 'tipo de promo',
    description: 'Descuentos',
    type: { name: 'string', required: true },
    control: {
      type: 'text',
    },
    defaultValue: 'Descuento exclusivo para parejas',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Button' },
    },
  },
  colorPromoType: {
    name: 'color del texto en la promo',
    description: 'color de Descuentos',
    type: { name: 'string', required: true },
    control: {
      type: 'text',
    },
    defaultValue: '#4A90E2',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Button' },
    },
  },
  direction: {
    name: 'Direccion',
    description: 'Direccion',
    type: { name: 'string', required: true },
    control: {
      type: 'text',
    },
    defaultValue: 'Av Seimpre viva 1234, Springfield',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Button' },
    },
  },
  name: {
    name: 'Nombre del Hotel',
    description: 'Texto del titulo',
    type: { name: 'string', required: true },
    control: {
      type: 'text',
    },
    defaultValue: 'Nombre de ejemplo del Hotel',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Button' },
    },
  },
  price: {
    name: 'Precio',
    description: '1400',
    type: { name: 'string', required: true },
    control: {
      type: 'number',
    },
    defaultValue: '1450',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Button' },
    },
  },
  night: {
    name: 'Noches',
    description: 'Numero de Noches',
    type: { name: 'string', required: false },
    control: {
      type: 'number',
    },
    defaultValue: '4',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Button' },
    },
  },
  people: {
    name: 'Personas',
    description: 'Numero de Personas',
    type: { name: 'string', required: false },
    control: {
      type: 'number',
    },
    defaultValue: '3',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Button' },
    },
  },
  scroll: {
    name: 'Scroll Action',
    description: '1400',
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
};
