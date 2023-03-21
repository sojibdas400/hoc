import Component from '@glimmer/component';
import { action } from '@ember/object';
export default class MyCompComponent extends Component {
  studentDetails = {
    name: 'sojib',
    age: 38,
    gender: 'male',
  };

  @action handleClick() {
    this.args.onClick();
  }
}
