import apis from './index';
import type { WrappedAPIS } from './types.ts';
import middleware from './middleware.ts';
import { getPlatform } from './method.ts';
import type { Platform } from './method.ts';
// 先获取平台信息
const platformResponse = await middleware(getPlatform)();
const platform = platformResponse.data as Platform;

const result = {} as WrappedAPIS<typeof apis, Platform>;
// 填充结果对象
Object.entries(apis).forEach(([modelName, model]) => {
  // 使用类型断言确保类型安全
  const typedModelName = modelName as keyof typeof apis;
  // 初始化模型对象，使用正确的类型
  result[typedModelName] = {} as (typeof result)[typeof typedModelName];

  Object.entries(model).forEach(([methodName, method]) => {
    // 使用类型断言确保类型安全
    const typedMethodName = methodName as keyof typeof model;
    // 获取平台特定方法或默认方法
    const platformMethod = method[platform] || method['default'];

    // 应用中间件并赋值
    result[typedModelName][typedMethodName] = middleware(platformMethod);
  });
});
export default result;
