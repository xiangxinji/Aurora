import { App } from 'vue';
import clickOutside from './clickOutside';

export default {
  install(app: App) {
    app.directive(clickOutside.name, clickOutside);
  },
};
