<script lang="tsx">
import {defineComponent, reactive} from 'vue';

interface State {
  name: string;
}

export default defineComponent({
  name: 'FooTsxVue',
  setup() {
    const state = reactive<State>({
      name: 'FooTsxVue',
    });

    return () => (
      <>
        <div class="foo-tsx-vue">{state.name}</div>
      </>
    );
  },
});
</script>

<style lang="css">
.foo-tsx-vue {
  color: green;
}
</style>