<template>
  <div class="history-view container mx-auto min-h-screen py-10 px-4 md:px-8 flex flex-col max-w-3xl relative">
    <!-- Ambient Background Elements -->
    <div class="fixed top-[-10%] left-[-20%] w-[50%] h-[50%] rounded-full bg-[var(--color-brand-secondary)] opacity-5 blur-[120px] pointer-events-none"></div>

    <!-- Header -->
    <header class="flex justify-between items-center mb-10 relative z-10">
      <button class="btn btn-secondary !py-2 !px-4 text-sm tracking-widest uppercase border-white/20" @click="router.push('/')">
        🔙 Quay lại
      </button>
      <h1 class="text-2xl font-black text-gradient uppercase tracking-widest">Lịch sử chơi</h1>
      <div class="w-24"></div> <!-- spacer -->
    </header>

    <!-- Loading State -->
    <div v-if="isLoading" class="flex-1 flex justify-center items-center">
      <div class="w-12 h-12 border-4 border-brand-primary border-t-transparent rounded-full animate-spin shadow-[0_0_15px_rgba(255,46,147,0.5)]"></div>
    </div>

    <!-- Empty State -->
    <div v-else-if="histories.length === 0" class="flex-1 flex flex-col justify-center items-center text-center glass-panel p-10 animate-fade-in-up">
      <div class="text-6xl mb-6 filter drop-shadow-xl animate-float">📜</div>
      <h2 class="text-2xl font-bold mb-3 text-glow text-white">Chưa có lịch sử nào</h2>
      <p class="text-gray-400 font-medium">Hãy bắt đầu một ván game mới để ghi lại những khoảnh khắc vui vẻ nhé!</p>
    </div>

    <!-- History List -->
    <div v-else class="space-y-6 pb-10">
      <div 
        v-for="(item, idx) in histories" 
        :key="item.id" 
        class="glass-panel p-6 border-white/10 hover:border-brand-primary/40 transition-colors animate-fade-in-up"
        :style="{ animationDelay: `${idx * 0.1}s` }"
      >
        <div class="flex justify-between items-start mb-4 border-b border-white/10 pb-4">
          <div>
            <div class="text-xs text-gray-400 mb-1 font-mono tracking-widest">{{ formatDate(item.date) }}</div>
            <div class="font-bold text-xl text-gradient-primary">
              {{ item.mode === 'named' ? 'Chế độ Ghi tên' : 'Chế độ Ẩn danh' }}
            </div>
          </div>
          <div class="text-right">
            <div class="text-3xl font-black text-brand-primary drop-shadow-[0_0_8px_rgba(255,46,147,0.3)]">{{ item.cardsDrawnCount }}</div>
            <div class="text-[10px] text-gray-500 uppercase tracking-widest">Lá đã lật</div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 mb-4">
          <div class="bg-black/40 p-4 rounded-xl border border-white/5 flex flex-col justify-center items-center">
            <div class="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Thời gian chơi</div>
            <div class="font-bold text-lg text-brand-secondary drop-shadow-[0_0_5px_rgba(0,245,255,0.4)]">
              {{ formatDuration(item.durationMs || 0) }}
            </div>
          </div>
          <div class="bg-black/40 p-4 rounded-xl border border-white/5 flex flex-col justify-center items-center">
            <div class="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Người chơi</div>
            <div class="font-bold text-lg text-white">
              {{ item.mode === 'named' ? item.players.length : 'Không giới hạn' }}
            </div>
          </div>
        </div>
        
        <div v-if="item.mode === 'named' && item.players.length > 0" class="mb-5">
          <div class="text-[10px] text-gray-500 uppercase tracking-widest mb-2">Danh sách người chơi</div>
          <div class="text-sm text-gray-300 font-medium leading-relaxed">
            {{ item.players.join(' • ') }}
          </div>
        </div>

        <div>
          <div class="text-[10px] text-gray-500 uppercase tracking-widest mb-2">Bộ thẻ đã dùng</div>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tag in item.tagsPlayed" 
              :key="tag" 
              class="text-[9px] uppercase tracking-wider font-bold px-2 py-1 bg-white/10 border border-white/10 rounded-md text-gray-300"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { historyApi, type GameHistory } from '../api/historyApi'

const router = useRouter()
const histories = ref<GameHistory[]>([])
const isLoading = ref(true)

onMounted(async () => {
  histories.value = await historyApi.getAllHistory()
  isLoading.value = false
})

function formatDate(isoString: string) {
  const date = new Date(isoString)
  return new Intl.DateTimeFormat('vi-VN', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit'
  }).format(date)
}

function formatDuration(ms: number) {
  if (!ms || ms <= 0) return '00:00'
  const totalSeconds = Math.floor(ms / 1000)
  const m = Math.floor(totalSeconds / 60)
  const s = totalSeconds % 60
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
}
</script>

<style scoped>
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
</style>