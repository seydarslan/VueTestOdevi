<template>
  <div>
  <Header />
    <Menu />
  <Nuxt />

  </div>
</template>

<script>
  import Header from '~/components/Header'
  import Menu from '~/components/Menu'
  export default {
    name: 'default',
    components: { Menu,Header }
  }
</script>

<style scoped>

</style>
