<template>
  <div class="container">
    <h1>Sign Up Today</h1>
    <form id="form">
      <div class="form-group">
        <label for="name">Full Name</label>
        <input type="text" id="name" placeholder="Full Name" />
      </div>
      <div class="form-group">
        <label for="phone">Phone</label>
        <input type="tel" id="phone" placeholder="555-555-555" />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="email@address.com" />
      </div>
      <div class="form-group">
        <label for="website">Website URL</label>
        <input type="url" id="website" placeholder="https://www.website.com" />
      </div>
      <div class="form-group">
        <label for="password1">Password</label>
        <input type="password" id="password1" placeholder="Create Password" />
      </div>
      <div class="form-group">
        <label for="password2">Confirm Password</label>
        <input type="password" id="password2" placeholder="Confirm Password" />
      </div>
      <button type="submit">Register</button>
    </form>
    <div class="message-container">
      <h3 id="message">Don't Hesitate!</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import FooTsxVue from "./components/FooTsx.vue";
import FooTsx from "./components/Foo";
import BarJsxVue from "./components/BarJsx.vue";
import BarJsx from "./components/Bar";

interface State {
  message: string;
}

export default defineComponent({
  components: {
    FooTsxVue,
    FooTsx,
    BarJsxVue,
    BarJsx,
  },
  setup() {
    const state = reactive({
      message: "Vue Form Validator",
    });
    return {
      state,
    };
  },
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Sen&display=swap');

html {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: Sen, sans-serif;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #c9cde3;
}

.container {
  width: 480px;
  height: 630px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 5px 30px 10px rgba(0, 0, 0, 0.1);
}
</style>
