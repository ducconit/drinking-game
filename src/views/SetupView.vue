<template>
  <div class="setup-view container mx-auto min-h-screen py-10 px-4 md:px-8 flex flex-col max-w-2xl relative">
    
    <!-- Top Action Buttons -->
    <div class="absolute top-4 right-4 md:right-8 flex flex-col md:flex-row gap-2 z-20">
      <button 
        class="btn btn-secondary !py-2 !px-4 text-xs font-bold tracking-widest uppercase border-white/20 flex items-center justify-center gap-2"
        @click="router.push('/help')"
      >
        <span>ℹ️</span> Hướng dẫn
      </button>
      <button 
        class="btn btn-secondary !py-2 !px-4 text-xs font-bold tracking-widest uppercase border-white/20 flex items-center justify-center gap-2"
        @click="router.push('/history')"
      >
        <span>📜</span> Lịch sử
      </button>
    </div>

    <div class="text-center mb-10 mt-8">
      <h1 class="text-5xl md:text-6xl font-black text-glow tracking-wide mb-4">Vòng Số Phận</h1>
    </div>

    <!-- Tags Selection -->
    <div class="glass-panel p-6 md:p-8 mb-8 animate-fade-in-up">
      <h2 class="text-xl font-bold mb-6 flex items-center gap-3">
        <span class="text-2xl">🏷️</span> 
        <span class="text-gradient">Chọn Loại Bài</span>
      </h2>
      
      <div class="flex flex-wrap gap-3">
        <button
          v-for="tag in TAGS_AVAILABLE"
          :key="tag.id"
          class="tag-btn relative overflow-hidden group border transition-all duration-300 rounded-2xl px-5 py-3 flex items-center gap-2"
          :class="gameStore.selectedTags.includes(tag.id) ? 'active' : 'inactive'"
          @click="gameStore.toggleTag(tag.id)"
          :style="`--tag-color: ${tag.color}`"
        >
          <!-- Glow background -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" :style="`background-color: ${tag.color}`"></div>
          
          <span class="text-xl filter drop-shadow-md group-hover:scale-110 transition-transform duration-300">{{ tag.emoji }}</span>
          <span class="font-bold tracking-wide z-10 text-sm">{{ tag.label }}</span>
          
          <!-- Card Count -->
          <span class="text-xs font-mono bg-black/40 px-2 py-0.5 rounded-full border border-white/10 z-10 text-gray-300 ml-1">
            {{ tagCounts[tag.id] || 0 }}
          </span>
          
          <!-- Active Indicator -->
          <div v-if="gameStore.selectedTags.includes(tag.id)" class="absolute right-2 top-2 w-2 h-2 rounded-full shadow-[0_0_8px_currentColor]" :style="`background-color: ${tag.color}; color: ${tag.color}`"></div>
        </button>
      </div>
    </div>

    <!-- Game Mode Selection -->
    <div class="glass-panel p-6 md:p-8 mb-10 animate-fade-in-up" style="animation-delay: 0.1s">
      <div class="flex p-1.5 bg-black/50 border border-white/10 rounded-2xl mb-8 backdrop-blur-md">
        <button 
          class="flex-1 py-3 text-sm font-bold uppercase tracking-wider rounded-xl transition-all duration-300"
          :class="gameStore.mode === 'anonymous' ? 'bg-[var(--color-surface-glass-hover)] text-white shadow-lg border border-white/10' : 'text-gray-500 hover:text-gray-300'"
          @click="gameStore.mode = 'anonymous'"
        >
          🕵️‍♂️ Ẩn danh
        </button>
        <button 
          class="flex-1 py-3 text-sm font-bold uppercase tracking-wider rounded-xl transition-all duration-300"
          :class="gameStore.mode === 'named' ? 'bg-[var(--color-surface-glass-hover)] text-white shadow-lg border border-white/10' : 'text-gray-500 hover:text-gray-300'"
          @click="gameStore.mode = 'named'"
        >
          📝 Ghi tên
        </button>
      </div>

      <!-- Named Mode: Player Management -->
      <transition name="fade">
        <div v-if="gameStore.mode === 'named'">
          <h2 class="text-xl font-bold mb-4 flex items-center gap-3">
            <span class="text-2xl">👥</span> 
            <span class="text-gradient">Người chơi ({{ gameStore.players.length }})</span>
          </h2>
          
          <form @submit.prevent="handleAddPlayer" class="flex gap-3 mb-6">
            <input 
              v-model="newPlayerName" 
              type="text" 
              placeholder="Nhập tên người chơi..." 
              class="input-field flex-1"
            >
            <button type="submit" class="btn btn-primary px-6" :disabled="!newPlayerName.trim()">
              + Thêm
            </button>
          </form>

          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <transition-group name="list">
              <div 
                v-for="player in gameStore.players" 
                :key="player.id"
                class="flex items-center justify-between bg-black/30 border border-white/10 px-4 py-3 rounded-xl group hover:border-[var(--color-brand-primary)]/50 transition-colors"
              >
                <span class="font-bold truncate mr-2">{{ player.name }}</span>
                <button 
                  @click="gameStore.removePlayer(player.id)"
                  class="text-gray-500 hover:text-red-500 hover:scale-110 transition-all focus:outline-none"
                >
                  ✕
                </button>
              </div>
            </transition-group>
          </div>
        </div>
      </transition>
    </div>

    <!-- Start Button -->
    <div class="mt-auto pt-6 text-center animate-fade-in-up" style="animation-delay: 0.2s">
      <button 
        class="btn btn-primary w-full md:w-auto px-12 py-5 text-xl font-black uppercase tracking-widest"
        :disabled="!gameStore.canStart"
        @click="startGame"
      >
        Bắt Đầu Chơi! 🎲
      </button>
      <p v-if="!gameStore.canStart" class="text-red-400 text-sm mt-4 font-medium h-5">
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useGameStore } from '../stores/gameStore'
import { useSound } from '../composables/useSound'
import { TAGS_AVAILABLE, INITIAL_CARDS } from '../data/cards'

