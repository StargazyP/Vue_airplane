import { createRouter, createWebHistory } from 'vue-router';
import SearchForm from '@/views/SearchForm.vue';
import ResultForm from '@/views/ResultForm.vue';

const routes = [
  {
    path: '/',
    name: 'SearchForm',
    component: SearchForm
  },
  {
    path: '/result',
    name: 'ResultForm',
    component: ResultForm,
    props: route => ({
      schLineType: route.query.schLineType,
      schIOType: route.query.schIOType,
      schAirCode: route.query.schAirCode,
      schStTime: route.query.schStTime,
      schEdTime: route.query.schEdTime
    })
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
