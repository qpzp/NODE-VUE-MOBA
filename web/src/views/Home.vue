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
  </div>
</template>

<script>

  export default {
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.pagination-home'
          }
        },
      };
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
</style>
