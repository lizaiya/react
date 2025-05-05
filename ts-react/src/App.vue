<script setup lang="ts">
import result from './apis/navtiveSDK.ts';
const get = async () => {
  // let { code, data } = await result.model1.method2('');
  let a = await result.model1.method3('');
  console.log(a);
  // result.model1.method1();
  // console.log(code,data);
};
get();
</script>

<template>
  <div></div>
</template>

<style scoped></style>
