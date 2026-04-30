import { cardsDB, delay } from './config'
import { INITIAL_CARDS } from '../data/cards'
import type { CardModel, CardTag } from '../data/cards'

export const cardsApi = {
  /**
   * API giả lập: Setup dữ liệu ban đầu
   */
  async seedInitialCards(onProgress?: (p: number) => void): Promise<void> {
    const keys = await cardsDB.keys()
    if (keys.length > 0) {
      if (onProgress) onProgress(100)
      return
    }

    if (onProgress) onProgress(10)
    await delay(300) // fake network
    
    if (onProgress) onProgress(45)
    
    // Lưu từng card vào localforage
    for (let i = 0; i < INITIAL_CARDS.length; i++) {
      const card = { ...INITIAL_CARDS[i], id: (i + 1).toString() }
      await cardsDB.setItem(card.id as string, card)
    }
    
    if (onProgress) onProgress(85)
    await delay(300)

    if (onProgress) onProgress(100)
    console.log('[API/cards] Đã import dữ liệu thẻ bài thành công.')
  },

  /**
   * API giả lập: Lấy thẻ bài theo tag
   */
  async getCardsByTags(tags: CardTag[]): Promise<CardModel[]> {
    await delay(200) // fake network
    
    const allCards: CardModel[] = []
    await cardsDB.iterate((value: CardModel) => {
      allCards.push(value)
    })

    if (!tags || tags.length === 0) {
      return allCards
    }

    // Lọc những card có ít nhất 1 tag trùng với tags được chọn
    return allCards.filter(card => 
      card.tags.some(tag => tags.includes(tag))
    )
  }
}