<template>
  <div
    class="dropdown-menu p-2"
    style="min-width: 320px; right: 0; left: auto"
    aria-labelledby="triggerId"
  >
    <div v-for="item in cart" :key="item.product.id">
      <div class="px-2 d-flex justify-content-between">
        <div>
          <strong>{{ item.product.title }}</strong>
          <br />
          {{ item.quantity }} x ${{ item.product.price }}
        </div>
        <div>
          <a
            href="#"
            class="badge badge-secondary"
            @click.prevent="removeProductFromCart(item.product)"
            >remove</a
          >
        </div>
      </div>
      <hr />
    </div>

    <div class="d-flex justify-content-between">
      <span>Totoal: $ {{ cartTotalPrice }}</span>
      <a href="#" @click.prevent="clearCartItem()">Clear Cart</a>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["cart"]),
    // cart() {
    //   return this.$store.state.cart;
    // },

    ...mapGetters(["cartTotalPrice"]),
    // cartTotalPrice() {
    //   return this.$store.getters.cartTotalPrice;
    // },
  },

  mounted() {
    // this.$store.dispatch("getCartItems");
    this.getCartItems();
  },

  methods: {
    ...mapActions(["removeProductFromCart", "clearCartItem", "getCartItems"]),
    // removeProductFromCart(product) {
    //   this.$store.dispatch("removeProductFromCart", product);
    // },

    // clearCartItem() {
    //   this.$store.dispatch("clearCartItem");
    // },
  },
};
</script>

<style></style>
