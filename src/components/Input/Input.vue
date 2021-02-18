<template>
  <div class="form-group">
    <label :for="id">{{ label }}</label>
    <input :type="type" :id="id" :placeholder="placeholder" />
  </div>
</template>

<script>
import { defineComponent, toRef } from "vue";

export default defineComponent({
  name: "Input",
  props: {
    label: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const label = toRef(props, "label");
    const id = toRef(props, "id");
    const type = toRef(props, "type") || "text";
    const placeholder = props?.placeholder ? toRef(props, "placeholder") : label.value;

    return {
      label,
      id,
      type,
      placeholder,
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