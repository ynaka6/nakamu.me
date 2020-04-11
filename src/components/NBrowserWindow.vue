<template>
  <div class="rounded-b w-full shadow-lg">
    <div class="bg-gray-300 p-2">
      <div class="flex">
        <div class="w-2 h-2 bg-red-400 rounded-full mr-1" />
        <div class="w-2 h-2 bg-yellow-400 rounded-full mr-1" />
        <div class="w-2 h-2 bg-green-400 rounded-full" />
      </div>
    </div>
    <div class="bg-white">
      <slot />
    </div>
  </div>
</template>
