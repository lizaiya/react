import apis from './index';
import type { WrappedAPIS } from './types.ts';
import middleware from './middleware.ts';
import { getPlatform } from './method.ts';
import type { Platform } from './method.ts';
// 获取平台信息
const platformResponse = await middleware(getPlatform)();
const platform = platformResponse.data as Platform;
const NavtiveSDK = {} as WrappedAPIS<typeof apis, Platform>;
Object.entries(apis).forEach(([modelName, model]) => {
  const typedModelName = modelName as keyof typeof apis;
  NavtiveSDK[typedModelName] = {} as any;
  Object.entries(model).forEach(([methodName, method]) => {
    const typedMethodName = methodName as keyof typeof model;
    // 获取平台特定方法或默认方法
    const platformMethod = method[platform] || method['default'];
    // 应用中间件并赋值
    NavtiveSDK[typedModelName][typedMethodName] = middleware(platformMethod);
  });
});
export default NavtiveSDK;
