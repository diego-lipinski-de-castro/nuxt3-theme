<template>
    <div>
        <div class="text-center">
            <span
                class="bg-orange uppercase text-xs font-bold tracking-widest text-white pt-2 pb-1 px-4 inline-block">Science</span>
        </div>

        <h1 class="font-bold text-center text-5xl mt-10">{{ post.title.rendered }}</h1>

        <span class="block text-center mt-10 font-bold text-xl">Robert fox</span>

        <span class="block text-center mt-2.5 text-gray-400">{{ post.date }}</span>

        <div class="-mx-5 my-10">
            <img src="https://placehold.co/600x400" alt="Cover image" class="mx-auto" />
        </div>

        <div class="prose-xl max-w-3xl mx-auto" v-html="post.content.rendered">
        </div>

</div></template>
  
<script setup>
    const route = useRoute()
    const { data: post } = await useFetch(`http://wordpress.test/wp-json/wp/v2/posts/${route.params.id}`)
</script>
  