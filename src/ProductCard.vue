 <template>
    <div class="contact-details">
        <div class="product-card">
            <div class="product-card__title">
                {{ product.name }}
            </div>

            <div class="product-card__body">
                <img :src="product.thumbnail" alt="">
                <p> $ {{ product.price }}</p>
            </div>

            <div class="product-card__footer">
              <button class="btn" @click="handlebuyClickNow">Buy Now</button> &nbsp;
              <button class="btn" @click="addToCartClicked">Add to Card</button>
            </div>

        </div>
    </div>
        
</template>

<script>
  export default {
      emits:{
          'buy-now-clicked': function(data){
              if(!data){
                  console.log("data missing...");
                  return false;
              }else{
                  return true;
              }
          }
      },
      props: {product: {type:Object, default:()=>({})}},
      methods:{
          handlebuyClickNow(){
              this.$emit("buy-now-clicked");
          },
          addToCartClicked(){
              this.$emit("add-to-cart-clicked");
          }
      }
 }
</script>


<style scoped>
   .product-card{
      width: 300px;
      border: 1px solid gray;
      min-height: 100px;
      margin:22px auto; 
   }
   .product-card__title{
       background: #167db1;
       padding: 5px 11px;
       color: #fff;

   }
   .product-card__body{
       padding: 11px;
       text-align: center;
   }
   .product-card__body img{
       height: 111px;
   }
   .btn{
       margin: 2px ;
       padding: 1px;
   }
</style>