export type IResult<T = any> = {
  code: number;
  message?: string;
  data: T;
};
type ISuccess<T = any> = (data: any) => IResult<T>;
type IFail<T = any> = (fnName: string, error: Error & { code?: string | number }) => IResult<T>;
const fail: IFail = (fnName, error) => {
  console.log(fnName);
  const result = {
    code: -1,
    message: error.message,
    data: error
  };
  return result;
};
const success: ISuccess = (data) => {
  return { code: 0, data };
};
// 中间件函数的返回类型，供调用者使用
export type MiddlewareReturn<T> = Promise<IResult<T>> | IResult<T>;

// 中间件函数的类型
export type IMiddleware = <T extends (...args: any[]) => any>(fn: T) => (...args: Parameters<T>) => MiddlewareReturn<Awaited<ReturnType<T>>>;

const middleware: IMiddleware = (fn) => {
  return (...args) => {
    const fnName = fn?.name;
    if (typeof fn !== 'function') {
      return fail(fnName, new Error(`${fnName} is not a function`));
    }
    try {
      const originalResult = fn(...args);
      if (originalResult instanceof Promise) {
        return originalResult.then(success).catch(fail.bind(null, fnName));
      } else {
        return success(originalResult);
      }
    } catch (error: any) {
      return fail(fnName, error);
    }
  };
};
export default middleware;
