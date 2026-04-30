import localforage from 'localforage'

// Cấu hình các Instance cho IndexedDB thay vì xài chung 1 table
export const cardsDB = localforage.createInstance({
  name: 'DrinkingGameV2',
  storeName: 'cards',
  description: 'Kho lưu trữ danh sách các thẻ bài'
})

export const historyDB = localforage.createInstance({
  name: 'DrinkingGameV2',
  storeName: 'history',
  description: 'Lịch sử các ván chơi'
})

// Giả lập network delay để mô phỏng Client-Server
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))