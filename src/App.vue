<template>
  App <button @click="fn">点我测试</button>
</template>

<script>
import request from '@/utils/request.js'
export default {
  setup(){
    const fn = () => {
      request('member/profile' , 'get')
    }
    return {fn}
  }
}
</script>

<style>

</style>
