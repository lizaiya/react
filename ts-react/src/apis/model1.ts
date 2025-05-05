import type { ModelType } from './types';
import { getPlatform, getInfo, info } from './method';
const model1 = {
  method1: {
    default: getPlatform,
    web: () => {},
    android: () => {}
  },
  method2: {
    default: getInfo,
    ios: () => {}
  },
  method3: {
    default: info,
    ios: () => {}
  }
} as const satisfies ModelType;

export default model1;
