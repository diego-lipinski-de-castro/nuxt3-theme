<template>
    <div class="font-sans">
  
      <!-- topbar -->
      <div :class="[menuOpen ? 'hidden lg:flex' : 'flex', 'z-50 relative w-full max-w-7xl mx-auto justify-between items-center p-5']">
        <ul class="hidden lg:flex space-x-5 w-1/3">
          <li>
            <a href="#" class="text-black hover:text-gray-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
            </a>
          </li>
  
          <li>
            <a href="#" class="text-black hover:text-gray-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
            </a>
          </li>
  
          <li>
            <a href="#" class="text-black hover:text-gray-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
            </a>
          </li>
        </ul>
  
        <a href="#" class="text-gray-500 bg-orange p-1">
          <img class="h-8 lg:h-10 w-auto" src="https://ocp.news/images/ocp-logo-black.svg" alt="OCP News">
        </a>
  
        <div class="hidden lg:flex justify-end w-1/3">
          <button class="text-black">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
  
        <button class="text-gray-500 lg:hidden" @click="menuOpen = true">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
  
      <div :class="[{ 'hidden': !menuOpen }, 'z-50 lg:flex bg-gray-50 fixed inset-0 lg:relative top-0 left-0 w-screen h-auto p-10 lg:p-0']">
        <div class="lg:hidden flex w-full justify-end -mt-5 ml-5">
          <button class="text-gray-500" @click="menuOpen = false">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
  
        <div class="w-full lg:border-t-2 lg:border-b-2 border-gray-300 lg:px-5">
          <ul class="flex flex-col w-full max-w-7xl mx-auto lg:flex-row lg:justify-between mt-8 lg:mt-0 space-y-8 lg:space-y-0 lg:pt-5 lg:pb-4 xl:px-5 lg:uppercase">
            <li class="">
              <a href="#" class="text-3xl lg:text-xl font-bold tracking-wide text-black hover:text-gray-500 transition-colors">Home</a>
            </li>
  
            <li class="">
              <a href="#" class="text-3xl lg:text-xl font-bold tracking-wide text-black hover:text-gray-500 transition-colors">Events</a>
            </li>
  
            <li class="">
              <a href="#" class="text-3xl lg:text-xl font-bold tracking-wide text-black hover:text-gray-500 transition-colors">Technology</a>
            </li>
  
            <li class="">
              <a href="#" class="text-3xl lg:text-xl font-bold tracking-wide text-orange hover:text-orange/70 transition-colors">Lifestyle</a>
            </li>
  
            <li class="">
              <a href="#" class="text-3xl lg:text-xl font-bold tracking-wide text-black hover:text-gray-500 transition-colors">People</a>
            </li>
  
            <li class="">
              <a href="#" class="text-3xl lg:text-xl font-bold tracking-wide text-black hover:text-gray-500 transition-colors">Outdoor</a>
            </li>
  
            <li class="">
              <a href="#" class="text-3xl lg:text-xl font-bold tracking-wide text-black hover:text-gray-500 transition-colors">Automotive</a>
            </li>
  
            <li class="">
              <a href="#" class="text-3xl lg:text-xl font-bold tracking-wide text-black hover:text-gray-500 transition-colors">Cars</a>
            </li>
          </ul>
        </div>    
  
        <ul class="lg:hidden flex mt-16 space-x-10">
          <li>
            <a href="#" class="text-black hover:text-gray-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
            </a>
          </li>
  
          <li>
            <a href="#" class="text-black hover:text-gray-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
            </a>
          </li>
  
          <li>
            <a href="#" class="text-black hover:text-gray-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
            </a>
          </li>
        </ul>
  
        <ul class="lg:hidden grid grid-cols-2 gap-y-2 mt-16">
          <li>
            <a href="#" class="text-gray-700 hover:text-gray-500 transition-colors">About us</a>
          </li>
  
          <li>
            <a href="#" class="text-gray-700 hover:text-gray-500 transition-colors">Privacy policy</a>
          </li>
  
          <li>
            <a href="#" class="text-gray-700 hover:text-gray-500 transition-colors">Contact us</a>
          </li>
  
          <li>
            <a href="#" class="text-gray-700 hover:text-gray-500 transition-colors">Subscribe</a>
          </li>
        </ul>
      </div>
      <!-- end topbar -->
  
      <!-- content -->
      <div class="my-12 p-5 w-full max-w-7xl mx-auto">
        <slot />
      </div>
      <!-- end content -->
  
      <!-- subscribe cta -->
      <div class="my-12 p-5 w-full max-w-3xl mx-auto">
        
        <h1 class="font-bold text-center text-5xl">Subscribe</h1>
  
        <span class="bg-orange uppercase text-xs font-bold tracking-widest text-white pt-3 pb-2 px-6 inline-block mt-10">Be the first to know</span>
  
        <p class="text-3xl   mt-5">Never miss an update</p>
  
        <form action="#" class="mt-5">
  
          <input type="text" class="border border-gray-300 bg-white p-4 w-full outline-none hover:border-gray-500 focus:border-gray-500 transition-all" placeholder="Your name"/>
  
          <input type="text" class="mt-4 border border-gray-300 bg-white p-4 w-full outline-none hover:border-gray-500 focus:border-gray-500 transition-all" placeholder="Your email address"/>
  
          <label for="accept" class="flex mt-4">
            <input id="accept" type="checkbox" />
            <span class="flex ml-2">I want to be informated about updates via email</span>
          </label>
  
          <button type="submit" class="mt-4 bg-orange hover:bg-orange/70 transition-colors font-bold tracking-widest uppercase text-white w-full px-2 pt-5 pb-4">Subscribe</button>
        </form>
  
      </div>
      <!-- end subscribe cta -->
  
      <!-- footer -->
      <!-- end footer -->
  
    </div>
  </template>
  
  <script setup>

  const menuOpen = useState('menuOpen', () => false)
  const searchOpen = useState('searchOpen', () => false)

  </script>
    