<template>
  <div class="page-hero" v-if="model">
    <div class="topbar d-flex ai-center topbar bg-black py-2 text-white px-3">
      <img src="../assets/logo.png" alt="" height="30">
      <div class="px-2 flex-1">
        <span class="text-white">王者荣耀</span>
        <span class="ml-2">攻略战</span>
      </div>
      <router-link to="/" tag="div">更多英雄&gt;</router-link>
    </div>
    <div>{{model.name}}</div>
  </div>
</template>

<script>
  export default {
    props: {
      id: {required: true}
    },
    data() {
      return {
        model: null
      };
    },
    methods: {
      async fetch() {
        const res = await this.$http.get(`heroes/${this.id}`);
        this.model = res.data;
      }
    },
    created() {
      this.fetch();
    }
  };
</script>

<style>

</style>
