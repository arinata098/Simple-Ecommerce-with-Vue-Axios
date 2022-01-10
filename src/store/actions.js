import Product from "../apis/Product";
import Cart from "../apis/Cart";

export const getProducts = ({ commit }) => {
  // axios.get("http://127.0.0.1:8000/api/products")
  Product.all().then((response) => {
    commit("SET_PRODUCTS", response.data);
  });
};

export const getProduct = ({ commit }, productId) => {
  // axios.get(`http://127.0.0.1:8000/api/products/${productId}`)
  Product.show(productId).then((response) => {
    commit("SET_PRODUCT", response.data);
  });
};

export const addProductToCart = ({ commit }, { product, quantity }) => {
  commit("ADD_TO_CART", { product, quantity });

  Cart.store({
    product_id: product.id,
    quantity,
  });
  // axios.post("http://127.0.0.1:8000/api/cart", {
  //   product_id: product.id,
  //   quantity,
  // });
};

export const getCartItems = ({ commit }) => {
  // axios.get("http://127.0.0.1:8000/api/cart")
  Cart.all().then((response) => {
    commit("SET_CART", response.data);
  });
};

export const removeProductFromCart = ({ commit }, product) => {
  commit("REMOVE_PRODUCT_FROM_CART", product);

  Cart.delete(product.id);
  // axios.delete(`http://127.0.0.1:8000/api/cart/${product.id}`);
};

export const clearCartItem = ({ commit }) => {
  commit("CLEAR_CART_ITEM");

  Cart.deleteAll();
  // axios.delete(`http://127.0.0.1:8000/api/cart`);
};
