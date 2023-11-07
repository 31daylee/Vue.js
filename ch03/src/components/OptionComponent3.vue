<script>
export default {
  name: "OptionComponent3",
  computed: {
    totPrice: function () {
      return this.price * this.count;
    },
  },
  data() {
    return {
      price: 1000,
      count: 1,
    };
  },
};
</script>
<template>
  <h4>computed 옵션</h4>
  <div>
    <!--input 태그는 양방향 바인딩(v-model) 떠올리기 cf) 단방향 (v-bind)-->
    <input type="number" v-model="price" />원
    <input type="number" v-model="count" />개수
    <p>금액 :{{ totPrice }}원</p>
  </div>
</template>
<style scoped></style>
