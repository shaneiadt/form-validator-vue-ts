<template>
  <form id="form">
    <Input
      v-for="(field, i) in state.fields"
      :field="field"
      :key="i"
    />
    <button type="submit">Register</button>
  </form>
  <div class="message-container">
    <h3 id="message">Don't Hesitate!</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import type { Field } from "../../interfaces";
import Input from "../Input/Input.vue";

interface State {
  fields: Field[];
}

export default defineComponent({
  name: "Form",
  components: {
    Input,
  },
  setup() {
    const state = reactive<State>({
      fields: [
        {
          label: "Full Name",
          id: "name",
        },
        {
          label: "Phone",
          id: "phone",
          type: "tel",
          placeholder: "777-777-777",
        },
        {
          label: "Email",
          id: "email",
          type: "email",
          placeholder: "email@address.com",
        },
        {
          label: "Website URL",
          id: "website",
          type: "url",
          placeholder: "https://www.website.com",
        },
        {
          label: "Password",
          id: "password1",
          type: "password",
          placeholder: "Create Password",
        },
        {
          label: "Password",
          id: "password2",
          type: "password",
          placeholder: "Confirm Password",
        },
      ],
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