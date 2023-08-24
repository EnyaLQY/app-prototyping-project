import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import bootstrap
import BootstrapVueNext from 'bootstrap-vue-next'

// import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)

app.use(router)
app.use(BootstrapVueNext)

import research from './research.json'
import people from './people.json'
import labs from './labs.json'
import items from './items.json'
import meals from './meals.json'
import more from './more.json'
import announcements from './announcements.json'

app.config.globalProperties.research = research;
app.config.globalProperties.people = people;
app.config.globalProperties.labs = labs;
app.config.globalProperties.items = items;
app.config.globalProperties.meals = meals;
app.config.globalProperties.more = more;
app.config.globalProperties.announcements = announcements;

app.config.globalProperties.baseDir = import.meta.env.BASE_URL;

app.mount('#app')
