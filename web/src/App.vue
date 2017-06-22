<template>
  <div id="app">
    <router-view></router-view>
    <spinner v-show="false"></spinner>
  </div>
</template>

<script>
  import spinner from './components/spinner/spinner.vue'
  export default {
    components: {
      spinner
    }
  }
</script>

