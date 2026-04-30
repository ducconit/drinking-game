<template>
  <div class="game-view container mx-auto min-h-screen flex flex-col py-6 px-4 md:px-8 relative">
    <!-- Ambient Background Elements -->
    <div class="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--color-brand-primary)] opacity-10 blur-[120px] pointer-events-none"></div>
    <div class="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--color-brand-secondary)] opacity-10 blur-[120px] pointer-events-none"></div>

    <!-- Header -->
    <header class="flex justify-between items-center mb-8 relative z-50 min-h-[48px]">
      <transition name="fade">
        <button v-show="!isLocked" class="btn btn-secondary !py-2 !px-4 text-sm tracking-widest uppercase border-white/20" @click="confirmExit">
          🔙 Thoát
        </button>
      </transition>
      
      <div class="flex items-center gap-3 md:gap-4 ml-auto">
        <transition name="fade">
          <div v-show="!isLocked" class="flex items-center gap-4 glass-panel !rounded-full px-4 py-2 border-white/10">
            <label class="flex items-center gap-3 cursor-pointer text-sm font-bold tracking-widest uppercase text-gray-300">
              <span class="hidden md:inline">Lật nhanh</span>
              <span class="md:hidden">⚡</span>
              <input type="checkbox" v-model="gameStore.autoFlip" class="toggle-checkbox">
            </label>
            <div class="w-[1px] h-4 bg-white/20"></div>
            <button class="text-xl hover:scale-110 transition-transform filter drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" @click="sound.toggleMute()">
              {{ sound.isMuted.value ? '🔇' : '🔊' }}
            </button>
          </div>
        </transition>

        <!-- Lock Button -->
        <button 
          class="btn glass-panel !p-0 w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300"
          :class="isLocked ? 'border-brand-primary shadow-[0_0_15px_rgba(255,46,147,0.3)] bg-brand-primary/10' : 'border-white/20'"
          @click="isLocked = !isLocked"
        >
          <span class="text-xl">{{ isLocked ? '🔒' : '🔓' }}</span>
        </button>
      </div>
    </header>

    <!-- Main Game Area -->
    <main class="flex-1 flex flex-col items-center justify-center relative z-10">
      
      <!-- Player Turn Info -->
      <div class="mb-10 text-center min-h-[90px] w-full" v-if="gameStore.mode === 'named' && gameStore.currentPlayer">
        <transition name="fade" mode="out-in">
          <div :key="isFlipped ? 'next' : 'current'">
            <p class="text-sm font-bold text-gray-400 uppercase tracking-[0.3em] mb-2">
              {{ isFlipped ? 'Lượt tiếp theo' : 'Đến lượt của' }}
            </p>
            <div class="inline-block relative">
              <h2 class="text-4xl md:text-5xl font-black text-transparent bg-clip-text"
                  :class="isFlipped ? 'bg-gradient-to-r from-brand-secondary to-brand-tertiary drop-shadow-[0_0_20px_rgba(0,245,255,0.4)]' : 'bg-gradient-to-r from-brand-primary to-brand-tertiary drop-shadow-[0_0_20px_rgba(255,46,147,0.4)]'">
                {{ isFlipped ? gameStore.players[(gameStore.currentPlayerIndex + 1) % gameStore.players.length]?.name : gameStore.currentPlayer.name }}
              </h2>
            </div>
          </div>
        </transition>
      </div>
      <div class="mb-10 text-center min-h-[90px] w-full" v-else-if="!isLocked">
        <p class="text-sm font-bold text-gray-400 uppercase tracking-[0.3em] mb-2">Chế độ</p>
        <h2 class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-tertiary drop-shadow-[0_0_20px_rgba(0,245,255,0.4)]">
          Rút Bài Tự Do
        </h2>
      </div>

      <!-- Card Deck -->
      <div 
        class="deck-area w-full flex justify-center mb-10 relative cursor-pointer" 
        @click="handleCardClick"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
      >
        <PlayingCard 
          v-if="currentCard || gameStore.deck.length > 0"
          :card="currentCard" 
          :flipped="isFlipped" 
        />
        
        <!-- Glowing Base under the card -->
        <div v-if="!isFlipped && (currentCard || gameStore.deck.length > 0)" class="absolute bottom-[-20px] w-48 h-10 bg-brand-primary/20 rounded-[100%] blur-xl animate-pulse-glow pointer-events-none"></div>
      </div>

      <!-- Controls below card -->
      <transition name="fade">
        <div v-show="!isLocked" class="min-h-[70px] w-full flex items-center justify-center mt-4">
          <transition name="fade">
            <div v-if="isFlipped" class="flex items-center gap-3">
              <button class="btn glass-panel border border-white/10 hover:border-white/30 px-4 md:px-6 py-4 text-xs md:text-sm font-bold tracking-widest uppercase transition-colors" @click="skipCard">
                Bỏ qua
              </button>
              <button class="btn btn-primary px-6 md:px-10 py-4 text-sm md:text-xl tracking-widest uppercase group overflow-hidden relative" @click="nextTurn">
                <span class="relative z-10 flex items-center gap-2">Tiếp theo <span class="group-hover:translate-x-1 transition-transform">➔</span></span>
                <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
              </button>
            </div>
          </transition>
        </div>
      </transition>

      <!-- Empty state -->
      <div v-if="gameStore.deck.length === 0 && !currentCard" class="text-center glass-panel p-10 border-brand-primary/30 shadow-[0_0_50px_rgba(255,46,147,0.15)] animate-fade-in-up">
        <div class="text-7xl mb-6 filter drop-shadow-xl animate-float">🏁</div>
        <h2 class="text-3xl font-black mb-3 text-glow">Đã hết bài!</h2>
        <p class="text-gray-400 mb-8 font-medium">Bạn đã rút hết {{ gameStore.drawnCards.length }} lá bài trong bộ này.</p>
        <button class="btn btn-primary px-10 py-4 text-lg w-full sm:w-auto uppercase tracking-widest shadow-neon" @click="handleEndGame">
          Lưu Lịch Sử
        </button>
      </div>
      
    </main>
    
    <!-- Footer Stats -->
    <transition name="fade">
      <footer v-show="!isLocked" class="mt-auto pt-6 text-center text-xs text-gray-500 flex justify-between px-6 font-bold uppercase tracking-widest relative z-10">
        <div class="flex flex-col items-start">
          <span class="text-gray-600 mb-1">Còn lại</span>
          <span class="text-xl text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">{{ gameStore.deck.length }}</span>
        </div>
        <div class="flex flex-col items-end">
          <span class="text-gray-600 mb-1">Đã bốc</span>
          <span class="text-xl text-brand-primary drop-shadow-[0_0_8px_rgba(255,46,147,0.5)]">{{ gameStore.drawnCards.length }}</span>
        </div>
      </footer>
    </transition>

    <!-- Exit Confirm Modal -->
    <transition name="fade">
      <div v-if="showExitModal" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" @click="showExitModal = false"></div>
        <!-- Modal Content -->
        <div class="glass-panel p-8 max-w-sm w-full relative z-10 text-center animate-fade-in-up border-brand-primary/30 shadow-[0_0_50px_rgba(255,46,147,0.15)]">
          <div class="text-5xl mb-4">⚠️</div>
          <h3 class="text-2xl font-black text-white drop-shadow-[0_0_10px_rgba(255,46,147,0.8)] mb-2">Thoát trò chơi?</h3>
          <p class="text-gray-400 mb-8 text-sm leading-relaxed">Bạn có chắc chắn muốn kết thúc trò chơi này? Dữ liệu ván chơi sẽ được lưu lại vào Lịch sử.</p>
          <div class="flex gap-4">
            <button class="btn glass-panel flex-1 py-3 border-white/10 hover:border-white/30 text-sm font-bold uppercase tracking-widest" @click="showExitModal = false">
              Hủy
            </button>
            <button class="btn btn-primary flex-1 py-3 text-sm font-bold uppercase tracking-widest" @click="handleEndGame">
              Thoát
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useGameStore } from '../stores/gameStore'
import { useSound } from '../composables/useSound'
import PlayingCard from '../components/PlayingCard.vue'

