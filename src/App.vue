<template>
  <div class="flex flex-col items-center bg-gray-50 min-h-screen p-6">
    <div class="w-full max-w-6xl bg-white shadow-md rounded-lg overflow-hidden mb-8">
      <router-view></router-view>
    </div>
    
    <div class="w-full max-w-4xl text-center text-gray-600 text-sm">
      © {{ currentYear }} Matheus H. Barbosa de Lima. Made with ❤️ and <span class="text-green-500">&lt; code /&gt;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style>
body {
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
}
</style>