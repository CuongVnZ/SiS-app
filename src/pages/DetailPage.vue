<template>
  <div class="bg-gray-200 min-h-screen py-8">
    <div class="max-w-xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden bg-opacity-70 backdrop-filter backdrop-blur-md">
      <div class="px-6 py-4">
        <div class="text-center">
          <!-- <h2 class="text-3xl font-bold text-swinburne-red">Dr. Van Ho</h2> -->
          <h2 class="text-3xl font-bold text-swinburne-red">{{ lecturer.name }}</h2>
          <!-- photo of lecturer -->
          <img class="h-32 w-32 rounded-full mx-auto mt-4" :src=lecturer.photo alt="">
          <!-- <p class="text-gray-600 mt-5">ICT</p> -->
          <p class="text-gray-600 mt-5">{{ lecturer.department }}</p>
          <!-- Overall rating -->
          <p class="text-black-600">Overall rating: 1/5</p>
        </div>

        <!-- Subjects -->
          <div class="mt-4">
              <h3 class="text-xl font-semibold text-gray-700">Courses</h3>
              <ul class="mt-4">
              <li class="border-t border-gray-200 py-2">
                  <div class="flex items-center">
                  <div class="ml-3">
                      <p class="text-gray-700 font-semibold">COS10009</p>
                      <p class="text-gray-600">Introduction to Programming</p>
                  </div>
                  </div>
              </li>
              <li class="border-t border-gray-200 py-2">
                  <div class="flex items-center">
                  <div class="ml-3">
                      <p class="text-gray-700 font-semibold">COS60004</p>
                      <p class="text-gray-600">Web Development</p>
                  </div>
                  </div>
              </li>
              <li class="border-t border-gray-200 py-2">
                  <div class="flex items-center">
                  <div class="ml-3">
                      <p class="text-gray-700 font-semibold">COS20007</p>
                      <p class="text-gray-600">Object-Oritented Programming</p>
                  </div>
                  </div>
              </li>
              </ul>
          </div>
        <div class="mt-8">
          <h3 class="text-xl font-semibold text-gray-700">Reviews</h3>
          <ul class="mt-4">
            <li class="border-t border-gray-200 py-2">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <!-- <img class="h-10 w-10 rounded-full" src="https://via.placeholder.com/50" alt=""> -->
                  <img class="h-10 w-10 rounded-full" src="https://pbs.twimg.com/media/Fqa30bOX0AI4X7-.png" alt="">
                </div>
                <div class="ml-3">
                  <p class="text-gray-700 font-semibold">Anonymous</p>
                  <p class="text-gray-600">Very bad lecturer, don't take his class</p>
                  <div class="mt-2 flex items-center">
                    <svg class="h-4 w-4 fill-current text-swinburne-red" viewBox="0 0 20 20"><path d="M10 12.585l-4.293 4.292a1 1 0 01-1.414 0l-.707-.707a1 1 0 010-1.414L7.586 10 4.293 5.707a1 1 0 010-1.414l.707-.707a1 1 0 011.414 0L10 7.586l4.293-4.293a1 1 0 011.414 0l.707.707a1 1 0 010 1.414L12.414 10l4.293 4.293a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414 0L10 12.586z"/></svg>
                    <p class="ml-1 text-gray-600">1 / 5 stars</p>
                  </div>
                </div>
              </div>
            </li>
            <!-- Add more review items here -->
            <li class="border-t border-gray-200 py-2">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <img class="h-10 w-10 rounded-full" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3285eb64-a6b6-4e72-bc89-cb618879b71b/d4yfc0r-be60ec36-d198-4a07-a829-ba9f29a507fe.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMyODVlYjY0LWE2YjYtNGU3Mi1iYzg5LWNiNjE4ODc5YjcxYlwvZDR5ZmMwci1iZTYwZWMzNi1kMTk4LTRhMDctYTgyOS1iYTlmMjlhNTA3ZmUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.8kGkOVK3FKx5YgV74Vb1kZE6DXGHPLlxYN8LSLkYkhQ" alt="">
                </div>
                <div class="ml-3">
                  <p class="text-gray-700 font-semibold">Anonymous</p>
                  <!-- Longer bad review -->
                  <p class="text-gray-600">He grade me low for no reason, I hate him</p>
                  <div class="mt-2 flex items-center">
                    <svg class="h-4 w-4 fill-current text-swinburne-red" viewBox="0 0 20 20"><path d="M10 12.585l-4.293 4.292a1 1 0 01-1.414 0l-.707-.707a1 1 0 010-1.414L7.586 10 4.293 5.707a1 1 0 010-1.414l.707-.707a1 1 0 011.414 0L10 7.586l4.293-4.293a1 1 0 011.414 0l.707.707a1 1 0 010 1.414L12.414 10l4.293 4.293a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414 0L10 12.586z"/></svg>
                    <p class="ml-1 text-gray-600">0 / 5 stars</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { lecturers } from "../data.ts";

let lecturer = lecturers[0];

export default defineComponent({
  name: "PageDetail",
  data() {
    return {
      lecturer: null
    };
  },
  created() {
    
    // Get the lecturer ID from the route
    const lecturerId = this.$route.params.id;
    
    // Find the lecturer that has the same ID as the route
    this.lecturer = lecturers.find((each) => each.id === Number(lecturerId));

    // If the lecturer is not found, redirect to 404 page
    if (!this.lecturer) {
      this.$router.push({ name: "HomePage" });
    }

    // Set the page title to the lecturer's name
    document.title = `${this.lecturer.name} | Lecturer Review`;
    
  }
});
</script>

<style>
/* Add any necessary custom styles here */
.swinburne-red {
  color: #d11f2d;
}
</style>