const gameStore = useGameStore()
const router = useRouter()
const sound = useSound()

const { currentCard, isFlipped, isLocked } = storeToRefs(gameStore)
const showExitModal = ref(false)

let touchStartX = 0
let touchStartY = 0

onMounted(() => {
  if (gameStore.phase !== 'IN_GAME') {
    router.replace('/')
    return
  }

  sound.playBGM()

  if (!currentCard.value && gameStore.deck.length > 0) {
    drawNewCard()
  }
})

function drawNewCard() {
  gameStore.drawCard()
}

function handleCardClick() {
  if (!currentCard.value) return
  
  if (isFlipped.value) {
    // Nếu đã lật, click tiếp tương đương với Tiếp Theo
    nextTurn()
  } else {
    isFlipped.value = true
    sound.play('flip')
  }
}

function handleTouchStart(e: TouchEvent) {
  touchStartX = e.touches[0].clientX
  touchStartY = e.touches[0].clientY
}

function handleTouchEnd(e: TouchEvent) {
  if (!currentCard.value || !isFlipped.value) return

  const touchEndX = e.changedTouches[0].clientX
  const touchEndY = e.changedTouches[0].clientY
  
  const deltaX = touchEndX - touchStartX
  const deltaY = touchEndY - touchStartY
  
  // Vuốt (swipe) lớn hơn 40px
  if (Math.abs(deltaX) > 40 || Math.abs(deltaY) > 40) {
    nextTurn()
  }
}

