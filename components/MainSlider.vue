<template>
  <v-container style="width: 940px; height: 400px">
    <v-carousel cycle
                hide-delimiters
                :show-arrows="false"
                height="400">
      <v-carousel-item class="image"
                       v-for="(slide,i) in slides"
                       :key="i"
                       :src="slide.src">

      </v-carousel-item>
    </v-carousel>

  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        slides: [
          {
            src: 'https://www.modamuzik.com/custom/banners/bnt76405743256.jpg',
          },
           {
            src: 'https://www.modamuzik.com/custom/banners/bnt84855743268.jpg',
          },

        ],
      }
    },
  }
</script>

<style scoped>
  .image {
    height: 400px;
  }

</style>
