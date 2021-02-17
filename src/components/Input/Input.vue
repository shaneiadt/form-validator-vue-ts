<template>
  <div class="form-group">
    <label for="name">Full Name - {{label}}</label>
    <input type="text" id="name" placeholder="Full Name" />
  </div>
</template>

<script>
import { defineComponent, toRef } from "vue";

export default defineComponent({
  name: "Input",
  setup(props) {
    const label = toRef(props, "label");
    console.log(label.value);
    return {
      label,
    };
  },
});
</script>

<style lang="css">
.form-group {
  height: 65px;
}

label {
  position: relative;
  bottom: 3px;
}

input {
  width: 100%;
  height: 34px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
  outline: none;
  box-sizing: border-box;
  transition: all 0.3s;
}

input:valid {
  border: 1px solid green;
}

input:invalid {
  border: 1px solid red;
}
</style>