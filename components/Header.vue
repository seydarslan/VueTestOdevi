<template>
  <div>
    <v-container>
      <v-row style="width: 1200px; height: 100px">
        <v-col cols="4">
            <NuxtLink to="/"> <img
              max-width="328"
              height="90"
              src="~/assets/logo.png" /> </NuxtLink>

        </v-col>
        <v-col cols="6">
          <v-spacer style="padding-bottom: 5px; padding-top: 5px">

            <div class="yazilar">
              <a style="color: black">Hakkımızda</a>
              <a style="color: black; margin-left: 20px">S.S.S</a>
              <a style="color: black; margin-left: 20px;margin-right: 49px"> İletişim</a>
                <NuxtLink to="/SignIn" style="color: black">Giris Yap</NuxtLink>

              <NuxtLink to="/login" style="color: black; margin-left: 15px">Kayıt Ol</NuxtLink>
              <a style="color: black; margin-left: 15px"> Şifre Hatırlat</a>


            </div>


          </v-spacer>

          <v-toolbar
            max-height="40" max-width="470">
            <v-spacer></v-spacer>

            <v-icon style="padding-bottom:30px">mdi-magnify</v-icon>


          </v-toolbar>


        </v-col>

        <v-col class="yazilar2" style="padding-right: 100px">
          <NuxtLink to="/ShopingCard" style="color: black"> Sepetim(0)</NuxtLink>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped>
  .NuxtLink {
    color: black;
  }
  .yazilar {
    font-family: "Roboto", sans-serif;
    font-size: 13px;
  }

  .yazilar2 {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
  }

</style>
