import Model from '@ember-data/model';

export default class BookModel extends Model {
  title = Model.attributes();
  author = Model.attributes();
  description = Model.attributes();
}
