import model1 from './model1';
import model2 from './model1';
import type { APIs, Model1, Model2 } from './types';

let apis: APIs = {
  model1: { ...model1 },
  model2: { ...model2 }
};

export default apis;
