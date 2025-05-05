export type Platform = 'ios' | 'web' | 'android' | 'default';
// 平台检测实现
export const getPlatform = (): Platform => {
  // 实际检测逻辑
  return 'web';
};
export const getInfo = (info: string) => {
  return { name: 'li' };
};
export const info = async (info: string) => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('');
    }, 1000);
  });
  return { name: 'li' };
};
