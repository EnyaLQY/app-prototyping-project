import { createRouter, createWebHistory } from 'vue-router'
import Schedule from '../views/Schedule.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'schedule',
      component: Schedule
    },
    {
      path: '/resources',
      name: 'resources',
      component: () => import('../views/Resources.vue')
    },
    {
      path: '/announcements',
      name: 'announcements',
      component: () => import('../views/Announcements.vue')
    },
    {
      path: '/reimbursement',
      name: 'reimbursement',
      component: () => import('../views/Reimbursement.vue')
    },
    {
    path: '/schedule/:date_key',
      name: 'daily schedule',
      component: () => import('../views/DailySchedule.vue')
    }
  ]
})

export default router
