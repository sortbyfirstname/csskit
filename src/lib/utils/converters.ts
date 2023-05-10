import type { Size } from './types';

export const decimal = (value: string | number, places: number) => +parseFloat(value.toString()).toFixed(places);

export const convertToRem = (size: Size, rem: number) => ({ value: decimal(size.value / rem, 5), unit: 'rem' });
