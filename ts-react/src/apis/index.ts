import model1 from './model1';
import model2 from './model2';
import type { APIS } from './types';
const apis = {
  model1,
  model2
} as const satisfies APIS;

export type { APIS };
export default apis;
