import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './index.css'

import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import Test from './components/Test.vue'
import DetailPage from './pages/DetailPage.vue'
import ListPageVue from './pages/ListPage.vue'

const routes = [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/test', component: Test },
    { path: '/list', component: ListPageVue },
    { path: '/lecturers/:id', name: 'LecturerDetail', component: DetailPage },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
