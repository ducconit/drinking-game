import { createRouter, createWebHashHistory } from 'vue-router'
import SetupView from '../views/SetupView.vue'
import GameView from '../views/GameView.vue'
import HistoryView from '../views/HistoryView.vue'
import HelpView from '../views/HelpView.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: SetupView },
    { path: '/game', component: GameView },
    { path: '/history', component: HistoryView },
    { path: '/help', component: HelpView },
  ],
})
