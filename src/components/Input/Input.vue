<template>
  <div class="form-group">
    <label :for="id">{{ label }}</label>
    <input ref="el" :type="type" :id="id" :placeholder="placeholder" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRef, ref, onMounted } from "vue";
import type { Field } from "../../interfaces";

export default defineComponent({
  name: "Input",
  props: {
    field: {
      type: Object as PropType<Field>,
      required: true,
    },
  },
  setup(props) {
    const label = toRef(props.field, "label");
    const id = toRef(props.field, "id");
    const type = toRef(props.field, "type") || "text";
    const placeholder = props.field?.placeholder
      ? toRef(props.field, "placeholder")
      : label.value;

    const htmlValidation = props.field.validation
      ? toRef(props.field.validation, "html")
      : null;

    const el = ref(null);

    onMounted(() => {
      if (htmlValidation) {
        for (const validation of htmlValidation.value) {
          const element = (el.value as unknown) as HTMLInputElement;

          if (element) {
            element.setAttribute(
              validation.attribute,
              validation.value ? validation.value : validation.attribute
            );
          }
        }
      }
    });

    return {
      el,
      label,
      id,
      type,
      placeholder,
      htmlValidation,
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