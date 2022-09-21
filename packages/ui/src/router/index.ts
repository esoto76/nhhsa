import { createRouter, createWebHistory } from 'vue-router';
import routes from '~pages';

console.dir(routes);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
