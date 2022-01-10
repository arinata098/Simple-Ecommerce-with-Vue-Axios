<template>
  <div class="notification-list">
    <NotificationMessage></NotificationMessage>
  </div>
</template>

<script>
import NotificationMessage from "./NotifiactionMessage.vue";
export default {
  components: {
    NotificationMessage,
  },
};
</script>

<style>
.notification-list {
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 15px;
  width: 320px;
}
</style>
