<template>
  <div id="app">
  	<app-background/>
    <router-view/>
  </div>
</template>

<script>
import appBackground from './components/Background.vue'

export default {
  name: 'app',
  components: {
    appBackground
  }
}
</script>

<style>
</style>
