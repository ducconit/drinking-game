<template>
  <div class="help-view container min-h-screen py-10 flex flex-col max-w-2xl mx-auto px-4 md:px-8 relative">
    <!-- Ambient Background Elements -->
    <div class="fixed top-[-10%] right-[-20%] w-[50%] h-[50%] rounded-full bg-[var(--color-brand-primary)] opacity-5 blur-[120px] pointer-events-none"></div>

    <!-- Header -->
    <header class="flex justify-between items-center mb-10 relative z-10">
      <button class="btn btn-secondary !py-2 !px-4 text-sm tracking-widest uppercase border-white/20" @click="router.push('/')">
        🔙 Quay lại
      </button>
      <h1 class="text-2xl font-black text-gradient uppercase tracking-widest">Hướng Dẫn</h1>
      <div class="w-24"></div> <!-- spacer -->
    </header>

    <div class="space-y-8 pb-10 relative z-10">
      
      <!-- Section: Giới thiệu -->
      <section class="glass-panel p-6 md:p-8 animate-fade-in-up">
        <h2 class="text-xl font-bold mb-4 text-brand-primary flex items-center gap-2">
          <span>✨</span> Giới thiệu
        </h2>
        <p class="text-gray-300 leading-relaxed text-sm md:text-base">
          <strong class="text-white text-lg">Vòng Số Phận</strong> là tựa game Drinking Card Game dành cho những buổi party cháy máy. 
          Không cần bộ bài vật lý, mọi thứ đã được số hóa hoàn hảo. 
          Luật chơi do chính những lá bài ngẫu nhiên định đoạt — nơi nhân phẩm lên ngôi và tình bạn (có thể) rạn nứt!
        </p>
      </section>

      <!-- Section: Cách chơi -->
      <section class="glass-panel p-6 md:p-8 animate-fade-in-up" style="animation-delay: 0.1s">
        <h2 class="text-xl font-bold mb-4 text-brand-secondary flex items-center gap-2">
          <span>🎮</span> Cách chơi
        </h2>
        <ol class="list-decimal pl-5 space-y-4 text-gray-300 leading-relaxed marker:text-brand-secondary marker:font-bold">
          <li><strong>Chọn Chế độ:</strong> 
            <ul class="list-disc pl-5 mt-2 space-y-2 text-sm border-l-2 border-brand-secondary/30 ml-2">
              <li><span class="text-white font-bold">Ẩn danh:</span> Bốc bài tự do, ai bị chỉ định hoặc tự nguyện thì người đó bốc.</li>
              <li><span class="text-white font-bold">Ghi tên:</span> Lần lượt từng người chơi sẽ được gọi tên lên "thớt" một cách công bằng.</li>
            </ul>
          </li>
          <li><strong>Chọn Loại Bài (Tags):</strong> Tuỳ thuộc vào độ "sát phạt" của nhóm, bạn có thể tắt/bật các bộ bài như 18+, Thử thách, Sự thật... để phù hợp với hoàn cảnh.</li>
          <li><strong>Bắt đầu:</strong> Lần lượt chạm vào lá bài để lật. Phải thực hiện đúng yêu cầu ghi trên bài, nếu không sẽ phải chịu phạt (tuỳ luật bàn nhậu tự đặt ra).</li>
        </ol>
      </section>

      <!-- Section: Ý nghĩa các thẻ bài -->
      <section class="glass-panel p-6 md:p-8 animate-fade-in-up" style="animation-delay: 0.2s">
        <h2 class="text-xl font-bold mb-6 text-brand-tertiary flex items-center gap-2">
          <span>🏷️</span> Ý nghĩa thẻ bài
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div 
            v-for="tag in TAGS_AVAILABLE" 
            :key="tag.id"
            class="flex items-start gap-3 bg-black/40 p-4 rounded-xl border border-white/5 hover:border-white/20 transition-colors"
          >
            <span class="text-3xl filter drop-shadow-md">{{ tag.emoji }}</span>
            <div>
              <h3 class="font-bold text-sm tracking-wider uppercase mb-1" :style="{ color: tag.color }">{{ tag.label }}</h3>
              <p class="text-xs text-gray-400 leading-relaxed">{{ getTagDescription(tag.id) }}</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { TAGS_AVAILABLE } from '../data/cards'

const router = useRouter()

function getTagDescription(id: string) {
  const descriptions: Record<string, string> = {
    '18+': 'Nội dung người lớn, nhạy cảm. Chỉ dành cho bàn nhậu bạo dạn.',
    'Thật': 'Khai thật hoặc tự giác uống phạt. Cấm nói dối.',
    'Thách': 'Bắt buộc thực hiện hành động tréo ngoe do hệ thống yêu cầu.',
    'Chưa bao giờ': 'Trò chơi kinh điển Never Have I Ever. Ai làm rồi thì uống.',
    'Đã từng': 'Trạng thái khai thật. Ai đã từng làm một hành động nào đó trong quá khứ (VD: Đã từng ăn trộm ngô) thì phải tự giác uống phạt.',
    'Bắt buộc': 'Lệnh cưỡng chế. Không làm thì dập mâm.',
    'Bùa': 'Vũ khí bí mật, có thể giữ lại để phản đòn hoặc tự cứu mình.',
    'Miễn trừ': 'Tấm kim bài miễn chết cho 1 hình phạt bất kỳ.',
    'Tương tác': 'Thử thách cần kéo thêm người khác trong bàn cùng chịu trận.',
    'Giải trí': 'Những câu hỏi tấu hài, khuấy động không khí.'
  }
  return descriptions[id] || 'Nội dung ngẫu nhiên.'
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