function nextTurn() {
  gameStore.nextTurn()
  sound.play('click')

  if (gameStore.deck.length === 0) {
    currentCard.value = null
    sound.play('win')
    return
  }

  drawNewCard()
  
  // Chế độ lật nhanh
  if (gameStore.autoFlip && currentCard.value) {
    setTimeout(() => {
      handleCardClick()
    }, 450) // Delay để hiệu ứng rơi bài hoàn thành
  }
}

function skipCard() {
  gameStore.skipCurrentCard() // Loại bỏ lá bài cũ
  sound.play('skip')

  if (gameStore.deck.length === 0) {
    currentCard.value = null
    sound.play('win')
    return
  }

  drawNewCard()
  
  if (gameStore.autoFlip && currentCard.value) {
    setTimeout(() => {
      handleCardClick()
    }, 450)
  }
}

async function handleEndGame() {
  showExitModal.value = false
  sound.stopBGM()
  await gameStore.endGame()
  router.replace('/')
}

function confirmExit() {
  sound.play('click')
  showExitModal.value = true
}
</script>

<style scoped>
.deck-area {
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

/* Custom Toggle Switch */
.toggle-checkbox {
  appearance: none;
  width: 48px;
  height: 26px;
  background: rgba(0,0,0,0.5);
  border-radius: 13px;
  position: relative;
  cursor: pointer;
  outline: none;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.5);
}

.toggle-checkbox::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background: linear-gradient(180deg, #ffffff 0%, #d1d5db 100%);
  border-radius: 50%;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 2px 5px rgba(0,0,0,0.3);
}

.toggle-checkbox:checked {
  background: var(--color-brand-primary);
  border-color: var(--color-brand-primary);
  box-shadow: 0 0 15px rgba(255,46,147,0.4), inset 0 2px 4px rgba(0,0,0,0.2);
}

.toggle-checkbox:checked::after {
  left: 24px;
  background: white;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>