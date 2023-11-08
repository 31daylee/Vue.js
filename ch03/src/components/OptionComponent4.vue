<script>
export default {
  name: "OptionComponent4",
  watch: {
    inputTxt: function () {
      const pos = this.inputTxt.indexOf(this.forbiddenText);

      if (pos >= 0) {
        alert(this.forbiddenText + " 입력 불가 문자");
        this.inputTxt = this.inputTxt.substring(0, pos);
      }
    },
  },

  data() {
    return {
      forbiddenText: "bitch",
      inputTxt: "",
    };
  },
};
</script>
<template>
  <h4>watch 옵션</h4>
  <div>
    <p>금지어 발견 : {{ forbiddenText }}</p>
    <textarea v-model="inputTxt" cols="30" rows="20"></textarea>
  </div>
</template>
<style scoped></style>
