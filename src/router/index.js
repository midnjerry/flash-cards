import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView'
import PlayersView from '@/views/PlayersView'
import QuestionsView from '@/views/QuestionsView'
import PlayView from '@/views/PlayView'

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/players",
    name: "Players",
    component: PlayersView,
  },
  {
    path: "/Questions",
    name: "Questions",
    component: QuestionsView,
  },
  {
    path: "/play",
    name: "Play",
    component: PlayView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
