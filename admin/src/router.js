import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Main from './views/Main.vue';

//分类
import CategoryEdit from './views/CategoryEdit.vue';
import CategoryList from './views/CategoryList.vue';

//物品
import ItemEdit from './views/ItemEdit.vue';
import ItemList from './views/ItemList.vue';

//英雄
import HeroEdit from './views/HeroEdit.vue';
import HeroList from './views/HeroList.vue';

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

        //英雄
        {path: '/heroes/create', component: HeroEdit},
        {path: '/heroes/edit/:id', component: HeroEdit, props: true},
        {path: '/heroes/list', component: HeroList},
      ]
    },
  ]
});
