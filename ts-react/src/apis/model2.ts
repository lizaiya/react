import type { ModelType } from './types';
const model2 = {
  method1: {
    default: () => {},
    ios: () => {},
    web: () => {},
    android: () => {}
  },
  method2: {
    default: () => {}
  },
  method3: {
    default: () => {}
  },
  method4: {
    default: () => {}
  }
} as const satisfies ModelType;
export default model2;
