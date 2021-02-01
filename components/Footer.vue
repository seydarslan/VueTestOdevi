<template>
  <v-footer
    color="primary lighten-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
       <v-col>
            <NuxtLink to="/"> <img
              max-width="328"
              height="90"
              src="~/assets/logo.png" /> </NuxtLink>

        </v-col>

      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>ModaMuzik</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
  export default {
    name:'Footer',
    data: () => ({
      links: [
        'KATEGORİLER',
        'HIZLI ERİŞİM',
        'ÖNEMLİ BİLGİLER'
      ],
    }),
  }
</script>