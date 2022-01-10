<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container">
        <div class="nav navbar-nav">
          <router-link to="/" class="nav-item nav-link active"
            >Home</router-link
          >
          <a class="nav-item nav-link" href="#">Product</a>
        </div>
        <div>
          <div class="dropdown open">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="triggerId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{ cartItemCount }} Cart
            </button>
            <!-- stop propagation berguna untuk saat di click modal tidak menghilang -->
            <div @click="$event.stopPropagation()">
              <MiniCart></MiniCart>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import MiniCart from "./MiniCart.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    MiniCart,
  },

  computed: {
    ...mapGetters(["cartItemCount"]),
  },
};
</script>

<style></style>
