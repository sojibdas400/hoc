import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ModalHeaderComponent extends Component {
  @action handleClose() {
    // console.log('hi');
    return this.args.onClose();
  }
}
