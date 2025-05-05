// 定义 Model1 接口
export interface Model1 {
  // 这里添加 model1 的具体属性类型
  // 由于没有看到具体的 model1.ts 内容，先定义一个基础接口
  [key: string]: any;
}

// 定义 Model2 接口
export interface Model2 {
  // 这里添加 model2 的具体属性类型
  // 由于没有看到具体的 model1.ts 内容，先定义一个基础接口
  [key: string]: any;
}

// 定义 APIs 接口
export interface APIs {
  model1: Model1;
  model2: Model2;
}
