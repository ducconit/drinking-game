<template>
  <div class="playing-card-container" :class="{ flipped }">
    <div class="playing-card-inner">
      <!-- Mặt sau (Úp) -->
      <div class="card-face card-back glass-panel flex flex-col items-center justify-center relative overflow-hidden">
        <!-- Holographic Sheen Overlay -->
        <div class="holo-sheen"></div>
        <div class="text-7xl mb-6 filter drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] animate-float">🍻</div>
        <h3 class="text-3xl font-black text-glow tracking-widest uppercase">Vòng Số Phận</h3>
        
        <div class="absolute bottom-10 px-6 py-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          <p class="text-xs font-bold text-gray-300 tracking-[0.2em] uppercase">Chạm để lật</p>
        </div>
      </div>
      
      <!-- Mặt trước (Ngửa) -->
      <div class="card-face card-front glass-panel flex flex-col p-8 text-center justify-between relative overflow-hidden" v-if="card">
        <!-- Holographic Sheen Overlay -->
        <div class="holo-sheen delay-300"></div>
        
        <div class="tags-row flex justify-center flex-wrap gap-2 mb-6 z-10">
          <span 
            v-for="tag in card.tags" 
            :key="tag" 
            class="badge text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-[var(--color-brand-primary)]/20 text-[var(--color-brand-primary)] border border-[var(--color-brand-primary)]/50 shadow-[0_0_15px_rgba(255,46,147,0.3)]"
          >
            {{ tag }}
          </span>
        </div>
        
        <div class="flex-1 flex items-center justify-center z-10">
          <h2 class="text-2xl md:text-[1.75rem] font-extrabold leading-snug text-gradient">
            {{ card.content }}
          </h2>
        </div>

        <img v-if="card.image" :src="card.image" class="w-32 h-32 object-contain mx-auto mt-6 filter drop-shadow-2xl z-10" alt="Card Image" />
        
        <!-- Decorative Premium Border -->
        <div class="absolute inset-4 border-2 border-white/5 rounded-[1.25rem] pointer-events-none"></div>
        <div class="absolute inset-[18px] border border-[var(--color-brand-primary)]/20 rounded-[1.1rem] pointer-events-none"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CardModel } from '../data/cards'

defineProps<{
  card: CardModel | null
  flipped: boolean
}>()
</script>

<style scoped>
.playing-card-container {
  width: 100%;
  max-width: 320px;
  aspect-ratio: 2.5 / 3.8;
  perspective: 2000px; /* Sâu hơn để tạo hiệu ứng 3D mạnh hơn */
  cursor: pointer;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .playing-card-container {
    max-width: 360px;
  }
}

.playing-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-style: preserve-3d;
}

.playing-card-container.flipped .playing-card-inner {
  transform: rotateY(180deg) scale(1.05); /* Zoom nhẹ khi lật */
}

/* Hover effect 3D mượt mà */
.playing-card-container:not(.flipped):hover .playing-card-inner {
  transform: translateY(-12px) rotateX(8deg) rotateY(-8deg);
  box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(255, 46, 147, 0.2);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 2rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.15);
  background-color: var(--color-surface-base);
}

.card-back {
  background: linear-gradient(145deg, #16162c 0%, #0a0a14 100%);
  /* Custom Pro Max Pattern */
  background-image: 
    radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
    radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 24px 24px, 12px 12px;
  background-position: 0 0, 12px 12px;
}

.card-front {
  background: linear-gradient(145deg, #1e1e36 0%, #0d0d1a 100%);
  transform: rotateY(180deg);
}

/* Holographic Sheen Effect */
.holo-sheen {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(
    115deg, 
    transparent 20%, 
    rgba(255,255,255,0.1) 30%, 
    rgba(255, 255, 255, 0.4) 45%, 
    rgba(255,255,255,0.1) 60%, 
    transparent 70%
  );
  opacity: 0.3;
  mix-blend-mode: color-dodge;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(-100%) translateY(-100%);
  pointer-events: none;
  z-index: 5;
}

.playing-card-container:hover .holo-sheen {
  transform: translateX(100%) translateY(100%);
  transition: transform 1.5s ease-in-out;
}
</style>