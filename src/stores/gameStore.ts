import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { cardsApi } from '../api/cardsApi'
import { historyApi } from '../api/historyApi'
import { secureStorage } from '../storage'
import { TAGS_AVAILABLE } from '../data/cards'
import type { CardModel, CardTag } from '../data/cards'

export type GamePhase = 'SETUP' | 'IN_GAME' | 'END_GAME'
export type GameMode = 'anonymous' | 'named'

export interface Player {
  id: string
  name: string
}

export const useGameStore = defineStore('drinking-game', () => {
  const phase = ref<GamePhase>('SETUP')
  const mode = ref<GameMode>('anonymous')
  const players = ref<Player[]>([])
  const currentPlayerIndex = ref(0)
  
  const selectedTags = ref<CardTag[]>(TAGS_AVAILABLE.map(t => t.id))
  const deck = ref<CardModel[]>([])
  const drawnCards = ref<CardModel[]>([])
  const startTime = ref<number>(0)
  
  const currentCard = ref<CardModel | null>(null)
  const isFlipped = ref(false)
  const isLocked = ref(false)
  
  const autoFlip = ref(true)

  const currentPlayer = computed(() => {
    if (mode.value === 'anonymous' || players.value.length === 0) return null
    return players.value[currentPlayerIndex.value]
  })

  const canStart = computed(() => {
    const hasValidPlayers = mode.value === 'anonymous' || players.value.length > 0
    const hasTags = selectedTags.value.length > 0
    return hasValidPlayers && hasTags
  })

  function addPlayer(name: string) {
    if (!name.trim()) return
    players.value.push({ id: crypto.randomUUID(), name: name.trim() })
  }

  function removePlayer(id: string) {
    players.value = players.value.filter(p => p.id !== id)
    if (currentPlayerIndex.value >= players.value.length) {
      currentPlayerIndex.value = 0
    }
  }

  function toggleTag(tag: CardTag) {
    const idx = selectedTags.value.indexOf(tag)
    if (idx > -1) {
      selectedTags.value.splice(idx, 1)
    } else {
      selectedTags.value.push(tag)
    }
  }

  async function startGame() {
    if (!canStart.value) return
    
    // Gọi API để lấy bài
    const allCards = await cardsApi.getCardsByTags(selectedTags.value)

    // Xào bài
    for (let i = allCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allCards[i], allCards[j]] = [allCards[j], allCards[i]];
    }

    deck.value = allCards
    drawnCards.value = []
    currentPlayerIndex.value = 0
    currentCard.value = null
    isFlipped.value = false
    isLocked.value = false
    startTime.value = Date.now()
    phase.value = 'IN_GAME'
  }

  function drawCard(): CardModel | null {
    if (deck.value.length === 0) {
      currentCard.value = null
      return null
    }
    const card = deck.value.pop()!
    drawnCards.value.push(card)
    currentCard.value = card
    isFlipped.value = false
    return card
  }

  function nextTurn() {
    if (mode.value === 'named' && players.value.length > 0) {
      currentPlayerIndex.value = (currentPlayerIndex.value + 1) % players.value.length
    }
  }

  function skipCurrentCard() {
    if (drawnCards.value.length > 0) {
      drawnCards.value.pop()
    }
  }

  async function endGame() {
    const durationMs = Date.now() - startTime.value

    // Lưu lịch sử qua API
    await historyApi.saveHistory({
      date: new Date().toISOString(),
      mode: mode.value,
      players: players.value.map(p => p.name),
      tagsPlayed: [...selectedTags.value],
      cardsDrawnCount: drawnCards.value.length,
      durationMs
    })
    
    resetGame()
  }

  function resetGame() {
    deck.value = []
    drawnCards.value = []
    currentPlayerIndex.value = 0
    currentCard.value = null
    isFlipped.value = false
    isLocked.value = false
    phase.value = 'SETUP'
  }

  return {
    phase,
    mode,
    players,
    currentPlayerIndex,
    selectedTags,
    deck,
    drawnCards,
    currentCard,
    isFlipped,
    isLocked,
    autoFlip,
    currentPlayer,
    canStart,
    addPlayer,
    removePlayer,
    toggleTag,
    startGame,
    drawCard,
    nextTurn,
    skipCurrentCard,
    endGame,
    resetGame
  }
}, {
  persist: {
    pick: ['phase', 'mode', 'players', 'currentPlayerIndex', 'selectedTags', 'deck', 'drawnCards', 'currentCard', 'isFlipped', 'isLocked', 'autoFlip'],
    storage: secureStorage // Sử dụng local storage đã mã hóa
  }
})