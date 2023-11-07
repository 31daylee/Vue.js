<script>
export default {
  name: "OptionComponent3",

  // 컴포넌트 상태값이 변하면 자동으로 계산해서 출력하는 함수 정의 옵션
  /* computed에서는 기본/익명함수 가능. 다만, 화살표 함수 불가 */
  computed: {
    totPrice: function () {
      return this.price * this.count;
    },
    txtCount: function () {
      return this.text.length;
    },
    remainTxt: function () {
      return 20 - this.text.length;
    },

    colorAlert: function () {
      this.myColor = "green";

      if (this.remainTxt < 15) {
        this.myColor = "orange";
      }

      if (this.remainTxt < 1) {
        this.myColor = "red";
      }

      return this.myColor;
    },
  },
  data() {
    return {
      price: 1000,
      count: 1,
      text: "",
      myColor: "blue",
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

  <div>
    <p>20자 이내로 작성하세요.</p>
    <textarea col="30" rows="10" v-model="text"></textarea>
    <p>글자수 : {{ txtCount }}</p>
    <p v-bind:style="{ color: colorAlert }">남은 글자수 : {{ remainTxt }}</p>
  </div>
</template>
<style scoped></style>
