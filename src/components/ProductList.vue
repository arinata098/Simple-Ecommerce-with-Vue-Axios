<template>
  <div class="d-flex align-items-stretch flex-wrap">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    ></ProductCard>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ProductCard from "../components/ProductCard.vue";
export default {
  components: {
    ProductCard,
  },

  computed: {
    ...mapState(["products"]),

    // products() {
    //   return this.$store.state.products;
    // },
  },

  mounted() {
    this.getProducts();
    // this.$store.dispatch("getProducts");
  },

  methods: {
    ...mapActions(["getProducts"]),
  },
};
</script>

<style></style>
