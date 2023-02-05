import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

// eslint-disable-next-line ember/no-classic-classes
export default Route.extend({
  store: service(),

  model() {
    return this.store.findAll('book');
  },
});
