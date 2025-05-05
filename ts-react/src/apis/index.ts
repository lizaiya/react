import model1 from './model1';
import model2 from './model2';
import type { Models } from './types';
const models = {
  model1,
  model2
} as const satisfies Models;

export type { Models };
export default models;
