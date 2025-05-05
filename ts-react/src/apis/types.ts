// 导入中间件返回类型
import type { MiddlewareReturn } from './middleware';
import type { Platform } from './method.ts';
// 定义方法可能的返回类型
type MethodReturn = any;
// 定义方法类型，支持任意参数
export type MethodFn = (...args: any[]) => MethodReturn | Promise<MethodReturn>;
// 定义基础方法配置接口
export type MethodConfig = {
  default: MethodFn;
  ios?: MethodFn;
  web?: MethodFn;
  android?: MethodFn;
};
// 定义 Model 的通用类型
export type ModelType = Record<string, MethodConfig>;
export type Models = Record<string, ModelType>;
// 包装后的方法类型
export type WrappedMethodFn<T extends MethodFn> = (...args: Parameters<T>) => MiddlewareReturn<Awaited<ReturnType<T>>>;

export type WrappedAPIS<T extends Models, P extends Platform> = {
  -readonly [Model in keyof T]: {
    -readonly [Method in keyof T[Model]]: WrappedMethodFn<
      // 优先取平台对应方法，否则取 default 方法
      T[Model][Method][P] extends MethodFn ? T[Model][Method][P] : T[Model][Method]['default']
    >;
  };
};
