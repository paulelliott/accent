import {inject as service} from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  exporter: service(),

  tagName: 'pre',
  content: '',

  didReceiveAttrs() {
    this._super(...arguments);

    this.exporter
      .jipt({
        ...this.getProperties(
          'project',
          'document',
          'version',
          'documentFormat'
        )
      })
      .then(data => this.set('content', data))
      .then(data => this.onFileLoaded(data));
  }
});
