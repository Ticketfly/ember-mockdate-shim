import Component from '@glimmer/component';

export default class IndexPageComponent extends Component {
  get dateYear() {
    return new Date().getFullYear();
  }
}