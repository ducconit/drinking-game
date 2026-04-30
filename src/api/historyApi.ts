import { historyDB, delay } from './config'
import type { CardTag } from '../data/cards'

export interface GameHistory {
  id?: string
  date: string
  mode: 'anonymous' | 'named'
  players: string[]
  tagsPlayed: CardTag[]
  cardsDrawnCount: number
  durationMs?: number
}

export const historyApi = {
  /**
   * API giả lập: Lưu lịch sử ván chơi
   */
  async saveHistory(history: Omit<GameHistory, 'id'>): Promise<void> {
    await delay(150) // fake network
    const id = Date.now().toString()
    // Loại bỏ hoàn toàn Proxy của Vue để tránh lỗi DataCloneError khi lưu vào IndexedDB
    const pureHistory = JSON.parse(JSON.stringify({ ...history, id }))
    await historyDB.setItem(id, pureHistory)
    console.log('[API/history] Đã lưu lịch sử chơi.')
  },

  /**
   * API giả lập: Lấy danh sách lịch sử
   */
  async getAllHistory(): Promise<GameHistory[]> {
    await delay(300) // fake network
    const histories: GameHistory[] = []
    await historyDB.iterate((value: GameHistory) => {
      histories.push(value)
    })
    
    // Sắp xếp mới nhất lên đầu
    return histories.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }
}