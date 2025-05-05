<script setup lang="ts">
import result from './apis/navtiveSDK.ts';
const get = async () => {
  let res = await result.model1.method2('');
  result.model1.method1();
  // console.log(res);
};
get();
</script>

<template>
  <div></div>
</template>

<style scoped></style>
