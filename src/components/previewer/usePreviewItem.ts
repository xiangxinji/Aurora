import { defineComponent } from 'vue';

export default function register(name: string, components: any) {
  return defineComponent({
    inject: ['RenderStore', 'previewItems'],
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
      parentNodes: {
        type: Array,
      },
    },
    data() {
      console.log(this);
      return {
        name,
        state: this.conf,
        active: false,
      };
    },
    methods: {
      handleFocus(this: any, event: MouseEvent) {
        if (this.RenderStore) this.RenderStore.setCurrent(this.conf);
      },
      handleDelete(this: any) {
        console.log(Array.isArray(this.parentNodes));
        if (this.RenderStore) this.RenderStore.remove(this.state.id, this.parentNodes);
      },
      handleAppendCopy(this: any) {
        if (this.RenderStore) {
          const i = this.RenderStore.indexOf(this.state.id);
          this.RenderStore.append(JSON.parse(JSON.stringify(this.state)), this.parentNodes);
        }
      },
    },
    created(this: any) {
      this.RenderStore.on('current-change', (current: any) => {
        this.active = current === this.conf;
      });
    },
  });
}
