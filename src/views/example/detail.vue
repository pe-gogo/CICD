<template>
  <div class="w-full px-20">
    <div class="flex justify-center items-start py-10">
      <div class="w-1/2">
        <!-- 轮播图 -->
        <el-carousel height="400px">
          <el-carousel-item>
            <img src="/shoes/p1/p1.jpg" class="object-cover h-full w-full" />
          </el-carousel-item>
          <el-carousel-item>
            <img src="/shoes/p1/p2.jpg" class="object-cover h-full w-full" />
          </el-carousel-item>
          <el-carousel-item>
            <img src="/shoes/p1/p3.jpg" class="object-cover h-full w-full" />
          </el-carousel-item>
          <el-carousel-item>
            <img src="/shoes/p1/p4.jpg" class="object-cover h-full w-full" />
          </el-carousel-item>
          <el-carousel-item>
            <img src="/shoes/p1/p5.png" class="object-cover h-full w-full" />
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="w-1/2 pl-6">
        <!-- 商品标题 -->
        <h2 class="text-2xl font-bold text-black mb-2">우주시리즈 귀여운 시트 세트</h2>
        <hr class="mb-4" />

        <!-- 价格 -->
        <p class="text-lg font-bold text-black mb-4">₩160000</p>

        <!-- 描述 -->
        <p class="text-sm text-gray-600 mb-4">
          침대 시트*1 이불커버*1 베갯잇*2
        </p>

        <!-- 规格选择 -->
        <div class="mb-6">
          <label for="size" class="block mb-2 text-gray-600">Size:</label>
          <select id="size" class="block w-full border px-4 py-2">
            <option>1.2m</option>
            <option>1.5m</option>
          </select>
        </div>

        <div class="mb-6">
          <label for="color" class="block mb-2 text-gray-600">Color:</label>
          <select id="color" class="block w-full border px-4 py-2">
            <option>Yello</option>
          </select>
        </div>

        <!-- 加入购物车 -->
        <button class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
          Add to Cart
        </button>
      </div>
    </div>

    <div class="my-6">
      <h3 class="text-black text-xl font-bold mb-2">DETAIL</h3>
      <hr class="mb-4" />
    
      <img
        src="/shoes/p1/p1.jpg"
        class="w-full object-contain"
      />
      <img
        src="/shoes/p1/p2.jpg"
        class="w-full object-contain"
      />
      <img
        src="/shoes/p1/p3.jpg"
        class="w-full object-contain"
      />
     
    </div>
  </div>
</template>

<script lang="ts" setup>
// 如果你需要处理一些逻辑，例如动态加载产品信息或处理添加到购物车的操作，你可以在这里添加相关的逻辑。
</script>
