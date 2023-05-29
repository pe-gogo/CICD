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
        </el-carousel>
      </div>

      <div class="w-1/2 pl-6">
        <!-- 商品标题 -->
        <h2 class="text-2xl font-bold text-black mb-2">Product Title</h2>
        <hr class="mb-4" />

        <!-- 价格 -->
        <p class="text-lg font-bold text-black mb-4">$99.99</p>

        <!-- 描述 -->
        <p class="text-sm text-gray-600 mb-4">
          This is a product description. It provides more details about the product.
        </p>

        <!-- 规格选择 -->
        <div class="mb-6">
          <label for="size" class="block mb-2 text-gray-600">Size:</label>
          <select id="size" class="block w-full border px-4 py-2">
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>

        <div class="mb-6">
          <label for="color" class="block mb-2 text-gray-600">Color:</label>
          <select id="color" class="block w-full border px-4 py-2">
            <option>Red</option>
            <option>Blue</option>
            <option>Green</option>
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
        src="https://brand.evezary.co.kr/img/product_copyright.jpg"
        class="w-full object-contain"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
// 如果你需要处理一些逻辑，例如动态加载产品信息或处理添加到购物车的操作，你可以在这里添加相关的逻辑。
</script>
