<template>
  <form ref="form" id="form" @submit="submit">
    <Input v-for="(field, i) in state.fields" :field="field" :key="i" />
    <button type="submit">Register</button>
  </form>
  <div
    class="message-container"
    :class="{
      invalid: !state.isValid && state.message !== 'Do not hesitate!',
      valid: state.isValid,
    }"
  >
    <h3 id="message">
      {{ state.message }}
    </h3>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import type { Field } from "../../interfaces";
import Input from "../Input/Input.vue";
import { fields } from "./form.data";

interface State {
  isValid: boolean;
  message: string;
  fields: Field[];
}

export default defineComponent({
  name: "Form",
  components: {
    Input,
  },
  setup() {
    const state = reactive<State>({
      isValid: false,
      message: "Do not hesitate!",
      fields,
    });
    const form = ref<HTMLFormElement>();

    const submit = (e: Event) => {
      e.preventDefault();

      if (!form) return;

      let isValid = form.value?.checkValidity();

      for (const field of state.fields) {
        if (field.validation?.validate) {
          if (!field.validation?.validate() && isValid) isValid = false;
        }
      }

      if (!isValid) {
        state.isValid = false;
        state.message = "Please fill out all fields.";
      } else {
        state.isValid = true;
        state.message = "Form is valid congrats :)";
      }

      console.log({ isValid, fields });
    };

    return {
      state,
      submit,
      form,
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

.invalid {
  color: red;
  border-color: red;
}

.valid {
  color: green;
  border-color: green;
}
</style>