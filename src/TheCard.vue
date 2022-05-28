<template>
  <div class="the-card">
    <div class="the-card_title">
      {{ cardTitle }}
    </div>
    <div class="the-card_body">
      <slot>b</slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cardTitle"],
};
</script>

<style>
.the-card {
  width: 200px;
  border: 1px solid #006f88;
  min-height: 200px;
  margin: 22px;
}
.the-card_title {
  background: #167db1;
  padding: 5px 11px;
  color: #fff;
}
.the-card_body {
  padding: 11px;
}
.the-card_body img {
  height: 11px;
}
.list-style{
    list-style:number;
}
</style>
