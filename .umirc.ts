import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {},
  locale: { antd: true },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/products', component: '@/pages/products' },
    { path: '/products/detail', component: '@/pages/products/detail' },
    { path: '/inventory', component: '@/pages/inventory' },
    { path: '/inventory/detail', component: '@/pages/inventory/detail' },
  ],
});
