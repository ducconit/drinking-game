import { ref } from 'vue'
import { Howl } from 'howler'

const _sounds: Record<string, Howl> = {}
let bgmInstance: Howl | null = null

function getOrCreate(key: string, src: string, volume = 1, loop = false): Howl {
  if (!_sounds[key]) {
    _sounds[key] = new Howl({ src: [src], volume, preload: true, loop })
  }
  return _sounds[key]
}

export function useSound() {
  const isMuted = ref(false)

  // Map to the synthesized and downloaded audio files in public/sounds
  const map: Record<string, { src: string, vol: number }> = {
    click: { src: '/sounds/click.wav', vol: 0.7 },
    flip: { src: '/sounds/flip.wav', vol: 0.8 },
    skip: { src: '/sounds/skip.wav', vol: 0.6 },
    win: { src: '/sounds/win.wav', vol: 1.0 },
  }

  function play(key: 'click' | 'flip' | 'skip' | 'win') {
    if (isMuted.value) return
    try {
      const config = map[key]
      getOrCreate(key, config.src, config.vol).play()
    } catch {
      // Silent fail
    }
  }
  
  function playBGM() {
    if (isMuted.value) return
    try {
      if (!bgmInstance) {
        bgmInstance = getOrCreate('bgm', '/sounds/bgm.mp3', 0.4, true)
      }
      if (!bgmInstance.playing()) {
        bgmInstance.play()
      }
    } catch {}
  }
  
  function stopBGM() {
    if (bgmInstance) {
      bgmInstance.pause()
    }
  }

  function toggleMute() {
    isMuted.value = !isMuted.value
    if (isMuted.value) {
      stopBGM()
      // Stop all playing sounds
      Object.values(_sounds).forEach(s => s.stop())
    } else {
      playBGM()
    }
  }

  return { play, playBGM, stopBGM, isMuted, toggleMute }
}
