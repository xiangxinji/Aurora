import { defineComponent } from 'vue';

function handleBlur(target: HTMLElement) {
  target.classList.remove('preview-active');
}

export default function register(name: string, components: any) {
  return defineComponent({
    inject: ['RenderStore'],
    components,
    props: {
      conf: {
        type: Object,
        required: true,
      },
      current: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      console.log(this);
      return {
        name,
        state: this.conf,
      };
    },
    methods: {
      handleFocus(event: MouseEvent) {
        const target = event.currentTarget as HTMLElement;
        target.classList.add('preview-active');
        this.$emit('active', this.state);
      },
      handleBlur,
      handleDelete(this: any) {
        if (this.RenderStore) this.RenderStore.remove(this.state.id);
      },
      handleAppendCopy(this: any) {
        if (this.RenderStore) {
          const i = this.RenderStore.indexOf(this.state.id);
          this.RenderStore.set(JSON.parse(JSON.stringify(this.state)), i + 1);
        }
      },
    },
  });
}