const gameStore = useGameStore()
const router = useRouter()
const sound = useSound()
const newPlayerName = ref('')

const tagCounts = computed(() => {
  const counts: Record<string, number> = {}
  TAGS_AVAILABLE.forEach(t => counts[t.id] = 0)
  
  INITIAL_CARDS.forEach(card => {
    card.tags.forEach(tag => {
      if (counts[tag] !== undefined) {
        counts[tag]++
      }
    })
  })
  return counts
})

const errorMessage = computed(() => {
  if (gameStore.selectedTags.length === 0) return 'Vui lòng chọn ít nhất 1 loại bài!'
  if (gameStore.mode === 'named' && gameStore.players.length === 0) return 'Vui lòng thêm ít nhất 1 người chơi!'
  return ''
})

function handleAddPlayer() {
  if (newPlayerName.value.trim()) {
    gameStore.addPlayer(newPlayerName.value)
    newPlayerName.value = ''
  }
}

async function startGame() {
  sound.play('click')
  sound.playBGM() // Bật nhạc ngay lập tức từ sự kiện click để trình duyệt không chặn
  await gameStore.startGame()
  router.push('/game')
}
</script>

<style scoped>
.tag-btn.inactive {
  background: rgba(255, 255, 255, 0.02);
  border-color: rgba(255, 255, 255, 0.1);
  color: #a1a1aa;
}
.tag-btn.inactive:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.2);
  color: white;
}

.tag-btn.active {
  background: color-mix(in srgb, var(--tag-color) 15%, transparent);
  border-color: var(--tag-color);
  color: white;
  box-shadow: 0 0 15px color-mix(in srgb, var(--tag-color) 30%, transparent);
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.list-enter-from {
  opacity: 0;
  transform: scale(0.9) translateY(10px);
}
.list-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>