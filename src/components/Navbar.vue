<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo flex justify-between items-center"
    mode="horizontal"
    background-color="#fff"
    text-color="#333"
    active-text-color="#000"
    @select="handleSelect"
    :router="true"
  >
    <div class="flex items-center">
      <div class="ml-20"></div>
      <div>
        <img src="/logo.png" class="h-10">
      </div>
      <el-menu-item index="1" route="index">상품 보기</el-menu-item>
    </div>

    <div class="flex items-center" style="margin-right: 140px;">
      <el-menu-item index="99" route="index">로그인</el-menu-item>
      <el-menu-item index="2" >회원가입</el-menu-item>
      <el-menu-item index="3" >장바구니</el-menu-item>
      <el-menu-item index="4" >주문조회</el-menu-item>
      <el-menu-item index="5" >고객센터</el-menu-item>
    </div>

  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
}

const toMap = ()=>{
  let url = 'https://mapapi.qq.com/web/mapComponents/locationCluster/v/index.html?type=1&keyword=%E5%87%AF%E5%BE%B7MALL(%E8%A5%BF%E7%9B%B4%E9%97%A8%E5%BA%97)&center=39.908491%2C116.374328&radius=1000&key=4GABZ-EB5KR-77WW4-WKZ3O-2TLQ2-FYFDE&referer=myapp'
  window.location.replace(url)
}
</script>
