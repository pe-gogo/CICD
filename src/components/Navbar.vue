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
        <img src="/logo.png" class="h-10" />
      </div>
      <el-menu-item index="1" route="index">상품 보기</el-menu-item>
    </div>

    <div class="flex items-center" style="margin-right: 140px">
      <el-menu-item index="99" route="index">로그인</el-menu-item>
      <el-menu-item index="2">회원가입</el-menu-item>
      <el-menu-item index="3">장바구니</el-menu-item>
      <el-menu-item index="4">주문조회</el-menu-item>
      <el-menu-item index="5">고객센터</el-menu-item>
    </div>
  </el-menu>
</template>
