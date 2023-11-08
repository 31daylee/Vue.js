<script>
import EmitComponent1 from "./components/EmitComponent1.vue";
import LifeComponent from "./components/LifeComponent.vue";
import MyComponent1 from "./components/MyComponent1.vue";
import MyComponent2 from "./components/MyComponent2.vue";
import MyComponent3 from "./components/MyComponent3.vue";
import OptionComponent1 from "./components/OptionComponent1.vue";
import OptionComponent2 from "./components/OptionComponent2.vue";
import OptionComponent3 from "./components/OptionComponent3.vue";
import OptionComponent4 from "./components/OptionComponent4.vue";
import PropsComponent1 from "./components/PropsComponent1.vue";
import PropsComponent2 from "./components/PropsComponent2.vue";
import PropsComponent3 from "./components/PropsComponent3.vue";
import PropsComponent4 from "./components/PropsComponent4.vue";

export default {
  name: "App",
  data() {
    return {
      cities: ["서울", "대전", "대구", "부산", "광주"],
      isShow: true,
    };
  },
  methods: {
    emitHandler: function (data) {
      console.log(data.name);
      console.log(data.age);
    },
    btnToggle: function () {
      if (this.isShow) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    },
  },
  components: {
    MyComponent1,
    MyComponent2,
    MyComponent3,
    OptionComponent1,
    OptionComponent2,
    OptionComponent3,
    OptionComponent4,
    PropsComponent1,
    PropsComponent2,
    PropsComponent3,
    PropsComponent4,
    EmitComponent1,
    LifeComponent,
  },
};
</script>

<template>
  <h3>ch03. Component</h3>

  <h4>1. Component</h4>
  <MyComponent1 />
  <!--MyComponent1 에서 작성한 컴포넌트가 삽입 & 자동으로 import 생성 완료-->
  <MyComponent2 />
  <MyComponent3 />

  <h4>2. Options API</h4>
  <OptionComponent1 />
  <OptionComponent2 />
  <OptionComponent3 />
  <OptionComponent4 />

  <h4>3. Component 통신</h4>
  <PropsComponent1 name="김유신" />
  <PropsComponent1 name="김춘추" age="33" />
  <ul>
    <PropsComponent2 v-for="city in cities" v-bind:myCity="city" />
  </ul>
  <PropsComponent3 c3Name="홍길동" c3Age="21" />
  <EmitComponent1 name="홍길동" age="21" @myEmit="emitHandler" />

  <h4>4. Component 생명주기</h4>
  <LifeComponent v-if="isShow" />
  <button @click="btnToggle">토글</button>
</template>

<style scoped></style>
