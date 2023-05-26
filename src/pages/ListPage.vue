<template>
  <div class="bg-gray-200 min-h-screen flex flex-col items-center justify-center">
    <div class="text-4xl font-bold m-10">List of Lecturers</div>

    <!-- search box -->
    <div class="relative w-full max-w-2xl rounded-md overflow-hidden bg-gray-100 backdrop-filter backdrop-blur-lg shadow-lg p-8">
      <div class="flex items-center justify-between mb-8">
        <h3 class="text-2xl font-bold">Search your tutors</h3>
        <div class="relative">
          <input type="text" class="appearance-none bg-gray-500 bg-opacity-20 rounded-md px-4 py-2 pr-8 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Type your lecturer info" />
        </div>
      </div>
      <!-- right button -->
      <div class="flex justify-end">
        <button class="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-10 rounded-md transition duration-300">Search</button>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-8 m-5">
      <div v-for="lecturer in lecturers" :key="lecturer.id" class="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
        <!-- rounded photo -->
        <div class="rounded-full h-24 w-24 flex items-center justify-center bg-gray-700 mb-4">
          <img :src="lecturer.photo" class="rounded-full h-24 w-24 object-cover" />
        </div>
        <div class="text-2xl font-bold">{{ lecturer.name }}</div>
        <div class="text-gray-600 mt-4">{{ lecturer.department }}</div>
        <div class="text-gray-600 mt-4">{{ lecturer.bio }}</div>
        <div class="flex mt-8">
          <!-- <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">View</button> -->
          <!-- <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Edit</button> -->
          <!-- button click to DetailPage with lecture id data -->
          <router-link :to="{ name: 'LecturerDetail', params: { id: lecturer.id } }" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4">View</router-link>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent  } from "vue";
import { lecturers } from "../data.ts";

console.log(lecturers);

defineComponent({
  name: "ListPage",
  data() {
    return {
      lecturers,
    };
  },
});


</script>

<style>
/* Add any custom styles here */
</style>