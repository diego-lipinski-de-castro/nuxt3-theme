<template>
  <div>
    
    <h1 class="font-bold text-center text-5xl">Lifestyle</h1>

    <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-5">
        <a v-for="(post, index) in posts" :key="index" :href="`posts/${post.id}`" class="border border-zync-200">
          <div class="flex flex-col">
            <img src="https://placehold.co/600x400" alt="Cover image" class="mx-auto"/>
            
            <div class="flex">
              <span class="bg-orange uppercase text-xs font-bold tracking-widest text-white pt-2 pb-1 px-4">Lifestyle</span>
              <span class="bg-zinc-200 uppercase text-xs tracking-widest text-zinc-700 pt-2 pb-1 px-4 w-full text-center">1:25 PM | 01.26.2022</span>
            </div>

            <h1 class="font-bold text-3xl bg-white px-4 py-4">{{ post.title.rendered }}</h1>
          </div>
        </a>
    </div>

    <!-- pagination -->
    <div class="mt-10">
      <ul class="flex space-x-2">
        <li class="h-12 w-14 bg-gray-100 flex justify-center items-center text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
          </svg>
        </li>

        <li v-for="n in 5" :key="n" :class="[n === 1 ? 'text-orange font-bold' : 'text-gray-500 hover:bg-gray-100 transition-colors', 'h-12 w-12 flex justify-center items-center']">
          {{ n }}
        </li>

        <li class="h-12 w-14 bg-gray-100 hover:bg-gray-200/50 transition-colors flex justify-center items-center text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script setup>
  const { data: posts } = await useFetch('http://wordpress.test/wp-json/wp/v2/posts')
</script>
