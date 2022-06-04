<template>
  <div class="the-card">
    <div class="the-card__title">
     {{ CardTitle }}
    </div>
    <div class="the-card__body">
      <slot>
        Default Card content
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    props:["CardTitle"]
  }
</script>


<style>
.the-card {
  width: 200px;
  border: 1px solid #006f88;
  min-height: 200px;
  margin: 22px;
}
.the-card__title {
  background: #167db1;
  padding: 5px 11px;
  color: #fff;
  text-align: center;
}
.the-card__body {
  padding: 11px;
}
.the-card_body img {
  height: 11px;
}
.list-style{
    list-style:number;
}
</style>
