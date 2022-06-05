<template>
  <header>
    <h3>{{ msg }}</h3>
  </header>

  <div>
    <product-card 
 
      v-for="product in products"
      :key="product.name"
      :product="product" 
      @buy-now-clicked="buyNow"
      @add-to-cart-clicked="addToCart"
    
    >

    </product-card>
  </div>

</template>

<script>
import ProductCard from "./ProductCard.vue";
export default {
  data(){
    return {
      msg: "Welcome to  Vue 3 Bangla Tutorial",
      products: [{
        name: "Apple Iphone 12 Pro",
        thumbnail:"https://static.toiimg.com/thumb/resizemode-4,msid-79729978,imgsize-200,width-1200/79729978.jpg",
        price: "12600"
      },
      {
        name: "Apple Iphone 12 Pro",
        thumbnail:"https://static.toiimg.com/thumb/resizemode-4,msid-79729978,imgsize-200,width-1200/79729978.jpg",
        price: "12600"
      },
    {
        name: "Apple Iphone 12 Pro",
        thumbnail:"https://static.toiimg.com/thumb/resizemode-4,msid-79729978,imgsize-200,width-1200/79729978.jpg",
        price: "12600"
      }]
    };
  },
  methods:{
    buyNow(product){
      console.log(product);
    },
    addToCart(){
      console.log("add to cart clicked...");
    }
  }, 
  components: {
    ProductCard
  }
}
</script>