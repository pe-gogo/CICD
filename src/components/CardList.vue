<template>
  <div class="container mx-auto p-6">
    <!-- 轮播图 -->
    <el-carousel height="400px" class="mb-10">
      <el-carousel-item v-for="banner in banners" :key="banner.id">
        <img :src="banner.image" class="object-cover w-full h-full" />
      </el-carousel-item>
    </el-carousel>

    <!-- 商品图 -->
    <div class="grid grid-cols-1 gap-6">
      <el-card
        v-for="product in products"
        :key="product.id"
        shadow="hover"
        @click="handleClick(product)"
      >
        <div class="flex flex-col items-center">
          <el-carousel height="400px" class="w-full">
            <el-carousel-item v-for="image in product.images" :key="image">
              <img :src="image" class="object-cover w-full h-full" />
            </el-carousel-item>
          </el-carousel>
          <div class="p-4 w-full">
            <div class="font-bold text-xl mb-2">{{ product.name }}</div>
            <div class="text-gray-700">{{ product.description }}</div>
            <div class="mt-3 text-xl">₩{{ product.price }}</div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: [
        {
          id: 1,
          image: '/pants/bg1.png',
        },
        {
          id: 2,
          image: '/pants/bg2.png',
        },
        {
          id: 3,
          image: '/pants/bg3.png',
        },
        // More banners...
      ],
      products: [
        {
          id: 1,
          name: '우주시리즈 귀여운 시트 세트',
          description: '침대 시트*1 이불커버*1 베갯잇*2',
          price: 160000,
          images: ['/shoes/p1/p1.jpg'],
        },
        {
          id: 1,
          name: 'Bed Sheet',
          description: 'Luxurious bed sheet.',
          price: 160000,
          images: ['/shoes/p1/p4.jpg'],
        },
        {
          id: 1,
          name: 'Bed Sheet',
          description: 'Luxurious bed sheet.',
          price: 160000,
          images: ['/shoes/p1/p3.jpg'],
        },
        {
          id: 1,
          name: 'Bed Sheet',
          description: 'Luxurious bed sheet.',
          price: 160000,
          images: ['/shoes/p1/p2.jpg'],
        },
        {
          id: 1,
          name: 'Bed Sheet',
          description: 'Luxurious bed sheet.',
          price: 160000,
          images: ['/shoes/p1/p5.png'],
        },
        // More products...
      ],
    };
  },
  methods: {
    handleClick() {
      this.$router.push(`/detail`);
    },
  },
};
</script>

<style scoped>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>
