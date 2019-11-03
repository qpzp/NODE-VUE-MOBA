<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100" src="../assets/images/85d0686b02abd3488ba227bc82fded66.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/34e5d65cf27b54cb62bfb746df2045b0.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/9d03cadf64aa654eecb27b068b0104f5.jpeg" alt="">
      </swiper-slide>
      <div
        class="swiper-pagination pagination-home text-right px-3 pb-2"
        slot="pagination"
      ></div>
    </swiper>
    <!--    end of swiper-->
    <div class="nav-icons text-center bg-white mt-3 pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!--    end of nav-icons-->

    <!--    <m-card icon="menu" title="新闻资讯">-->
    <!--      <div class="nav jc-between">-->
    <!--        <div class="nav-item active">-->
    <!--          <div class="nav-link">热门</div>-->
    <!--        </div>-->
    <!--        <div class="nav-item">-->
    <!--          <div class="nav-link">新闻</div>-->
    <!--        </div>-->
    <!--        <div class="nav-item">-->
    <!--          <div class="nav-link">公告</div>-->
    <!--        </div>-->
    <!--        <div class="nav-item">-->
    <!--          <div class="nav-link">活动</div>-->
    <!--        </div>-->
    <!--        <div class="nav-item">-->
    <!--          <div class="nav-link">赛事</div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="pt-3">-->
    <!--        <swiper>-->
    <!--          <swiper-slide v-for="m in 5" :key="m">-->
    <!--            <div class="py-2" v-for="n in 5" :key="n">-->
    <!--              <span>[新闻]</span>-->
    <!--              <span>|</span>-->
    <!--              <span>11月1日“演员”惩罚名单</span>-->
    <!--              <span>11/01</span>-->
    <!--            </div>-->
    <!--          </swiper-slide>-->
    <!--        </swiper>-->
    <!--      </div>-->
    <!--    </m-card>-->

    <m-list-card icon="menu" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <router-link
          tag="div"
          :to="`/articles/${news._id}`"
          class="py-2 fs-lg d-flex"
          v-for="(news,i) in category.newsList"
          :key="i">
          <span class="text-info">{{news.categoryName}}</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{news.title}}</span>
          <span class="text-grey fs-sm">{{news.createdAt | date}}</span>
        </router-link>
      </template>
    </m-list-card>

    <m-list-card icon="helmet-battle" title="英雄列表" :categories="heroCats">
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin: 0 -0.5rem">
          <router-link
            tag="div"
            :to="`/heroes/${hero._id}`"
            class="p-2 text-center"
            style="width: 20%"
            v-for="(hero,i) in category.heroList"
            :key="i">
            <img class="w-100" :src="hero.avatar" alt="">
            <div>{{hero.name}}</div>
          </router-link>
        </div>
      </template>
    </m-list-card>

    <p>lorem</p>
    <p>lorem</p>
    <p>lorem</p>
    <p>lorem</p>
    <p>lorem</p>
    <p>lorem</p>
    <p>lorem</p>
    <p>lorem</p>
    <p>lorem</p>
    <p>lorem</p>
    <p>lorem</p>
    <p>lorem</p>
    <p>lorem</p>

  </div>
</template>

<script>
  import dayjs from 'dayjs';

  export default {
    filters: {
      date(val) {
        return dayjs(val).format('MM/DD');
      }
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.pagination-home'
          }
        },
        newsCats: [
          // {
          //   name: '新闻',
          //   newsList: new Array(5).fill({}).map(v => (
          //     {
          //       categoryName: '新闻',
          //       title: '11月1日“演员”惩罚名单',
          //       date: '11/01'
          //     }
          //   ))
          // },
        ],
        heroCats: [],
      };
    },
    methods: {
      async fetchNewsCats() {
        const res = await this.$http.get('news/list');
        this.newsCats = res.data;
      },

      async fetchHeroCats() {
        const res = await this.$http.get('heroes/list');
        this.heroCats = res.data;
      }
    },

    created() {
      this.fetchNewsCats();
      this.fetchHeroCats();
    }
  };
</script>

<style lang="scss">
  @import "../assets/scss/variables";

  .pagination-home {
    .swiper-pagination-bullet {
      opacity: 1;
      border-radius: 0.1538rem;
      background: map_get($colors, 'white');

      &.swiper-pagination-bullet-active {
        background: map_get($colors, 'info');
      }
    }
  }

  .nav-icons {
    border-top: 1px solid $border-color;
    border-bottom: 1px solid $border-color;

    .nav-item {
      width: 25%;
      border-right: 1px solid $border-color;

      &:nth-child(4n) {
        border-right: none;
      }
    }
  }
</style>
