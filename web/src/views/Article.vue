<template>
  <div class="page-article">
    <div class="d-flex py-3 px-2 ai-center border-bottom" v-if="model">
      <div class="iconfont icon-back text-blue icon-back"></div>
      <strong class="flex-1 text-ellipsis text-blue pl-2">{{model.title}}</strong>
      <div class="text-grey fs-xs">2019-11-03</div>
    </div>
    <div v-if="model" v-html="model.body" class="px-3 body fs-lg"></div>
    <div v-if="model" class="px-3 border-top py-3">
      <div class="d-flex ai-center">
        <div class="iconfont icon-book"></div>
        <strong class="text-blue fs-lg ml-2">相关资讯</strong>
      </div>
      <div class="pt-2 ">
        <router-link
          class="py-1 text-ellipsis"
          :to="`/articles/${item._id}`"
          tag="div"
          v-for="item in model.related"
          :key="item._id"
        >
          {{item.title}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      id: {required: true}
    },
    watch: {
      id: 'fetch'
    },
    data() {
      return {
        model: null
      };
    },
    methods: {
      async fetch() {
        const res = await this.$http.get(`articles/${this.id}`);
        this.model = res.data;
      }
    },
    created() {
      this.fetch();
    }
  };
</script>

<style lang="scss">
  .page-article {
    .icon-back {
      font-size: 1.6392rem;
    }

    .body {
      img {
        max-width: 100%;
        height: auto;
      }
    }
  }
</style>
