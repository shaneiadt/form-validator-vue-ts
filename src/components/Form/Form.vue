<template>
  <form id="form">
    <Input :label="'Full Name'" :id="'name'" />
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
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import Input from "../Input/Input.vue";

interface State {
  name: string;
}

export default defineComponent({
  name: "Form",
  components: {
    Input,
  },
  setup() {
    const state = reactive<State>({
      name: "Form",
    });

    return {
      state,
    };
  },
});
</script>

<style lang="css">
form {
  width: 90%;
}

button {
  cursor: pointer;
  color: #fff;
  background: black;
  border: none;
  border-radius: 5px;
  height: 50px;
  width: 100%;
  font-family: Sen, sans-serif;
  font-size: 20px;
  margin-top: 5px;
  letter-spacing: 2px;
  outline: none;
}

button:hover {
  filter: brightness(200%);
  background: rgb(32, 32, 32);
}

button:focus {
  outline: none;
}

.message-container {
  border: 1px solid black;
  border-radius: 5px;
  width: 90%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  color: black;
}
</style>