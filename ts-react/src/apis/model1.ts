import type { ModelType } from './types';
import { getPlatform, getInfo } from './method';
const model1 = {
  method1: {
    default: getPlatform,
    web: () => {},
    android: () => {}
  },
  method2: {
    default: getInfo,
    ios: () => {}
  }
} as const satisfies ModelType;

export default model1;
