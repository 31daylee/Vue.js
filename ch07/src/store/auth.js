import { defineStore } from "pinia";
import axios from "axios";

// 사용자 인증처리 전역저장소
export const useAuthStore = defineStore("auth", {
  // 저장소에 저장되는 상태값이 영속화가 됨 -> pinia-persistedstate 플러그인 설치 필요
  persist: true,

  state: () => {
    return {
      user: null,
      accessToken: null,
      refreshToken: null,
    };
  },
  actions: {
    setUser(user) {
      this.user = user;
    },
    setAccessToken(accessToken) {
      this.accessToken = accessToken;
    },
    setRefreshToken(refreshToken) {
      this.refreshToken = refreshToken;
    },
    async login(user) {
      try {
        const response = await axios.post(
          "http://localhost:8080/Ch11/login",
          user
        );
        console.log("login...1");
        // 전역 스토어 상태값 업데이트
        this.user = response.data.user;
        this.accessToken = response.data.accessToken;
        this.refreshToken = response.data.refreshToken;

        // 로컬스토리지 저장
        console.log("login...2: " + accessToken);
        console.log("login...3: " + refreshToken);
        return response;
      } catch (err) {
        throw err;
      }
    },

    logout() {
      this.user = null;
      this.accessToken = null;
      this.refreshToken = null;
    },
  },
  getters: {
    getUser: (state) => {
      return state.user;
    },
    getAccessToken: (state) => {
      return state.accessToken;
    },
    getRefreshToken: (state) => {
      return state.refreshToken;
    },
  },
});
