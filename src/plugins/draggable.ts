import { App } from 'vue';
import draggable from 'vuedraggable';

console.log(draggable);
export default {
  install(app: App) {
    app.component('draggable', draggable);
  },
};
