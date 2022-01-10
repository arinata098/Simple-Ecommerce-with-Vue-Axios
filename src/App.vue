<template>
  <div id="app">
    <Header></Header>
    <div class="container">
        <router-view></router-view>
    </div>

    <NotifiactionList></NotifiactionList>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import NotifiactionList from "./components/NotificationsList.vue"
export default {
  name: "App",
  components: {
    Header,
    NotifiactionList
  },
};
</script>

<style>

