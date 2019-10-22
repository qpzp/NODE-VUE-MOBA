import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Main from './views/Main.vue';
import CategoryEdit from './views/CategoryEdit.vue';
import CategoryList from './views/CategoryList.vue';
import ItemEdit from './views/ItemEdit.vue';
import ItemList from './views/ItemList.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        //分类
        {path: '/categories/create', component: CategoryEdit},
        {path: '/categories/edit/:id', component: CategoryEdit, props: true},
        {path: '/categories/list', component: CategoryList},

        //物品
        {path: '/items/create', component: ItemEdit},
        {path: '/items/edit/:id', component: ItemEdit, props: true},
        {path: '/items/list', component: ItemList},
      ]
    },
  ]
});
