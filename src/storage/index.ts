import { EncryptStorage } from 'encrypt-storage'

// Khởi tạo engine mã hóa, secret key nên được bảo mật trong thực tế
export const encryptStorage = new EncryptStorage('super-secret-drinking-game-key-2026', {
  prefix: '@drinking_game'
})

// Adapter để pinia-plugin-persistedstate có thể sử dụng encrypt-storage
export const secureStorage = {
  getItem: (key: string) => {
    const value = encryptStorage.getItem(key)
    if (value === null || value === undefined) return null
    // encrypt-storage automatically parses JSON, but pinia-plugin-persistedstate expects a string
    return typeof value === 'string' ? value : JSON.stringify(value)
  },
  setItem: (key: string, value: string) => {
    encryptStorage.setItem(key, value)
  },
}