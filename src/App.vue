<template>
  <div v-if="isLoading" class="loading-screen min-h-screen flex flex-col items-center justify-center p-6 text-center">
    <div class="text-6xl mb-6 animate-bounce">🍻</div>
    <h2 class="text-2xl md:text-3xl font-black text-glow mb-8 text-primary">Đang thiết lập dữ liệu...</h2>
    
    <div class="w-full max-w-xs bg-[rgba(255,255,255,0.1)] rounded-full h-4 overflow-hidden border border-[rgba(255,255,255,0.05)] shadow-[0_0_15px_rgba(255,0,119,0.3)]">
      <div class="bg-primary h-full transition-all duration-200 ease-out" :style="{ width: `${progress}%` }"></div>
    </div>
    <p class="mt-4 text-gray-400 font-mono font-bold">{{ progress }}%</p>
  </div>
  
  <router-view v-else v-slot="{ Component }">
    <transition name="page" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { cardsApi } from './api/cardsApi'

const isLoading = ref(true)
const progress = ref(0)

onMounted(async () => {
  await cardsApi.seedInitialCards((val) => {
    progress.value = val
  })
  
  // Delay nhỏ ở 100% để user kịp nhìn thấy trước khi vào màn Setup
  setTimeout(() => {
    isLoading.value = false
  }, 400)
})
</script>

<style scoped>
.loading-screen {
  background: radial-gradient(circle at center, #1a1a2e 0%, #0d0d1a 100%);
}
</style>