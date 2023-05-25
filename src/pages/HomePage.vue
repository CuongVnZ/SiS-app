<script setup lang="ts">
import Footer from '.././components/Footer.vue'

// create array of 3 data for box {titile, content, button}
const campuses = [
  {
    title: 'Ha Noi',
    content: 'Click to view review of lecturer in Ha Noi',
    url: '/hanoi',
  },
  {
    title: 'Ho Chi Minh',
    content: 'Click to view review of lecturer in Ho Chi Minh',
    url: '/hochiminh'
  },
  {
    title: 'Da Nang',
    content: 'Click to view review of lecturer in Da Nang',
    url: '/danang'
  }
]

</script>


<template>
<img src="https://asset-cdn.campaignbrief.com/wp-content/uploads/2020/08/14103114/image001.jpg" alt="Background Image" class="absolute object-cover w-full h-full backdrop-blur-lg">
<div class="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-gray-900 bg-opacity-50 w-full h-screen relative">
    
    <!-- title -->
    <h1 class="text-5xl font-bold text-white mb-12">SwinVN in Secret</h1>
    <h2 class="text-2xl font-bold text-white mb-12">Where you can find your best lecturer</h2>

    
    <!-- Glassmorphism box section with drop-list and full size button "View" -->
 
  <div class="relative w-full max-w-2xl rounded-md overflow-hidden bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg p-8">
    <div class="flex items-center justify-between mb-8">
      <h3 class="text-2xl font-bold text-white">Choose your campus location</h3>
      <div class="relative">
        <select class="appearance-none bg-black bg-opacity-20 rounded-md px-4 py-2 pr-8 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
          <option selected disabled>Select campus</option>
          <option class="text-black" v-for="(campus, index) in campuses" :key="index">{{ campus.title }}</option>
        </select>
        <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
    <p class="text-white mb-8">{{ campuses[0].content }}</p>
    <a :href="campuses[0].url" class="inline-block bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-10 rounded-md transition duration-300">View</a>
  </div>

  <Footer />
</div>
</template>

<style>
</style>